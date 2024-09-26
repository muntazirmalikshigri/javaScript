//    for loop
for(let index=0;index<=10;index++){
    const element=index;
    if(element==5){
        console.log("5 is my favorite");
        continue;
    }
    console.log(index)
};
// console.log(element)

// nested loop

// for(let i=0;i<=10;i++){
//     console.log("outer loop=====node 05_iterations/one.js")
//     for(let j=0;j<=10;j++){
//         console.log("inner loop")
//     }
// }

// loop on array

let myArr=["fakhar","bashir",12,8,9,"sohail"];
for(let i=0;i<myArr.length;i++){
    const element=myArr[i];
    console.log(element)
}