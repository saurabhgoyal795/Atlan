import Vue from 'vue'
import Router from 'vue-router'
import ModelAjax from './views/ModelAjax'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/model-ajax'
    },
    // model

    { path: '/model-ajax', component: ModelAjax },
  ]
})
