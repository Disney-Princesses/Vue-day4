import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import moment from "moment";
Vue.filter('setDate', (val, n) => {
  return moment(val).format('YYYY' + n + 'MM' + n + 'DD')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
