<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='item in list' :key='item.id'>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{red:item.price>100}">{{item.price}}</td>
            <td>{{item.time | formate}}</td>
            <td><a href="#" @click.prevent='delFn(item.id)'>删除</a></td>
          </tr>
          <tr style="background-color: #EEE">
              <td>统计:</td>
              <td colspan="2">总价钱为: {{countPrice}}</td>
              <td colspan="2">平均价: {{averagePrice}}</td>
          </tr>
        </tbody>
          
        <tfoot >
          <tr>
            <td colspan="5" style="text-align: center" v-if='list.length<=0'>暂无数据</td>
          </tr>
        </tfoot>
           
      </table>

      <!-- 添加资产 -->
      <form class="form-inline" style="display:flex;">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model.trim='name'
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.trim='price'
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent='addFn'>添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// 1. 明确需求
// 2. 标签+样式+默认数据
// 3. 下载bootstrap, main.js引入bootstrap.css
// 4. 把list数组 - 铺设表格
// 5. 修改价格颜色
export default {
  data() {
    return {
      list: [
        { id: 100, name: "外套", price: 199, time: new Date('2010-08-12')},
        { id: 101, name: "裤子", price: 34, time: new Date('2013-09-01') },
        { id: 102, name: "鞋", price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: "头发", price: 19900, time: new Date('2020-12-12') }
      ],
      name:'',
      price:0,
    };
  },
  methods:{
    addFn(){
      if(this.name==''||this.price==0)
      return alert("请填入信息后再提交！");
      const id=this.list[this.list.length-1]?this.list[this.list.length-1].id+1:100;
      this.list.push({ 
        id,
        name:this.name,
        price:this.price,
        time:new Date()
      })
    },
    delFn(val){
      const index=this.list.findIndex(ele=>ele.id==val);
      this.list.splice(index,1);
    }
  },
  computed:{
    countPrice(){
      return (this.list.reduce((sum,next)=>sum+(+next.price),0)).toFixed(2);
    },
    averagePrice(){
      return (this.countPrice/this.list.length).toFixed(2);
    }
  }
}


</script>

<style >
.red{
  color: red;
}
</style>
