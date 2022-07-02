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
        <td>
          <input type="checkbox" v-model="item.status" :value="item.name" />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="reduceFn(item.id)">-</span
          ><input type="text" :value="item.count" /><span
            @click="addFn(item.id)"
            >+</span
          >
        </td>
        <td>{{ item.price * item.count }}</td>
        <td><button @click="delFn(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="del">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数 {{ num }}</p>
      <p>总价{{ countPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "奔驰",
          price: 2000,
          count: 0,
          status: false,
          time: "2020-08-01",
        },
        {
          id: 2,
          name: "宝马",
          price: 3000,
          count: 0,
          status: false,
          time: "2020-08-02",
        },
        {
          id: 3,
          name: "奥迪",
          price: 4000,
          count: 0,
          status: false,
          time: "2020-08-03",
        },
      ],
      num: 0,
      countPrice: 0,
    };
  },
  computed: {
    isAll: {
      set(val) {
        this.list.forEach((item) => (item.status = val));
      },
      get() {
        return this.list.every((item) => item.status);
      },
    },
  },
  watch: {
    list: {
      handler(newList) {
        let n = 0;
        let sum = 0;
        newList.forEach((item) => {
          if (item.status == true) {
            n++;
            sum = sum + item.price * item.count;
          }
        });
        this.num = n;
        this.countPrice = sum;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    del() {
      // 删除按钮 - 得到索引, 删除数组里元素
      const index = this.list.findIndex((item) => item.status == true);
      this.list.splice(index, 1);
    },
    reduceFn(val) {
      const index = this.list.findIndex((item) => item.id == val);
      if (this.list[index].count <= 0) {
        return alert("数量不能小于0");
      }
      this.list[index].count--;
    },
    addFn(val) {
      const index = this.list.findIndex((item) => item.id == val);
      this.list[index].count++;
    },
    delFn(val) {
      const index = this.list.findIndex((item) => item.id == val);
      this.list.splice(index, 1);
    },
    delAll() {
      this.list = [];
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
input {
  text-align: center;
}
</style>
