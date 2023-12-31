// primitive  : 
//call by value

// 7 type : String , Number, Boolean, null, undefined, Symbol, BigInt



// Reference type (non primitive)

// Array, Objects, Functions 




// //javascript -
// const score = 100
// //typescript -
// const score:number = 100


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
let userEmail;
const a =null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 12328983818921023n
console.log(bigNumber);



const heroes = ["shaktiman", "naagraj", "juniorG"] //ref type

let myObj= {
    name: "rohit",
    age : 23
} // values under {} are object


//function as var -

const myFunction = function(){
    console.log("Hello Wrold");
}

let newvar 
const anothervar = null //object type

console.log(typeof bigNumber)
console.log(newvar);
console.log(typeof anothervar);
console.log(typeof newvar);
console.log(typeof myFunction); //object function
console.log(typeof heroes);
console.log(typeof myObj);
//type of all non-primitives are : object


//for more -
//https://262.ecma-international.org/5.1/#sec-11.4.3

//******************************************************* */


// Stack (Primitive) Heap (Non-Primitive)

let num1=5
let num2=num1

num2=10
console.log(num1)
console.log(num2)
//see no change in num1, since value stored in stack

let user1 = {
    name: "anonymous",
    age : "10"
}

let user2 = user1
user2.name = "Rohit"

console.log(user1);
console.log(user2);
//changes done in user2 made changes in user1 automatically, coz objects are reference type /non-primitive
