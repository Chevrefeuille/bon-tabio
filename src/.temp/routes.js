const c1 = () => import(/* webpackChunkName: "page--src--templates--recipe-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/src/templates/Recipe.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--recipes-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/src/pages/Recipes.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--photos-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/src/pages/Photos.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/src/pages/Index.vue")

export default [
  {
    path: "/recipe/:id/",
    component: c1
  },
  {
    path: "/recipes/",
    component: c2
  },
  {
    path: "/photos/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
