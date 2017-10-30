// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import Notifications from 'vue-notification'
import VueScrollTo from 'vue-scrollto'
import VeeValidate from 'vee-validate'
import VueAnalytics from 'vue-analytics'

import kickstartInfo from '@/store/index'
import App from './App'
import router from './router'

// Assets.
import '@/assets/styles/style.scss'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(Notifications)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 800,
  easing: 'ease-out',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false,
})
Vue.use(VeeValidate)

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-106984196-1',
  router
})

const store = new Vuex.Store(kickstartInfo)

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  store,
})

var gaTracking = new Vue({
  methods: {
    gaTracking: function () {
      // Open Help Modal.
      document.getElementById('download-button').onclick = trackEvent
      function trackEvent () {
        app.$ga.event({
          eventCategory: 'Module',
          eventAction: 'Commerce',
          eventLabel: 'Downloaded'
          // eventValue: 1
        })
      }
    }
  }
})

gaTracking.gaTracking()

var helpModal = new Vue({
  methods: {
    helpModal: function () {
      // Open Help Modal.
      document.getElementById('help-me-out').onclick = openModal
      function openModal () {
        document.getElementById('helpModal').className += ' ' + 'is-active'
      }

      // Close Help Modal.
      document.getElementById('modal-content__close-button').onclick = closeModal
      document.getElementById('modal-background').onclick = closeModal
      document.getElementById('modal-close').onclick = closeModal
      function closeModal () {
        document.getElementById('helpModal').classList.remove('is-active')
      }
    }
  }
})

helpModal.helpModal()
