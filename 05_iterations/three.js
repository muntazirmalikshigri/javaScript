// of loop
const arr=[1,2,3,4,5];
for(const val of arr){
    console.log(val)
};


const greetings = "malik";
for (const char of greetings) {
    console.log(char)
};


//    Maps


const ma1 = new Map();
ma1.set("a",40);
ma1.set("p","pakistan");
ma1.set("i","India")
for (const [key,val] of ma1) {
    console.log(key,"=",val);
}
