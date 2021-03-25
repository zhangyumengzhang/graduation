import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PDFSave from 'vue-to-pdf'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'

// 配置请求的根路径 http://timemeetyou.com:8889/api/private/v1/  http://124.70.71.236:8000
axios.defaults.baseURL = '/api'
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('username')
  // 最后必须return config
  return config
})
Vue.use(VueI18n)
const messages = {
  en: { ...enLocale },
  zh: { ...zhLocale }
}
const i18n = new VueI18n({
  locale: 'en', // 这里看本地是否设置过，不存在就使用英文 en
  messages
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.use(ElementUI)
Vue.use(VueAxios, axios, PDFSave, ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
