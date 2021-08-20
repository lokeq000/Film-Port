import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import mFilmList from '../views/m-film-list'
import mFilmPage from '../views/m-film-page'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/film-list',
    name: 'Film-list',
    component: mFilmList
  },
  {
    path: '/film-page',
    name: 'Film-page',
    component: mFilmPage,
    props:true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
