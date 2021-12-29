import { createRouter, createWebHashHistory } from 'vue-router'

import Connect from '../views/connect.vue'
import Navig from '../views/navig.vue'
import NewPost from '../views/newPost.vue'
import UpdatePost from '../views/updatePost.vue'
import Profil from '../views/profil.vue'

const routes = [
  {
    path: '/',
    name: 'Connect',
    component: Connect,
  },
  {
    path: '/navig',
    name: 'Navig',
    component: Navig,
  },
  {
    path: '/newPost',
    name: 'NewPost',
    component: NewPost,
  },
  {
    path: '/updatePost',
    name: 'UpdatePost',
    component: UpdatePost
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
