import Vue from 'vue'
import Router from 'vue-router'
import City from '@/components/city/City.vue'
import Detail from '@/components/detail/Detail'
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
      },{
        path:'/detail/:id',
        name:'Detail',
        component:Detail
      }
  ]
})
