<template>
  <div>
    <p>{{ date | setData }}</p>
    <p>{{ date | setData('/') }}</p>

    <h2>国外网站粉丝数量:{{ msg | getStr(10000) }}</h2>
    <h2>国内网站粉丝数量:{{ msg | getStr(1000) }}</h2>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      date: new Date(),
      msg: 1876986
    }
  }
}
</script>

<style>
</style>
