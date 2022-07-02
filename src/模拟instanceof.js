function instance_of(test, type) {
    const pro = type.prototype;
    test = test.__proto__
    if (test === null) return false
    else if (test === pro) return true
    else return false
}

const arr = [1, 25, 2, 2]

const obj = {
    id: 1,
    age: '25',
    name: "李四"
}


console.log(instance_of(arr, Object))
console.log(instance_of(obj, Object))