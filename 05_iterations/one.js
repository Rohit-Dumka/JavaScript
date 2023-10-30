// for loop

// for (let i = 0; i < 10; i++) {
//     if(i == 5)
//         console.log("5 is best number");
//     console.log(i);
// }


// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//        console.log(`Outer loop value ${i} and Inner loop value ${j}`);   
//     }    
// }

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//        console.log(i + " * " + j + " = " + i*j);   
//     }    
// }


let myArray =["flash", 'batman','superman']

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }


//break and continue

for (let i = 1; i <=20; i++) { 
    if(i==5)
        continue
    if(i==10){
        console.log("detected 10")
        break;
    }
    console.log(i);
}