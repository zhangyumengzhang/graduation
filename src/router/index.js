import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/logReg/login.vue'
// import home from '../components/home.vue'
import register from '../views/logReg/register.vue'
import registertwo from '../views/logReg/registertwo.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/', redirect: '/login' },
  { path: '/registertwo', component: registertwo }
  // {
  //   path: '/home',
  //   component: home,
  //   redirect: '/welcome',
  //   children: [{ path: '/welcome', component: Welcome },
  //     { path: '/books', component: books },
  //     { path: '/bookcategory', component: bookcategory },
  //     { path: '/shop', component: shop },
  //     { path: '/orders', component: orders },
  //     { path: '/person', component: person },
  //     { path: '/chart', component: chart },
  //     { path: '/data', component: data }
  //   ]
  // }
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
  const tokenstr = window.sessionStorage.getItem('email')
  if (!tokenstr) return next('/login')
  next()
})

export default router
