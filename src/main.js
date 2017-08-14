// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueScrollTo from 'vue-scrollto'

import kickstartInfo from '@/store/index'
import App from './App'
import router from './router'

// Assets.
import '@/assets/styles/style.scss'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 800,
  easing: 'ease-out',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false,
})

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
