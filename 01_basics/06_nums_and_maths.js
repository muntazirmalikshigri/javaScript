const score = 100;
const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
let num = 1000000;
console.log(num.toLocaleString());
const otherNumbers = 123.8966;
console.log(otherNumbers.toPrecision(5));

//**************Maths*********//
console.log(Math.abs(-4))
console.log(Math.ceil(2.2));
console.log(Math.floor(3.9));
console.log(Math.round(3.9));
console.log(Math.round(Math.random()*10+1));
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(min - max + 1)) * min);
