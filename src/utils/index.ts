/*
 * @Author: Innei
 * @Date: 2020-04-11 17:13:13
 * @LastEditTime: 2020-08-10 21:36:18
 * @LastEditors: Innei
 * @FilePath: /mx-admin/src/utils/index.ts
 * @Coding with Love
 */

import isEqual from 'lodash/isEqual'
import isObject from 'lodash/isObject'
import transform from 'lodash/transform'
import isURL from 'validator/lib/isURL'

export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const pickNoEmpty = <T = any>(
  obj: T,
): Partial<T> | undefined | any[] => {
  if (!obj) {
    return
  }
  if (Array.isArray(obj)) {
    return obj.length > 0 ? obj : undefined
  }
  if (isObject(obj)) {
    // @ts-expect-error
    return Object.fromEntries(
      Object.entries(obj).filter(([, val]) => {
        if (Array.isArray(val)) {
          return val.length > 0
        }
        return val !== '' && typeof val !== 'undefined'
      }),
    )
  }
  return obj
}

/**
 * 去掉对象中的空串, 转化为 undefined
 * @param obj
 */
export const emptyString2Undefined = <T = Record<string, any>>(obj: T): T => {
  const entries = Object.entries(obj)
  const newObj = {}
  for (const [key, val] of entries) {
    if (val === '') {
      newObj[key] = undefined
    } else {
      newObj[key] = val
    }
  }
  return newObj as T
}

export function difference(object, base) {
  function changes(object, base) {
    return transform(object, function (result: any, value, key) {
      if (!isEqual(value, base[key])) {
        result[key] =
          isObject(value) && isObject(base[key])
            ? changes(value, base[key])
            : value
      }
    })
  }
  return changes(object, base)
}

export function urlResolve(base: string, ...path: string[]) {
  if (
    !isURL(base, { require_protocol: true }) &&
    !base.match(/^http:\/\/localhost/)
  ) {
    throw new TypeError('need protocol')
  }
  return (
    (base.charAt(base.length - 1) === '/' ? base : base + '/') + path.join('/')
  )
}
