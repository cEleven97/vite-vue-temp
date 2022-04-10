import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
let routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('~/pages/home/index.vue')
  },
  {
    path: '/hello',
    component: () => import('~/pages/home/helloWord.vue')
  }
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
