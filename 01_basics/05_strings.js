const name = "Muntazir";
const repoCount = 50;
console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("   malik");
console.log(gameName[0]);
console.log(gameName.__proto__.String)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));
const newString = gameName.substring(0,4);
console.log(newString);
const anotherString =gameName.slice(5,0)

console.log(gameName.trim());
const url = "https://malikshigri%20com";
console.log(url.replace("%20","."));
console.log(url.includes("malik"));
console.log(gameName.split("-"));



