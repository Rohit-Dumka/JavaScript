const marvelHeroes = ["thor","Ironman","Spiderman"]
const dcHeroes = ["superman","batman","flash"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][0]);

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);


const allnewHeroes =[...marvelHeroes, ...dcHeroes] //spread operator
// console.log(allnewHeroes);

const anotherArray = [1,2,3, [4,5,6,7],[6,7,[4,5]]]

const array2 = anotherArray.flat(Infinity)
console.log(array2);


console.log(Array.isArray("Rohit"))
console.log(Array.from("Rohit"));
console.log(Array.from({name: "Rohit"}));


let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3));