//for of

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings ="hello world"

// for(const i of greetings){
//     console.log(i);
// }


//Map - object : holds key-value pairs 
//unique values , store in order in which we write them

const map = new Map()

map.set("IN","India")
map.set("USA","United States of America")
map.set("AUS","Australia")


// map.set("IN","India")
// map.set("USA","United States of America")
// map.set("AUS","Australia")
// map.set("IN","Ind") //this one replace previous "IN" value 

// console.log(map);

// for (const key of map) {
//     console.log(key); //prints all key,values
// }

// for (const [key,value] of map) { //print both key,value
//     console.log(key, ' : ', value);
// }

// for (const [i] of map) {  //print only key
//     console.log(i);
// }


const myObject ={
    'game1' : 'NFS',
    'game2' : 'COC',
    'game3' : 'SpiderMan',
}

// for (const [key,value] of myObject) {
//     console.log(key, ' : ', value);
// }
//for of, can't be used to iterate objects


