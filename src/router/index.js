import Vue from 'vue'
import Router from 'vue-router'
import Submit from '@/components/submit'
import Info from '@/components/info'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Submit',
      component: Submit
    },

    {
      path: '/info/:username',
      name: 'Info',
      component: Info
    }
  ]
})
