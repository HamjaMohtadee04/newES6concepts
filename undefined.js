/*
8 ways to get undefined
1.variable that is not initialized
2.function with no return
3.parameter that will not be passed
4.if return has nothing on the right side will return undefined
5.property that does not exists on an objects will give undefined
6.accessing array elements outside of the index range
7.deleting an element inside an array
8.set a value directly to undefined



*/

let first 
console.log(first)



function second(a,b){
    const total = a+b;
}
const result = second();

console.log(result)



function third(a,b,c,d){
    const total =a+b+c+d;
    console.log(a,b,c,d)
}
third(2,5)




function noNegative(a,b){
    if (a<0 || b<0){
        return
    }
    return a+b;
}
const total = noNegative(2,-5);
console.log(total)




const fifth ={id:2,name:'sekh',age:40}
console.log(fifth.age,fifth.salary)



const sixth =[7,8,9,10,12,13]
// console.log(sixth[1],sixth[5],sixth[55])
//this not the approach of delete.use instead splice
delete sixth[1]
console.log(sixth)


const eight = undefined;
console.log(eight)


const ninth = null
const data = {results:[],updated:null}


// console.log(typeof undefined)

console.log(typeof null)


