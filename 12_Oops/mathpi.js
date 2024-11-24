const decriptor = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(decriptor)
console.log(Math.PI)
Math.PI = 5
console.log(Math.PI)

const biscuit = {
    name:"prince",
    price:20,
    isAvailable:true,
    biscuitOrder(){
        console.log("biscuit is not ready")
    }
}

console.log(Object.getOwnPropertyDescriptor(biscuit , "name"))
Object.defineProperty(biscuit , "name",{
writable:false,
enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(biscuit , "name"));
for (const [key , value] of Object.entries(biscuit)) {
    if(typeof value !== "function"){
    console.log(`${key} : ${value}`)
    }
}