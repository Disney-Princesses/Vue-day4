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
          ><input type="text" v-model.number ="item.count" @change="changeFn(item.id)"/><span @click="addFn(item)"
            >+</span
          >
        </td>
        <td>{{ item.price * item.count }}</td>
        <td><button @click="delFn(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="6">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delSelect">删除选中商品</button>
    <button @click="clearCar">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数：{{ selectNum }}</p>
      <p>总价: {{getTotal}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", price: 1000, c: false, count: 1 },
        { id: 2, name: "宝马", price: 2000, c: false, count: 1 },
        { id: 3, name: "奥迪", price: 3000, c: false, count: 1 },
      ],
    };
  },
  methods: {
    changeFn(val){
      let index = this.list.findIndex(ele => ele.id == val)
      if(this.list[index].count < 1 || isNaN(this.list[index].count)) {
        this.list[index].count = 1
        return alert('请输入正确的数字范围')
      }
    },
    addFn(item) {
      item.count++;
    },
    subFn(item) {
      if (item.count <= 1) return alert("不能再少了");
      item.count--;
    },
    delFn(id) {
      let index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    delSelect(){
      this.list = this.list.filter(ele => !ele.c)
    },
    clearCar(){
      this.list = []
    }
  },
  computed: {
    getTotal() {
      return this.list.reduce((sum, next) => {
        if (next.c) {
          sum += next.price * next.count;
        }
        return sum;
      }, 0);
    },
    isAll: {
      get() {
        return this.list.every((ele) => ele.c);
      },
      set(val) {
        this.list.forEach((ele) => (ele.c = val));
      },
    },
    selectNum() {
      return this.list.reduce((sum, next) => {
        if (next.c) {
          sum += next.count;
        }
        return sum;
      }, 0);
    },
  },
  
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
