// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)

import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue'

Vue.component('vuetable', Vuetable)
Vue.component('vuetable-pagination', VuetablePagination)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
