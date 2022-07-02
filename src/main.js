import Vue from 'vue'
import App from './App.vue'

// 1. 下载moment模块
import moment from 'moment'
import "bootstrap/dist/css/bootstrap.css";


Vue.config.productionTip = false
Vue.filter("setData", (val, str = '-') => {
  return moment(val).format(`YYYY${str}MM${str}DD`)
})
Vue.filter("getStr", (val, num) => {
  let str = ''
  if (num == 10000) {
    str = '万'
  } else {
    str = '千'
  }
  return (val / num) + str
})
new Vue({
  render: h => h(App),
}).$mount('#app')
