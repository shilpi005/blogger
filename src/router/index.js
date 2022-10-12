import Vue from 'vue'
import VueRouter from 'vue-router'
import navBar from '../components/navBar.vue'
import HomeView from '../views/HomeView.vue'
import showMore from '../components/showMore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'navBar',
    component:navBar,

    children:[
      {
        path: '',
        name: 'homeView',
        component: HomeView
      },
      {
        path: '/detail/:id',
        name: 'showMore',
        component:showMore
      },
    ]

  }
  // {
  //   path: '/',
  //   name: 'homeView',
  //   component: HomeView
  // },
  // {
  //   path: '/detail',
  //   name: 'showMore',
  //   component:showMore
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
