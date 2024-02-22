import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/props',
      name: 'props',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/01_props/Father.vue')
    },
    {
      path: '/custom-event',
      name: 'custom-event',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/02_custom-event/Father.vue')
    },
    {
      path: '/mitt',
      name: 'mitt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/03_mitt/Father.vue')
    },
    {
      path: '/v-model',
      name: 'v-model',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/04_v-model/father.vue')
    },
    {
      path: '/$attrs',
      name: '$attrs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/05_$attrs/Father.vue')
    },
    {
      path: '/$refs-$parent',
      name: '$refs-$parent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/06_$refs-$parent/Father.vue')
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/07_provide-inject/Father.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/08_pinia/pinia.vue')
    },
    {
      path: '/hooks',
      name: 'hooks',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/09_hooks/Person.vue')
    },
    {
      path: '/watch1',
      name: 'watch1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/10_watch/watch1.vue')
    },
    {
      path: '/watch2',
      name: 'watch2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/10_watch/watch2.vue')
    },
    {
      path: '/watch3',
      name: 'watch3',
      component: () => import('../views/10_watch/watch3.vue')
    },
    {
      path: '/watch4',
      name: 'watch4',
      component: () => import('../views/10_watch/watch4.vue')
    },
    {
      path: '/watch5',
      name: 'watch5',
      component: () => import('../views/10_watch/watch5.vue')
    }
  ]
})



export default router
