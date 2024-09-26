// truthy values
const email = "munta@gmail.com"
if(email){
    console.log("user got email")
}else{
    cosole.log("user don't have an email")
}



//falsy
false,0,-0,BigInt,null,undefined,NaN

//truthy values

//"0","false"," ",[],{},function(){}
// console.log(BigInt 9)

if(email.length===0){
    console.log("Empty array");
}

const empObj={};
if(Object.keys(empObj).length===0){
    console.log("Object is empty");
}
// Nullish coalescing operator(??):null undefined

let val1;
val1=5 ?? 10;
val1=null ?? 30;
console.log(val1)
val1=undefined ?? 25;
console.log(val1
);

const name =80;
name>=80 ? console.log("right"):console.log("false")
