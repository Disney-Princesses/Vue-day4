<template>
  <div>
    <p>国内网站:粉丝数量：{{number | setData(1)}}</p>
    <p>国外网站:粉丝数量：{{number | setData(2)}}</p>
  </div>
</template>

<script>
export default {
  filters: {
    setData(val,num){
      let arr = val.toString().split('').reverse()
      if(num == 1){
        arr.splice(4, 0, '.')
        return arr.reverse().join('') + '万'
      }else if(num == 2){
        arr.splice(3, 0, '.')
        return arr.reverse().join('') + '千'
      }
    }
  },
  data () {
    return {
      number: 1876986,
    }
  }
}
</script>

<style>

</style>