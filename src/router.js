import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Coin from './components/Coin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/coin',
      name: 'coin',
      component: Coin
    }
  ]
})
