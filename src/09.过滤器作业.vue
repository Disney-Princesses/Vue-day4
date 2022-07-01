<template>
  <div>
    <h2>使用同一个过滤器处理1876986粉丝数量</h2>
    <p>国内网站：粉丝数量：{{num | fansNum(arg1)}} 万</p>
    <p>外国网站：粉丝数量：{{num |fansNum(arg2)}} 千</p>

    <h2>使用同一个过滤器处理1636450540055时间戳</h2>
    <p>{{time |formateDate(time1)}}</p>
    <p>{{time |formateDate(time2)}}</p>

  </div>
</template>

<script>

export default {
  data() {
    return {
      num: 1876986,
      arg1:0.0001,
      arg2:0.001,
      time:1636450540055,
      time1:'YYYY-MM-DD',
      time2:'YYYY/MM/DD'
    };
  },
  filters: {
    fansNum(val,arg) {
      return val*arg
    }
  },
  //  formateDate(val,timearg) {
  //     return moment(val).format(timearg)
  //   }
};
</script>

<style>
</style>