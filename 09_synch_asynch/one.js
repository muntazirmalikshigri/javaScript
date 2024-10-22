//  synchronous in javaScript
// in synchronous code execute line by line
console.log("start");
for (let i=1;i<=10;i++){
    console.log(i);
}
console.log("end");


// asynchronous in javaScript
// there is no compulsory to execute code line by line
console.log('start');
setTimeout(()=>{
    for(let i=1;i<=10;i++){
        console.log(i)
    }
},6000);
console.log('end');