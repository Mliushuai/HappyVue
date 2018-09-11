import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/components/home/HomeIndex'
import Login from '@/components/Login/Login'
import AboutUs from '@/components/page/AboutUs'
import FirstIndex from '@/components/page/HomeIndex'
import SetStating from '@/components/page/SetStating'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      components: HomeIndex
    },{
      path: 'FirstIndex',
      name: 'FirstIndex',
      components: FirstIndex
    },{
      path: 'AboutUs',
      name: 'AboutUs',
      components: AboutUs
    },{
    path:'SetStating',
      name:'SetStating',
      components:SetStating
    }
  ]
})
