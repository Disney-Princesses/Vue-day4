import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('formateDate',function(val,timearg) {
  return moment(val).format(timearg)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
