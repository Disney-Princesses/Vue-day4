const obj = {
    id: 1,
    name: '张三',
    hobby: ['抽烟', '喝酒', '烫头'],
    age: 20
}
const newObj = {}
const deepClone = (obj, newObj) => {
    for (let key in obj) {
        const item = obj[key]
        if (item instanceof Array) {
            newObj[key] = []
            deepClone(item, newObj[key])
        } else {
            newObj[key] = item
        }
    }
}
deepClone(obj, newObj)
console.log(newObj);        //{ id: 1, name: '张三', hobby: [ '抽烟', '喝酒', '烫头' ], age: 20 }
console.log(newObj == obj);  // false