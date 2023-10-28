const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(5));
console.log(balance.toFixed(1))

const Othernumber = 23.59229
const anothernumber = 123.59229
const thirdnumber = 1123.59229
console.log(Othernumber.toPrecision(3));
console.log(anothernumber.toPrecision(3));
console.log(thirdnumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString()); //US standard
console.log(hundreds.toLocaleString('en-IN'));

// Number.MIN_VALUE etc


//********************* Maths***************************** */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4,7));
console.log(Math.min(4,2,1,9,12));
console.log(Math.max(3,11,2,19,23,4));

console.log(Math.random()); //always between 0-1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10));
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
