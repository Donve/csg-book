// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './common/style/reset.css'
import Axios from './axios'
import router from  './router' 
import iView from  'iview'
import 'iview/dist/styles/iview.css'
Vue.prototype.$axios=Axios
Vue.config.productionTip = false
Vue.use(iView);
//图片懒加载
import LazyLoad from 'vue-lazyload'

Vue.use(LazyLoad, {
  error: require('@/assets/loading.gif'),  //错误的时候显示图片
  loading: require('@/assets/loading.gif'),  // 正在加载中的图片
  attempt: 1  // 每次加载几张
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

