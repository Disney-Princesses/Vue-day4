<template>
  <div>
    
    <h2>{{ time | formateDate}}</h2>
    
  </div>
</template>

<script>
// 下载moment模块
import moment from 'moment'
export default {
  data() {
    return {
      time:new Date()
    };
  },
  // 定义过滤器
  filters:{
    formateDate(val) {
      return moment(val).format('YYYY-MM-DD')
    }
  }
};
</script>

<style></style>
