function SetUsername(username){
//complex DB calls
this.username = username
console.log("called")
}
 function createUser(username , email , password){
    SetUsername.call(this , username)
    this.username = username
    this.email = email
    this.password = password

 }

 const malik = new createUser("malaik" , "maik@gmail.com" , "123")
 console.log(malik);
