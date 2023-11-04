// // let score = "33abc"
// // let score = null //object 0
// // let score = "hello" //string NaN
// // let score //undefined NaN
// let score = true  //boolean 1


// console.log(typeof score);
// console.log(typeof(score))

// let valInNumber = Number(score)
// console.log(typeof valInNumber);
// console.log(valInNumber); //no strict check in js



// // "33" => 33
// // "33abc" => NaN
// // true => 1; false => 0

// // let a =1 //true
// // let a="rohit" //true
// let a //false


// let booleanA = Boolean(a)
// console.log(booleanA); //true

// // 1=> true ; 0 => false

// let b =33
// let str = String(b)
// console.log(str);
// console.log(typeof str); 

//*************************** Operations ******************************

let value =3
let negValue = -value
console.log(value);
console.log(negValue);

str1 = "hello"
str2 = " rohit"
console.log(str1+str2)

console.log("1" +2) //12 
console.log(1 + "2") //12
console.log("1" + 2 + 2) //why ? follow link given @ end of file
console.log(1 + 2 + "2");  //bad practice, use parenthesis instead

console.log("1" + (2+2))
console.log(true)
console.log(+true);
// console.log(true+);
console.log(+"");

let num1,num2,num3
num1 = num2 = num3 = 2+2 //bad programming

let gameCounter =100
// gameCounter++
++gameCounter // both same 101
console.log(gameCounter);

// for more details visit - 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
