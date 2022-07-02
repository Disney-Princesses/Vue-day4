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
        <td><input type="checkbox" v-model="item.flag" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td><button @click="reFn(item.id)">-</button> <input type="text" :value="item.picNum"
            @change="iptFn(item, $event)" />
          <button @click="addFn(item.id)">+</button>
        </td>
        <td>{{ item.price * item.picNum }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="6">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delIShow">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">

      <p>已经选中商品件数 {{ numFn }}</p>
      <p>总价 {{ pieAll }} </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", price: 250, picNum: 1, flag: false },
        { id: 2, name: "宝马", price: 202, picNum: 2, flag: false },
        { id: 3, name: "奥迪", price: 236, picNum: 1, flag: false },
      ],
      num: 1,
      checked: [],
      // test: ''
    };
  },
  methods: {
    // 删除按钮 - 得到索引, 删除数组里元素
    del(id) {
      const index = this.list.findIndex((item) => item.id == id)
      this.list.splice(index, 1)
    },
    // 点击增加
    addFn(id) {
      console.log(id);
      const index = this.list.findIndex((item) => item.id == id)
      console.log(index);
      this.list[index].picNum++
    },
    // 点击减一
    reFn(id) {
      const index = this.list.findIndex((item) => item.id == id)
      if (this.list[index].picNum == 1) {
        return this.list[index].picNum = 1
      }
      this.list[index].picNum--
    },
    // 点击删除选中的商品
    delIShow() {
      // 查找选中的商品
      let arr = this.list.filter((item) => {
        return item.flag
      })
      // 获取选中的索引
      let arrRndex = []
      arr.forEach((item) => {
        arrRndex[arrRndex.length] = this.list.findIndex((ele) => ele.id == item.id)
      })
      // 过滤出没有选中的商品
      const newArr = this.list.filter((item, index) => {
        return arrRndex.indexOf(index) == -1
      })
      // 将没有选中的商品重新赋值
      this.list = newArr
    },
    // 清空购物车
    delAll() {
      this.list = []
    },
    // change事件
    iptFn(ele, e) {
      let numStr = Number(e.target.value)
      if (numStr <= 1 || isNaN(numStr) === true) {
        alert("请输入数字")
        e.target.value = 1
      }
      const index = this.list.findIndex((item) => item.id == ele.id)
      this.$set(this.list[index], 'picNum', +e.target.value)
    }
  },
  computed: {
    // 全选与取消全选
    isAll: {
      set(val) {
        return this.list.forEach((item) => item.flag = val)
      },
      get() {
        if (this.list.length == 0) return false
        return this.list.every((item) => item.flag === true)
      }
    },
    // 选中的个数
    numFn() {
      let num = 0
      this.list.forEach((item) => {
        if (item.flag) {
          num += item.picNum
        }
      })
      return num
    },
    // 总价
    pieAll() {
      let num = 0
      this.list.forEach((item) => {
        if (item.flag) {
          num += item.price * item.picNum
        }
      })
      return num
    }
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
