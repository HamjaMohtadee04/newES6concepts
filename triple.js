//always use ===
//equal comparison doesnt work for non-primitive


const  first = 2;
// const second =2;
 const second ='2';
// if(first== second){
if(first=== second){
    console.log("values are equal")
}
else{
    console.log("values are not equal")
}

//type coercion**
//type conversion**


//== will check value
// === will check value and type
//will not check for non  primitive
const  third =[];
// const second =2;
// const fourth= third     non primitive
  const fourth =[];
// if(first== second){
if(third === fourth){
    console.log("values are equal")
}
else{
    console.log("values are not equal")
}
