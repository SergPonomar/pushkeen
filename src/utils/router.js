import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import UserPage from '../pages/UserPage.vue'
import PostsPage from '../pages/PostsPage.vue'
import PostPage from '../pages/PostPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/users/:id', component: UserPage },
  { path: '/users/:id/posts', component: PostsPage },
  { path: '/posts/:id', component: PostPage },
  { path: "/:catchAll(.*)", component: NotFoundPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})