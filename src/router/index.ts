import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    redirect: '/dashboard',
    children: [
      // {
      //   path: 'dashboard',
      //   name: 'dashboard',
      //   meta: { title: '仪表盘', icon: ['fas', 'tachometer-alt'] },
      //   component: () => import('@/views/Dashboard'),
      // },
      // {
      //   path: 'posts',
      //   name: 'post',
      //   meta: { title: '博文', icon: require('../assets/icons/code.svg') },
      //   redirect: '/posts/view',
      //   component: () => import('@/layouts/BlankLayout.vue'),
      //   children: [
      //     {
      //       path: 'view',
      //       name: 'view-posts',
      //       meta: { title: '管理文章', icon: ['fas', 'eye'] },
      //       component: () => import('@/views/ManagePost/ListPosts.vue'),
      //     },
      //     {
      //       path: 'edit',
      //       name: 'edit-posts',
      //       meta: { title: '编辑文章', icon: ['fas', 'pencil-alt'] },
      //       props: true,
      //       component: () => import('@/views/ManagePost/EditPost.vue'),
      //     },
      //   ],
      // },
      // {
      //   path: 'comments',
      //   name: 'comment',
      //   meta: { title: '评论', icon: ['fas', 'comment'] },
      //   component: () => import('@/views/ManageComment'),
      // },
      // {
      //   path: '*',
      //   redirect: '/dashboard'
      // }
    ],
  },

  {
    path: '/login',
    name: 'login',
    meta: { isPublic: true, title: '登陆' },
    component: () => import('@/views/Login/index.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
