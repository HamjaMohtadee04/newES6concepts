/*truthy:
1.true
2,any number(+ve,-ve) than 0
3.any string other than empty string
4.'0','false'
5.array

falsy:
1.false
2.0
3.empty string
4.undefined
5.null
6.empty object
*/

// const x = 'truth or dare';
// let x= null;
// let x= {a:5,b:6}
let x =[]
console.log(x)
if (x){
    console.log('the value of x is truthy')
}
else{
    console.log('the value of x is falsy')
}

//optional
//check falsy
const y=null;
if(!x){
    console.log('value is falsy')
}

const z={class:9};
//check true
if(!!x){
    console.log('value is truthy')
}