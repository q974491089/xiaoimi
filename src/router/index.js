import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
let route = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('../components/showList/index.vue'),
    name: 'index',
    children: [
      {
        path: 'indextop',
        component: () => import('../components/showList/indextop.vue'),
      },
    ],
  },
  {
    path: '/find',
    component: () => import('../components/showList/find.vue'),
    name: 'find',
  },
  {
    path: '/my',
    component: () => import('../components/showList/my.vue'),
    name: 'my',
    children: [
      {
        path: 'mysetting',
        component: () => import('../views/mylist/mysetting.vue'),
        name: 'mysetting',
        meta: { isShow: true },
      },
    ],
  },
  {
    path: '/setting',
    component: () => import('../components/showList/setting.vue'),
    name: 'setting',
  },
  {
    path: '/login',
    component: () => import('../components/showList/login.vue'),
    name: 'login',
    /* meta: {

    } */
  },
]
route.forEach((element, i) => {
  element.meta = {
    isShow: false,
  }
  if (element.name == 'login') {
    element.meta = {
      isShow: true,
    }
  }
  console.log(element)
})

const routess = new VueRouter({
  routes: route,
})
//全局路由守卫

routess.beforeEach((to, from, next) => {
  // console.log(to, from, next);
  // next();
  // console.log(to.name);
  // console.log(this.$route.path);
  /* if (localStorage.getItem('username')) {
        if (to.path == '/login') {
            console.log(1);
            next('/');
        } else {
            next();
        }
    } else {
        if (to.path == '/login') {
            console.log(1);
            next();
        } else {
            next('/login');
        }
    } */

  // next();
  // 区别
  if (to.name == 'login') {
    if (localStorage.getItem('username')) {
      next('/')
    } else {
      next()
    }
  } else {
    if (localStorage.getItem('username')) {
      next()
    } else {
      next('/login')
    }
  }
})
export default routess
