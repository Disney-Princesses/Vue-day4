<template>
  <div>
    <!-- 过滤器作用： 可被用于一些常见的文本格式化。 -->
    <!-- **过滤器(filter)的使用分两步:** 
  1.注册过滤器 
      (1)局部过滤器
    filters: {过滤器名字: (值) => {return "返回处理后的值"}
      (2)全局过滤器
    Vue.filter("过滤器名", (值) => {return "返回处理后的值"});
     直接写在main.js上加
    2.使用过滤器-->
    <!-- 使用方式：过滤器只能用在<span style="color:red">**插值表达式{{}}和v-bind表达式中**</span>通过 ｜ 方式使用 -->
    <h2>{{ msg }}</h2>
    <h2>{{ msg | toUp}}</h2>
    <h2>{{ msg | toDown}}</h2>
    <h2 :title="msg|toDown">{{ msg | toUp}}</h2>

  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello,Word"
    };
  },
  // 定义过滤器
  filters:{
    toUp(val) {
      return val.toUpperCase()
    },
    toDown(val) {
      return val.toLowerCase()
    }
  }
};
</script>

<style></style>
