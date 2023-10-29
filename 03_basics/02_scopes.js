// let a=10
// const b=20
// var c=30

// var c=300 //global variable
let a=300

if(true){
    let a=10 //block scope
    const b=20
    var c=30
    // c=30 //still same 
    // console.log("Inner:",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username ="Rohit"

    function two(){ //closure : inner function can accesss variables of outer function
        const website ="github"
        // console.log(username); 
    }
    // console.log(website); //error out of scope

    two() 
}

one()

if(true){
    const username="rohit"
    if(username === "rohit"){
        const website = "github"
        // console.log(username + website);
    }
    // console.log(website); //error oos
}

// console.log(username); error oos


// ************************* interesting ***************************


console.log(addone(5));

function addone(num){
    return num +1
}



console.log(addTwo(5)); //can't access before initiallization : Hoisting

const addTwo = function(num){  //function or expression
    return num+2
}