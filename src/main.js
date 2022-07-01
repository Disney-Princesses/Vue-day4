import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// 全局过滤器
import moment from "moment";
Vue.filter('setDate', (val, n) => {
  return moment(val).format('YYYY' + n + 'MM' + n + 'DD')
})


// bootstrap
import "bootstrap/dist/css/bootstrap.css"

new Vue({
  render: h => h(App),
}).$mount('#app')
