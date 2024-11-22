class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const malik = new User("malik shigri");
// console.log(malik.createId())

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = this.email
    }
}

const malikje = new Teacher("malik munna" ,"muna@gamil.com");
malikje.logMe()