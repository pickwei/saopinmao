// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Swiper from '../static/js/swiper-3.4.1.min'


import '!style-loader!css-loader!./assets/css/ba.min.css'
import '!style-loader!css-loader!./assets/css/swiper-3.4.1.min.css'
// import '!style-loader!css-loader!./assets/css/style.css'
// import '!style-loader!css-loader!./assets/css/main.css'
// import '!style-loader!css-loader!./assets/css/zhibo.css'
// import '!style-loader!css-loader!./assets/css/fenlei.css'
// import '!style-loader!css-loader!./assets/css/shopping.css'
import '!style-loader!css-loader!./assets/css/details.css'
import '!style-loader!css-loader!./assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$http=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
