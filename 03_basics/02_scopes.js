// let a=10
// const b=20
// var c=30

// var c=300 //global variable
let a=300

if(true){
    let a=10 //block scope
    const b=20
    var c=30
    // c=30 //still same 
    console.log("Inner:",a);
}

console.log(a);
// console.log(b);
// console.log(c);

