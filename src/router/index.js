import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photos from '../views/Photos.vue'
import Recipes from '../views/Recipes.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
