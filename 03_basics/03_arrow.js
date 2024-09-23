const user = {
    username:"malik",
    price:100,
    welcomeMessage : function(){
        // console.log(`${this.username} , Welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="fakhar";
// user.welcomeMessage()
// console.log(this)


const malik = ()=>{
    console.log(this)
};
console.log(malik())

const addTwo =(num1,num2)=> num1+num2;
console.log(addTwo(4,4));