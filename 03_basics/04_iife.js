// Immediately Invoked Function Expressions (IIFE)

(function hehe (){ //named iife
    console.log(`DB CONNECTED`);
})(); //to end this function/write more than one iffe , semicolon is required

// (function defenition)(execution call)
//to remove the pollution of global scope ,iife is used

( (name) => { //simple(unnamed) iife
    console.log(`DB CONNECTED TWO ${name}`);
})('rohit')
