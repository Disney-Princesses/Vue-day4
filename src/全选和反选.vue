<template>
  <div>
    <div>
      <span>全选:</span>
      <input type="checkbox" v-model="isAll"/>
      <button @click="btnFn">反选</button>
      <ul>
        <li v-for="(item,index) in arr" :key="index">
          <input type="checkbox" v-model="item.c"/>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computed: {
    isAll: {
      get(){
        return this.arr.every(ele => ele.c)
      },
      set(val) {
        this.arr.forEach(ele => ele.c = val);
      }
    }
  },
  methods: {
    btnFn(){
      this.arr.forEach(ele => ele.c = !ele.c)
    }
  }
};
</script>

<style></style>
