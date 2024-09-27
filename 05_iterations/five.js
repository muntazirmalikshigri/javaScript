//   for Each loop
const name =["fkhar","sohail","malik"];
// name.forEach(function(val){
//     console.log(val)
// })
name.forEach((item,indx,arr)=>{
    console.log(item,indx,arr);
});

const arr1=[{
    name:"shakoor",
    nm:30
},{
    name:"johar",
    num:60
},{
    name:"Riaz",
    num:40
}];
arr1.forEach((item)=>{
    console.log(item.name)
})

