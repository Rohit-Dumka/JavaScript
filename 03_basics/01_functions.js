

function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}

// sayMyName() //function reference : sayMyName
//function execution : sayMyName()


function addnums(num1,num2){ //type not req //parameters
    console.log(num1+num2);
}

// addnums(3,null) //arguments




// function message(username){
//     return `${username} just logged in`
// }

// function message(username){
//     if(username === undefined){ //(!username) -both same
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// function message(username = "sam"){ //default value : sam
//     return `${username} just logged in`
// }


// console.log(message("Rohit"));
// console.log(message());

// function calculateCarPrice(num1){
//     return num1
// }
// function calculateCarPrice(...num1){
//     return num1
// }
function calculateCarPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCarPrice(200,400,500,800));

const user ={
    username :"rohit",
    age: 19
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    age : "21"
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,800,1200]));

