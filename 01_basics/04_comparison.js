// console.log(2>1);

// console.log("2">1); //auto conversion by js

console.log(null >0);
console.log(null ==0);
console.log(null >=0);  //treat null as 0 here for more details read EcmaScript standards

// The reason is that an equality check == and comparisons ><>=<= works differently
// comparisons convert null to a number, treating it as 0
// That's why (3) null >=0 is true and null >0 is false



//strict check : === (check val + datatype)

console.log("2" == 2)
console.log("2" === 2);

