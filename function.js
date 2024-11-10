/** 
 * builtin 
 * custom
 * 
 * synchronous 
 * asynchronous
 */

// general 
// function addNumbers(a, b) {
// const addNumbers =function(a, b){

// arrow 
const addNumbers = (a, b) => {
    //body function 
    // this , super, constructor
    let c = a + b;
    return c;   
}

const doubleNumber = (x) => {
    return x * 2
}

const printValue = (val) => {
    console.log(val);
}


// let result = addNumbers(10, 20)
// result = doubleNumber(result);

// let result = doubleNumber(addNumbers(10,20));

// console.log(result)
printValue(doubleNumber(addNumbers(10,20))) // void



const addTwoNumbers = (x, y = 0) => {
    let z = x + y;
    return z;
}

console.log(addTwoNumbers(10))  // 10
console.log(addTwoNumbers(10,20))  // 30



const addNumbers1 = () => {
    let g = 0
    sum = d + e
    return d * e;
    // 
}   // g destroy

let d = 10;
let e = 20;

let sum = 0
let f = addNumbers1();

console.log(f, sum);



// create a function to check if a number is even or odd. 
const checkEvenOrOdd = (numb) => {
    // if(numb%2===0) {
    //     return "Even";
    // } else {
    //     return "odd"
    // }
    return (numb%2===0) ? "Even" : "Odd"
}

console.log(checkEvenOrOdd(3))
console.log(checkEvenOrOdd(4))

// Create a js function to receive celcius and convert to Fahrenheit
// Formula to conversion: f = c * 9/5 + 32

// 
cToF(0) // 32