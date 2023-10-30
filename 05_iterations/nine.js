//reduce ----- executes a user-supplied "reducer"

const myNums =[1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc+currval
// },3) //initial value

const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart =[
    {
        itemName : 'Js course',
        price : 3000
    },
    {
        itemName : 'Data Science course',
        price : 10000
    },
    {
        itemName : 'Python course',
        price : 999
    },
    {
        itemName : 'ruby course',
        price : 2000
    },
]

const total = shoppingCart.reduce( (acc,item) => acc+item.price,0)

console.log(total);