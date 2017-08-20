import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home'
import zhibo from '../components/zhibo'
import fenlei from '../components/fenlei'
import cart from '../components/cart'
import userCenter from '../components/userCenter'

//首页子组件
import baihuo from  '../components/home-list/baihuo'
import jingxuan from  '../components/home-list/jingxuan'
import meizhuang from  '../components/home-list/meizhuang'
import mother from  '../components/home-list/mother'
import nvzhuang from  '../components/home-list/nvzhuang'
import ornament from  '../components/home-list/ornament'

//直播
 import left from '@/components/zhibo/zhiboleft'
 import right from '@/components/zhibo/zhiboright'

 //登录。注册
 import userInfo from '@/components/usercenter/userInfo'
 import login from '@/components/usercenter/login'
 import register from '@/components/usercenter/register'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
          {
            path: '/home',
            name: 'moren',
            component: jingxuan
          },
          {
            path: '/home/baihuo',
            name: 'baihuo',
            component: baihuo
          },
          {
            path: '/home/jingxuan',
            name: 'jingxuan',
            component: jingxuan
          },
          {
            path: '/home/meizhuang',
            name: 'meizhuang',
            component: meizhuang
          },
          {
            path: '/home/mother',
            name: 'mother',
            component: mother
          },
          {
            path: '/home/nvzhuang',
            name: 'nvzhuang',
            component: nvzhuang
          },
          {
            path: '/home/ornament',
            name: 'ornament',
            component: ornament
          }
      ]
    },
    {
      path: '/zhibo',
      name: 'zhibo',
      component: zhibo,
      children:[
        {
            path: '/zhibo/',
            name: 'zhibomain',
            component: left
        },  
        {
            path: '/zhibo/left',
            name: 'zhiboleft',
            component: left
        },  
        {
            path: '/zhibo/right',
            name: 'zhiboright',
            component: right
        }
      ]
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/usercenter',
      name: 'userCenter',
      component: userCenter,
      children:[
        {
          path: '/usercenter',
          name: 'login',
          component: userInfo
        },
        {
          path: '/usercenter/login',
          name: 'login',
          component: login
        },
        {
          path: '/usercenter/register',
          name: 'register',
          component: register
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
