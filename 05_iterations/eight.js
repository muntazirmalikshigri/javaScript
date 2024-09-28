const myNums = [1,2,3];
// const myTotal = myNums.reduce(function(acc,ccurval){
//     console.log(`acc: ${acc} and currval: ${ccurval}`);
//   return acc + ccurval
// },0);

const myTotal=myNums.reduce((acc,cural)=>acc+cural,0);
console.log(myTotal);

const shopCart = [
    {
        itemName:"jscourse",
        price:200
    },
    {
        itemName:"jscourse",
        price:200
    },
    {
        itemName:"jscourse",
        price:200
    }
];
const pricePay = shopCart.reduce((acc,item)=>acc+item.price,0);
console.log(pricePay);
