import Vue from 'vue'
import Router from 'vue-router'
import enroll from './views/enroll'
import resume from './views/resume'
import myresume from './views/person'
import manage from './views/manage'
import managelist from './views/managelist'
import managesearch from './views/managesearch'
import resumeShow from './views/resumeShow'
import login from './views/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enroll',
      component: enroll,
      children:[
          {
            path: '',
            name: 'resume',
            component: resume
          },
          {
            path: 'myresume',
            name: 'myresume',
            component: myresume
          },
      ]
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children:[
        {
          path: '',
          name: 'managelist',
          component: managelist
        },
        {
          path: 'managesearch',
          name: 'managesearch',
          component: managesearch
        },
        {
          path: 'resumeShow',
          name: 'resumeShow',
          component: resumeShow
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
