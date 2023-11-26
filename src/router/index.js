import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/sector/:id',
    name: 'sector',
    component: () => import('../views/List.vue')
  },
  {
    path: '/password/:id',
    name: 'password',
    component: () => import('../views/Password.vue')
  },
  {
    path: '/create_folder',
    name: 'create_folder',
    component: () => import('../views/CreateFolder.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/create_password/:group_id',
    name: 'create_password',
    component: () => import('../views/CreatePassword.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
