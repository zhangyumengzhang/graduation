import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/logReg/login.vue'
import home from '../components/home.vue'
import register from '../views/logReg/register.vue'
import person from '../views/logReg/person.vue'
import myaudio from '../views/myaudio.vue'
import star from '../views/star.vue'
// import rnn from '../views/rnn.vue'
import welcome from '../views/welcome.vue'
import shangchuan from '../views/shangchuan.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/', redirect: '/login' },
  {
    path: '/home',
    component: home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: welcome },
      { path: '/myaudio', component: myaudio },
      { path: '/rnn', component: shangchuan },
      { path: '/star', component: star },
      { path: '/person', component: person }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to代表将要访问的路径
  // from代表从哪个路径跳转username
  // next是一个函数，代表放行
  // next() 放行  next('/login') 强制跳转
  if (to.path === '/login' || to.path === '/register' || to.path === '/registertwo') return next()
  // 获取token
  const tokenstr = window.sessionStorage.getItem('username')
  if (!tokenstr) return next('/login')
  next()
})

export default router
