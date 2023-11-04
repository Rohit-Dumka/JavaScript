const user ={
    username : "rohit",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}


console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);



//constructor function ----------


// const promiseOne = new Promise()
// const date = new Date()
// here : "new" is a constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    // return this //implicitly returned ,therefore no need to do return 
}

// const userOne = User("rohit", 12, true)
// const userTwo = User("hello",11,false)//value gets overitted 
// console.log(userOne);


//now both user has it's own copy
const userOne = new User("rohit", 12, true)
const userTwo = new User("hello",11,false)
console.log(userOne,constructor);
console.log(userTwo);


// after using new keyword -
// 1. empty Object is created, called Instance
// 2. a constructor function is called : pack all arguments inside him and gives them to you
// 3. all arguments gets inject in "this" keyword
// 4. can get all these objects in function