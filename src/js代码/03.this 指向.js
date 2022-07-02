function fn() {
  console.log(this);//window
}
const obj = {
  name: "test",
  a() {
    // console.log(this.a);//this指向函数的调用对象obj
    console.log(this)
    setTimeout(function () {
      // console.log(this.a);//this指向window
      console.log(this)
    }, 1000);
  },
  b() {
    console.log(this);//this指向调用对象obj
    fn();
  },
};
obj.a();
obj.b();