function multipleBy5(num){
    return num*5;
};

multipleBy5.power = 4;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
};
// createUser("malik",60)
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
printMe();
const chae = new createUser("chae",30);
const tea = createUser("tea",20);
chae.printMe();
