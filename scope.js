function add(a,b){
     const total= a+b;
    // console.log(a,b);
    if(b>5){  //block scope
        const sum = 25+a+b;
        // console.log(sum)
    }
    else{
        const sum = 52+a+b;
       var current = sum ; //hoisting

    }
    console.log(current)
    return total;
}

add(5,4)