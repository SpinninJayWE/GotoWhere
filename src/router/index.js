import Vue from 'vue'
import Router from 'vue-router'
import City from '@/components/city/City.vue'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/',
        component:()=>import('@/components/Home/Home.vue')
      },
      {
        path:'/city',
        name:'city',
        component:City
      }
  ]
})
