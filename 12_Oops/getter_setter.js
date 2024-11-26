class User{
    constructor(email , password)
    {
    this.email = email
    this.password = password
    }

    get email(){
        return this.email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    get password(){
   return `${this._password}malik`
    }

    set password(value){
     this._password = value
    }
}

const malik =  User("malik@gmail.com","123");
console.log(malik.password)