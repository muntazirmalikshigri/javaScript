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
console.log(loginUserMessage())
