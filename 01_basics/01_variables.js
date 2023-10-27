const accountId = 144553
let accountEmail = "rohit@google.com"
var accPassword = "12345"
accountCity = "Nainital"

//accountId = 2 //not allowed
accountEmail = "rd@apple.com"
accPassword = "121212"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

console.table([accountId,accountEmail,accPassword,accountCity,accountState])

/*
    Prefer not to use var
    because of issue in block scope and 

    Js is safe language , we can assign value to a variable without giving it's datatype

    Semicolons aren't compulsory

    If values of variable isn't given then -
        output : undefined
*/