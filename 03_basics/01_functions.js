function sayMyName(){
    console.log("Muntazir Malik Shigri");
};
sayMyName();

function addTwoNumbers(num1,num2){
    // console.log(num1+num2);
    return num1+num2
};
addTwoNumbers(2,5);
const result = addTwoNumbers(3,4);
console.log("Result :",result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please defined a usernmae")
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

function caculateCartPrice(val1,val2,...num){
    return num;
}
console.log(caculateCartPrice(200,300,20,5000,400));

const user = {
    name:"sohail",
    id:1122
};
function handleObject(anyObject){
    console.log(`username is ${user.name} and his id is ${user.id}`)
};
handleObject(user);

const arr=[3,44,66,7,77];
function getArray(getArr){
    return getArr[1];
};
console.log(getArray(arr));
