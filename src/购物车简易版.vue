<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td><input type="checkbox" v-model="item.c" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="subFn(item)">-</span
          ><input type="text" v-model.number="item.count" @change="changeFn(item.id)"/><span
            @click="addFn(item)"
            >+</span
          >
        </td>
        <td>{{ item.price * item.count }}</td>
        <td><button @click="delFn(item)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="6">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="selectDel">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数:{{ selectSum }}</p>
      <p>总价:{{ priceSum }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", price: 500, count: 1, c: false },
        { id: 2, name: "宝马", price: 300, count: 1, c: false },
        { id: 3, name: "奥迪", price: 280, count: 1, c: false },
      ],
    };
  },
  methods: {
    // 优化
    changeFn(val) {
let index=this.list.findIndex(ele=>ele.id==val);
if(this.list[index].count<1||isNaN(this.list[index].count)) {
  this.list[index].count=1;
  return alert('请输入正确的值')
}
    },
    // 删除功能
    delFn(val) {
      const index = this.list.findIndex((ele) => ele.id == val.id);
      this.list.splice(index, 1);
    },
    // 加减功能
    addFn(val) {
      val.count++;
    },
    subFn(val) {
      if (val.count <= 0) return (val.count = 0);
      val.count--;
    },
    // 删除选中商品
    selectDel() {
      this.list = this.list.filter((ele) => !ele.c);
    },
    // 删除所有
    delAll() {
      this.list = [];
    },
  },
  computed: {
    // 全选功能
    isAll: {
      get() {
        return this.list.every((ele) => ele.c);
      },
      set(val) {
        this.list.forEach((ele) => (ele.c = val));
      },
    },
    selectSum() {
      return this.list.reduce((sum, next) => {
        if (next.c) {
          sum += next.count;
        }
        return sum;
      }, 0);
    },
    priceSum() {
      return this.list.reduce((sum, next) => {
        if (next.c) {
          sum += next.count * next.price;
        }
        return sum;
      }, 0);
    },
  },
  // watch:{
  //   "list.count"(newVal){
  //     console.log(newVal);
  // }
  // }
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
