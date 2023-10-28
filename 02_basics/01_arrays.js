const myArr = [0,1,2,3,4,5]
// console.log(typeof myArr);
// console.log(myArr[2]);
//js array copy operations create shallow copies
// shallow copies : share the same references
// deep copies : doesn't share the same references


const myHeroes = ["Batman","Thor","Iron Man"]
// console.log(myHeroes);

//Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
// console.log(myArr);

myArr.unshift(9) //insert at front
myArr.shift() //pop value at front 
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9))
// console.log(myArr.indexOf(5));

const newArr=myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

//slice , splice

console.log("A ", myArr);

const mynewarr1 = myArr.slice(1,3)
console.log(mynewarr1);
console.log("B ",myArr);


const mynewarr2 = myArr.splice(1,3)
console.log(mynewarr2);
console.log("C ",myArr);

//slice : include only [start,end)
//splice : include both [start,end] but also manipulates original array