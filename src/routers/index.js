import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'movie',
    //   component: resolve => require(['@/views/movie/index.vue'], resolve),
    // },
    {
      path: '/movie',
      name: 'movie',
      component: resolve => require(['../views/movie/index.vue'], resolve),
      children: [
        {
          path: 'City',
          name: 'City',
          component: resolve => require(['../components/City/index.vue'], resolve),
        },
        {
          path: 'ComingSoon',
          name: 'ComingSoon',
          component: resolve => require(['../components/ComingSoon/index.vue'], resolve),
        },
        {
          path: 'NowPlaying',
          name: 'NowPlaying',
          component: resolve => require(['../components/NowPlaying/index.vue'], resolve),
        },
        {
          path: 'Search',
          name: 'Search',
          component: resolve => require(['../components/Search/index.vue'], resolve),
        },
        {
          path: 'detail/1/:movieId',
          name: 'detail',
          components: {
            default: resolve => require(['@/views/movie'], resolve),
            detail: resolve => require(['@/views/movie/detail.vue'], resolve),
          },
          props: {
            detail: true,
          },
        },
        {
          path: 'detail/2/:movieId',
          name: 'detail',
          components: {
            default: resolve => require(['@/views/movie'], resolve),
            detail: resolve => require(['@/views/movie/detail.vue'], resolve),
          },
          props: {
            detail: true,
          },
        },
        {
          path: '/movie',
          redirect: '/movie/NowPlaying' 
        }
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: resolve => require(['../views/cinema/index.vue'], resolve),
    },
    {
      path: '/mine',
      name: 'mine',
      component: resolve => require(['../views/mine/index.vue'], resolve),
    },
    {
      path: '*',
      redirect: '/movie'
    }
  ]
})
