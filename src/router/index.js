import Vue from 'vue'
import Router from 'vue-router'
import ChannelsList from '@/components/ChannelsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChannelsList',
      component: ChannelsList
    }
  ]
})
