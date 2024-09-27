const myObj={
    js:"JavaScript",
    Py:"python",
    swift:"swift"
};
for (const key in myObj) {
    console.log(`${key}:${myObj[key]}`)
};
const arr=["js","py","cpp","ruby"];
for (const key in arr) {
   console.log(arr[key])
}