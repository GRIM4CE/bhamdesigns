import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars } from '@fortawesome/pro-solid-svg-icons'
import { faLinkedinIn, faGithub, faNpm, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faLinkedinIn, faGithub, faNpm, faStackOverflow)

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
