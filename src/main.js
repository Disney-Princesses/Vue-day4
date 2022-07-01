import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false

Vue.filter('setDate', (val, str) => {
  return moment(val).format(`YYYY${str}MM${str}DD`)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
