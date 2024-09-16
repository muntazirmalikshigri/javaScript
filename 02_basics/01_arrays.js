//arrays
const myArr = [1,2,3,4,true,"malik"];
const myArr1 = ["munna","sohail","Aslam"];
const myArr2 = new Array(1,2,3,3,4);

// Arrays Method

// myArr.pop();
// myArr.unshift("fazal");
// console.log(myArr);
// console.log(myArr[4]);

console.log(myArr.includes("malik"));
console.log(myArr.indexOf("malik"));

const newArr = myArr.join();
console.log(newArr)

//slice and splice
console.log("A",myArr);
const newArr1 = myArr.slice(1,3);
console.log(newArr1);
console.log(newArr);