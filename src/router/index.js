import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/',
      component: () => import('../views/layout/index.vue'),
      children: [
        {
          path: '', // 默认子路由 
          name: 'home',
          component: () => import('../views/home/index.vue')
        },
        {
          path: 'me',
          name: 'me',
          component: () => import('../views/me/index.vue')
        },
        {
          path: 'video',
          name: 'video',
          component: () => import('../views/video/index.vue')
        },
        {
          path: 'qa',
          name: 'qa',
          component: () => import('../views/qa/index.vue')
        }
      ]
    }
  ]
})

export default router
