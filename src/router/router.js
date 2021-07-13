import Main from '../pages/Main'
import PostsPage from '../pages/PostsPage'
import PostIDPage from '../pages/PostIDPage'
import About from '../pages/About'
import { createRouter, createWebHistory } from "vue-router"


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostIDPage,
    
  }
]


const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;