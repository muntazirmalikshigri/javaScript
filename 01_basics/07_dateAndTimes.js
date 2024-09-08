let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toJSON());
// console.log(date.toTimeString());

let createDate = new Date("2024-02-07");
console.log(createDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDatee = new Date();
let newDate = newDatee.getDay();
// console.log(newDate.getDay());
if(newDate==='0'){
    console.log("Sunday")
}else if(newDate==='1'){
    console.log('Monday')
}
newDate.toLocaleString('dafault'{
    weekday:'long'
})

