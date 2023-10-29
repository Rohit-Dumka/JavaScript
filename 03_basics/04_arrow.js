const user ={
    username : "rohit",
    age : 23,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`); //this : if you want to refer current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam" //context changed to sam
// user.welcomeMessage()

// console.log(this); //current context - empty
//global object in browser  :  window object
//that's why returns empty object in node env and window object in browser


// function hehe(){
//     let username ="rohit"
//     console.log(this.username); //works only inside of object
// }

// hehe()



// const  hehe = function(){ //remove function keyword and insert arrow : arrow function
//     let username ="rohit"
//     console.log(this.username);
// }


// const  hehe = () => { 
//     let username = "rohit"
//     console.log(this.username);
// }

// hehe()

// () => {}

// const addTwo = (num1, num2) => { // basic arrow function
//     return num1 + num2   //explicitly return 
// }

// const addTwo = (num1, num2) => num1 + num2  //implicit return 
// const addTwo = (num1, num2) => ( num1 + num2 ) 

const addTwo = (num1, num2) => ({ username: "rohit"}) //when to return object


console.log(addTwo(3,5));
