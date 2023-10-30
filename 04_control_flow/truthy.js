const userEmail = "rohit@goole.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


//falsy values
// false, 0, -0, BigInt 0n, "", null , undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} // empty function, 


// to check function --

const email = []

// if (email.length === 0){
//      console.log("array is empty");
// }



// to check Object --

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// false == 0 //true
// false == '' //true
// 0 == "" //true


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 //used in database responses 
// val1 = null ?? 10 // NCO work : do safety check if null value comes
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 100 //asiggn first value found

console.log(val1);

// Terniary Operator  : small version of if-else

// condition ? true : false

const teaPrice = 100
teaPrice <= 50 ? console.log("less than 80") : console.log("more than 80");