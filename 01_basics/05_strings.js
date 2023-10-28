const name="abcd"
const classx = 10

console.log(name + classx + " hello");
console.log(`hello my name is ${name} and my class is ${classx}`);

const nickname = new String('rdx')
console.log(nickname);

console.log(nickname[0]);
console.log(nickname.__proto__);
console.log(nickname.length);
console.log(nickname.toUpperCase());
console.log(name.charAt(1));
console.log(name.indexOf('c'));

const first="abcdefgh"
const second=first.substring(0,3)
console.log(second);

let third=first.slice(0,3)
console.log(third);
third=first.slice(-8,6)
console.log(third);


const newname="            rohit          "
console.log(newname);
console.log(newname.trim());

const url1="www.apple.com"
console.log(url1.replace("apple","google"));
console.log(url1.includes('www'));

const tempname="hello-world-how-are-you"
console.log(tempname.split('-'));