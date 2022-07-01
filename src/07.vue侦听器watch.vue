<template>
  <div>
    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: ""
    }
  },
  // 目标: 侦听到name值的改变
  /*
  语法:
    watch: {
      变量名 (newVal, oldVal){
        // 变量名对应值改变这里自动触发
        // newVal 是改变之后的值
        // oldVal 是改变之前的值  
      }
    }
    注意，两个参数先newVal,后oldVal
  */
  watch:{
    name (newVal,oldVal) {
      console.log(newVal,oldVal);
    }
  }
}
</script>

<style>

</style>