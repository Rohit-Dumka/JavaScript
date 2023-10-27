// let score = "33abc"
// let score = null //object 0
// let score = "hello" //string NaN
// let score //undefined NaN
let score = true  //boolean 1


console.log(typeof score);
console.log(typeof(score))

let valInNumber = Number(score)
console.log(typeof valInNumber);
console.log(valInNumber); //no strict check in js



// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let a =1 //true
// let a="rohit" //true
let a //false


let booleanA = Boolean(a)
console.log(booleanA); //true

// 1=> true ; 0 => false

let b =33
let str = String(b)
console.log(str);
console.log(typeof str); 