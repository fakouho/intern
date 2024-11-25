'use strict'

//1.배열
let arr = [1,'food',[2,4]]
console.log(arr[1])
console.log(arr[2][0])
//1_1.foreach
arr.forEach(function(index,str) {
    console.log(str,index);
});
//1_2 얕은 복사
let arr1=[1,2,3,4]
let arr2 = arr1;
console.log(arr2)
arr2[0]=5;
//1_2깊은 복사(전개구문)
let arr3=[1,2,3,4]
let arr4=[...arr3]

//2.object
let obj={
    nam :'강우석',
    old : 25,
    address : "하남금호타운"
}
console.log(obj);
console.log(obj.old);
console.log(obj.nam,obj.address)