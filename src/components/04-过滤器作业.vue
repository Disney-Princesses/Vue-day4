<template>
  <div id="app">
    <p>国内网站粉丝数量：{{num |numFilter(0)}}</p>
    <p>外国网站粉丝数量：{{num |numFilter(1)}}</p>

    <br><br>
    <p>时间戳过滤器</p>
    <p>{{time|formate}}</p>
    <p>{{time|formate('/')}}</p>
  </div>
</template>

<script>
import moment from "moment";
// 1. 明确需求
// 2. 标签+样式+默认数据
// 3. 下载bootstrap, main.js引入bootstrap.css
// 4. 把list数组 - 铺设表格
// 5. 修改价格颜色
export default {
  data() {
    return {
      num:1876986,
      time:new Date(),
    };
  },
  methods:{
  },
  filters:{
    numFilter(val,border){
      if(border){
        return val/1000+'千';
      }else{
        return val/10000+'万';
      }
    },
    formate(val,join){
      if(join){
        return moment(val).format("YYYY"+join+"MM"+join+'DD');
      }else{
        return moment(val).format("YYYY-MM-DD");
      }
    }
  }
}


</script>


