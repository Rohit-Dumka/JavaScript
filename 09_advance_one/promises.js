const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
//promise created

//consume---

promiseOne.then(function(){
    console.log("Promise consumed"); //will execute after resolve is called
})

//2-----------------------
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})


//3-----------
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "rohit", email : "rohit@google.com"})
    },1000)
},1000)

promiseThree.then(function(user){
    console.log(user);
})



//4--------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false //true
        if(!error){
            resolve({username: "rohit", password :"123"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})

//avoiding callback hell
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((name)=>{
//     console.log(name);
// }).catch(function(err){
//     console.log(err);
// })


promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((name)=>{
    console.log(name);
}).catch(function(err){
    console.log(err);
}).finally(() => console.log("The promise is either resolved or rejected"))



//5--------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password :"123"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(e){
        console.log(e);
    }
} 

consumePromiseFive()

//--------------------------------------------

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(e){
//         console.log("E: ",e);
//     }
// }

// getAllUsers()


// same using then.catch---------


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch((error) => console.log(error))

