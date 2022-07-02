const obj = {
  id: 1,
  name: "章三",
  msg: {
    age: 18,
  },
  color: ["red", "green", "yellow"],
};
let o = {}
// function deepCopy(newobj, oldobj) {
//   for (let k in oldobj) {
//     let item = oldobj[k]
//     if (item instanceof Array) {
//       newobj[k] = []
//       deepCopy(newobj[k], item)
//     } else if (item instanceof Object) {
//       newobj[k] = {}
//       deepCopy(newobj[k], item)
//     } else {
//       newobj[k] = item
//     }
//   }
// }
// deepCopy(o, obj)
// obj.msg.age=23
// console.log(obj);
// console.log(o);


