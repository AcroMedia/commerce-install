// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import kickstartInfo from '@/store/index'
import App from './App'
import router from './router'

// Assets.
import '@/assets/styles/style.scss'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store(kickstartInfo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  store,
})
