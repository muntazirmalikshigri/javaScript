//  ES6

class User1 {
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username} Shigri`
    }
}

const malik1 = new User("Malik","malik@gamil.com", "malik786");
console.log(malik1.changeUserName());

// behinde the scene

function User(username , email , password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

User.prototype.changeUserName = function(){
    return `${this.username} munna`
}
const malik = new User("fkhar","fakhar@gamil.com","123")
console.log(malik.changeUserName())