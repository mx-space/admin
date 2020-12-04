/*
 * @Author: Innei
 * @Date: 2020-05-21 17:01:09
 * @LastEditTime: 2020-08-05 10:33:54
 * @LastEditors: Innei
 * @FilePath: /mx-admin/src/socket/socket-client.ts
 * @MIT
 */

import { getToken } from '@/utils/auth'
import { Notification } from 'element-ui'
import io from 'socket.io-client'
import { configs } from '../configs'
import { $events } from '../main'
import router from '../router'
import { Notice } from '../utils/notice'
import { EventTypes, NotificationTypes } from './types'
Notification['warn'] = Notification['warning']
export class SocketClient {
  public socket!: SocketIOClient.Socket

  #title = configs.title
  #notice = new Notice()
  constructor() {
    this.socket = io(
      (process.env.VUE_APP_GATEWAY || 'http://localhost:2333') + '/admin',
      {
        timeout: 10000,
        reconnectionDelay: 3000,
        autoConnect: false,
        reconnectionAttempts: 3,
        transports: ['websocket'],
        query: {
          token: getToken(),
        },
      },
    )
    this.initIO()
  }
  initIO() {
    if (!this.socket) {
      return
    }
    this.socket.open()
    this.socket.on(
      'message',
      (payload: string | Record<'type' | 'data', any>) => {
        if (typeof payload !== 'string') {
          return this.handleEvent(payload.type, payload.data)
        }
        const { data, type } = JSON.parse(payload) as {
          data: any
          type: EventTypes
        }
        this.handleEvent(type, data)
      },
    )
  }
  reconnect() {
    this.socket.io.opts.query = {
      token: getToken(),
    }
    this.socket.open()
  }
  handleEvent(type: EventTypes, payload: any) {
    switch (type) {
      case EventTypes.GATEWAY_CONNECT: {
        break
      }
      case EventTypes.GATEWAY_DISCONNECT: {
        Notification.warning(payload)
        break
      }
      case EventTypes.AUTH_FAILED: {
        console.log('等待登陆中...')
        this.socket.close()
        break
      }
      case EventTypes.COMMENT_CREATE: {
        const body = payload.author + ': ' + payload.text
        const handler = () => {
          router.push({ name: 'comment' })
          notice.close()
        }
        const notice = Notification.success({
          title: '新的评论',
          message: body,
          onClick: handler,
        })
        // TODO
        this.#notice.notice(this.#title + ' 收到新的评论', body).then((no) => {
          if (!no) {
            return
          }
          no.onclick = handler
        })
        break
      }
      case EventTypes.ADMIN_NOTIFICATION: {
        const { type, message } = payload as {
          type: NotificationTypes
          message: string
        }

        Notification[type](message)
        break
      }
      case EventTypes.CONTENT_REFRESH: {
        Notification.warning('将在 1 秒后重载页面')
        setTimeout(() => {
          location.reload()
        }, 1000)
        break
      }
      case EventTypes.LINK_APPLY: {
        const sitename = payload.name

        const handler = () => {
          router.push({ name: 'friends' })
          notice.close()
        }
        const notice = Notification.success({
          title: '新的友链申请',
          message: sitename,
          onClick: handler,
        })
        this.#notice
          .notice(this.#title + ' 收到新的友链申请', sitename)
          .then((n) => {
            if (!n) {
              return
            }

            n.onclick = handler
          })
        break
      }
    }

    $events.$emit(type, payload)
  }
}
