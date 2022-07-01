import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css" // 默认找文件夹下的index文件(但是这个不是所以需要写路径)
import moment from "moment"

Vue.config.productionTip = false
Vue.filter("formate",(val)=>{
  return moment(val).format("YYYY-MM-DD  HH:mm:ss")
})

new Vue({
  render: h => h(App),
}).$mount('#app')
