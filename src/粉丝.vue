<template>
  <div>
    <p>国内网站粉丝数量：{{ num | getNum(1) }}</p>
    <p>国外网站粉丝数量：{{ num | getNum(2) }}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      num: 1876986,
    };
  },
  filters: {
    getNum(val, n) {
      let arr = val.toString().split("").reverse();
      if (n == 1) {
        arr.splice(4, 0, ".")
        return arr.reverse().join("") + "万";
      } else {
        arr.splice(3, 0, ".")
        return arr.reverse().join("") + "千";
      }
    },
  },
};
</script>

<style></style>
