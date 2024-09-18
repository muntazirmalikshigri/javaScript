// singleton
//objects literals

const mySym = Symbol("key1")
let jsUser={
    name:"malik",
    age:18,
    location:"karachi",
    email:"malik@google.com",
    isLoggedIn:false,
    [mySym]:"key1",
    loggedInDays:4
}
console.log(jsUser.name);
console.log(jsUser["email"]);
jsUser.name="muntazir";

//ye object ko freeze karta h
Object.freeze(jsUser);

jsUser.greeting=function(){
    console.log("Hello js user");
};
jsUser.greetingTwo=function(){
    console.log(`helle js user , ${this.name}`)
}
console.log(jsUser.greetingTwo())