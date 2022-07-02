function instance_of(test, type) {
    const pro = type.prototype;
    test = test.__proto__
    if (test === null) return false
    else if (test === pro) return true
    else return false
}
const arr= [1,2,3]
const arr1=5
const obj={
    a:1,
    b:2,
}
console.log(instance_of(arr,Array));
console.log(instance_of(arr1,Array));
console.log(instance_of(arr,Object));
console.log(instance_of(obj,Object));


