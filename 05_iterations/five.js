const coding =['js','ruby','c++','python','java']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName : "javascript",
        fileName : 'js'
    },
    {
        languageName : "C++",
        fileName : 'cpp'
    },
    {
        languageName : "python",
        fileName : 'py'
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
