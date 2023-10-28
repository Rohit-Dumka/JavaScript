// const fbUser = new Object()

const fbUser = {}

const mySym = Symbol("key1")

fbUser.id = "123abc"
fbUser.name = "Sammy"
fbUser.isLoggedIn = false
fbUser[mySym] = "mykey1"

// console.log(fbUser);


const regularUser = {
    email : "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rohit",
            lastname: "dumka"
        }
    }
}

// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname?.userfullname); //used in api responses 


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 ={ obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2) //object.assin(target,source) - static method
// copies all enumerable own properties from one or more source objects to a target object.
// it returns the modified target Object

// const obj3 = Object.assign({},obj1, obj2, obj4)
const obj3 ={...obj1, ...obj2} 
// console.log(obj3);


const users =[
    {
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
    },
    {
    }
]

users[1].email
// console.log(fbUser);

// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));
// console.log(fbUser.hasOwnProperty('isLoggedIn'));



//destructuring

const course ={
    coursename: "javascript",
    price : "999",
    courseInstructor: "hitesh",
}
// console.log(course.courseInstructor);

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor:ins} = course
console.log(ins);

// const navbar = (props.company) => {
// 
// }

// OR 

// const navbar = ({company}) => { //destructuring objects in react (props)
// }

// navbar(company = "hitesh")



//API's  - when you want someone else to do your work done

// json - object

//  {
//     "name": "rohit",
//     "coursename": "javascript",
//     "price" : "free"
//  }

//api's can be in array format too-

// [
//     {},
//     {},
//     {}
// ]

