<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="1">男</option>
        <option value="0">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn">{{ id ? '修改' : '添加' }}</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ { 0: '女', 1: '男' }[item.sex] }}</td>
          <td>
            <button @click="delFn(item.id)">删除</button>
            <button @click="clcFn(item.id)">编辑</button>
          </td>
        </tr>
      </table>
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
          name: "李四",
          age: 20,
          sex: 1
        },
        {
          id: 2,
          name: "小美",
          age: 22,
          sex: 0
        },
      ],
      id: '',
      sex: 1,
      name: "",
      age: ""
    }
  },
  methods: {
    // 添加
    addFn() {
      // 非空判断
      if (this.name == '' || this.age == '') return alert('内容不能为空')
      if (this.id) {
        const index = this.list.findIndex((item) => item.id == this.id)
        const obj = {
          id: this.id,
          name: this.name,
          age: this.age,
          sex: this.sex,
        }
        this.list.splice(index, 1, obj)
        this.clearFn()
        return alert('修改成功')
      }
      const id = this.list[this.list.length - 1] ? this.list[this.list.length - 1].id + 1 : 100
      this.list.push({
        id,
        name: this.name,
        age: this.age,
        sex: this.sex
      })
      this.clearFn()
    },
    // 删除
    delFn(id) {
      const index = this.list.findIndex((item) => item.id == id)
      this.list.splice(index, 1)
    },
    // 编辑
    clcFn(id) {
      const index = this.list.findIndex((item) => item.id == id)
      this.name = this.list[index].name
      this.age = this.list[index].age
      this.sex = this.list[index].sex
      this.id = id
    },
    clearFn() {
      this.id = ''
      this.name = ''
      this.age = ''
      this.sex = 1
    }
  }
}
</script>
