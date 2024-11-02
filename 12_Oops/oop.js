const user = {
    username:"malik",
    logedIn:8,
    signedIn:true,
    getUserDetails:function(){
        console.log("Got user detail from databse")
    }
};
console.log(user.username);
console.log(user.getUserDetails())

const promiseOne = new Promise()

function User(username,loginCount,isloggedIn){
    this.username = username
    this.loginCount = logedIn
    this.isloggedIn = signedIn

}
const userOne = User('malik',5,12)