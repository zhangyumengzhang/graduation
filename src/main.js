import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PDFSave from 'vue-to-pdf'

// 配置请求的根路径 http://timemeetyou.com:8889/api/private/v1/  http://124.70.71.236:8000
axios.defaults.baseURL = '/api'
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('email')
  // 最后必须return config
  return config
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(PDFSave)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
