class User {
    constructor(username){
       this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new couser added by ${this.username}`)
    }
}

const name = new Teacher("malik","malik@gamil.com","123");
name.addCourse()

const name1 = new User("malik shigrri")
name1.logMe()

