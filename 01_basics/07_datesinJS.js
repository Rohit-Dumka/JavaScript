//Dates 

let myDate = new Date()
console.log(myDate); //2023-10-28T09:28:49.548Z
console.log(myDate.toString());//Sat Oct 28 2023 09:28:49 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());//2023-10-28T09:28:49.548Z
console.log(myDate.toJSON());//2023-10-28T09:28:49.548Z
console.log(myDate.toLocaleDateString());//10/28/2023
console.log(myDate.toLocaleString());//10/28/2023, 9:28:49 AM
console.log(myDate.toLocaleTimeString());//9:28:49 AM
console.log(myDate.toUTCString());//Sat, 28 Oct 2023 09:28:49 GMT

console.log(typeof myDate);


// let myCreatedDate = new Date(2023,10,2)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023,10,2,5,3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate = new Date("01-13-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

// newDate.toLocaleString('default',{
//     weekday : "long",
// })