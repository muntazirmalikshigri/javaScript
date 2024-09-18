const tinderUser = new Object();
console.log(typeof tinderUser);
tinderUser.id='m1122';
tinderUser.name='malik';
tinderUser.level=5;
console.log(tinderUser);

const regularUser = {
    id:'1122',
    fullname:{
        username:{
            firstname:"muntu",
            lastname:'malik'
        }
    }
};
console.log(typeof regularUser.fullname.username.firstname);
console.log(regularUser.fullname.username);
const obj1={1:"a",2:"b"};
const obj2={1:"c",2:"d"};
// const obj3={obj1,obj2};
// const obj3=Object.assign(obj1,obj2);
// console.log(obj3);
// const obj4={...obj1,...obj2,...obj3};
// console.log(obj4)


const user = [
    {
id:1122,
name:"fakhar"
},
{
 id:1133,
 name:"sohail"   
},
{
    id:144,
    name:"malik"
}
];
console.log(user[0].name);
console.log(Object.values(tinderUser))
console.log(tinderUser.hasOwnProperty("id"));

const course = {
    name:"js in hindi",
    price:"999",
    Instructor:"Hitesh"
};
const {Instructor} = course;
console.log(Instructor);