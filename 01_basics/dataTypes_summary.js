//  permitive

// 7 types : string , numbers , boolean , null , undefined , bigint , symbol

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTem = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');

const bigNumber = 3345566321n;
console.log(id===anotherId);

//   Reference (non permitive)

//  array , object , function

let name = ["malik","muzammil","bashir"];
let myObj={
    name:'malik',
    class:9
}
function myFunction(){
    console.log('malik');
}


//stack(permitivr),heap(non-permitive) memory
let myYoutube = "muntazirmalikshigri";
let anotherYoutube = myYoutube;
console.log(myYoutube);
myYoutube="malikjee"
console.log(myYoutube);
console.log(anotherYoutube);

let userOne={
    email:"user@gamail.com",
    bank:"hbl"
}
let userTwo=userOne;
userTwo.email="muna@gmail";
console.log(userOne);
console.log(userTwo);
