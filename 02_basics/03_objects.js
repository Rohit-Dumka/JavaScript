//constructors -> singleton
// Object.create


//objects literals 
//objects - can define keys and values
//array - define only values


const mySym = Symbol("key1")


const user1 ={
    name : "Rohit",
    "full name" : "Rohit Dumka",
    // mySym : "mykey1", //wrong way
    [mySym]: "mykey1", //correct way
    age : 23,
    location : "Nainital",
    email : "rohitdumka@google.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Saturday"],
}

console.log(user1.name);
console.log(user1['email']);
console.log(user1["full name"]);
// console.log(user1.mySym); //wrong way (for symbol)
console.log(user1[mySym]);
console.log(typeof user1[mySym]);  

user1.email = "rohitdumka@tesla.com"
// Object.freeze(user1) //object is locked , no changes can be done now
user1.email ="rohitdumka@microsoft.com"
console.log(user1.email);
console.log(user1);

user1.greeting = function(){
    console.log("Hello Js User");
}

console.log(user1.greeting);
console.log(user1.greeting());

user1.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`); //string interpolation
}

console.log(user1.greeting2());