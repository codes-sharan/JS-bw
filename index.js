console.log("Hello world")

// single line comment 

/**
 * comment 
 * multi 
 * line 
 */

// document 
// alert 
// promt

// variables and constants 
// temporary data (run data changes with program )
// static data (fixed once declared not changable)
// variables 
var name_1 = "Sandesh Bhattarai"
var numb = 123;

console.log(name_1)
console.log(numb)


name_1 = "Update Name";
console.log(name_1) // Update Name

let email = 'sandesh@broadwayinfosys.com'
console.log(email)
email = 'sandesh.bhattarai@neputer.com'

// let 

// const 
const ROLE = 'admin';
// ROLE = 'tester'



// scope 
// global, block 

// var has only global  
var a = 10
console.log(a)      /// output: 10
{
    // block 
    var a = 20
    console.log(a)      /// output: 20
}
// 
console.log(a)          /// output? 20, 


// global as well block 
let b = 10;
console.log(b)  // 10
{
    let b = 20  // 20
    console.log(b)  // 20
}
console.log(b)  // 10


let name = "Sandesh Bhattarai"

let textdata = `text new 
next line 
`
console.log(textdata)
// make a file in js user.js 
// store your information in different varaibales 
// name, email, address, phone, college, education
// print the values 

// Data types 
/**
 * a. String/Text
 *      "", '', `` 
 * b. Number 
 *      integer, float, big int 
 * c. Boolean
 *      true, false
 * d. Null 
 *      null
 * e. Array 
 *      []
 * f. Object 
 *      {}
 * f.1. JSON (Universal Data type)
 * g. Undefined 
 * h. function 
 * 
 * i. symbol 
 * j. set 
 * k. Date
 */

const ddate = new Date()
// ddate

let d = 123;
console.log(typeof d)       // number
let f = 123.23; // number
let g = 123e4;  //  e4 expo

let h = 'true'      // string 
let i = true;           // boolean

let j = null;       // null, false, 0, "", '', ``
console.log(typeof j)

let k = [1,2,3];
console.log(typeof k)   // object 
let l = {
    key: "", 
    key: "value"
}
// l.key       // value

let m = {
    "key":"Value"
}

let n;  // undefined 


let o = function(){

}

// let mysymb  = Symbol()
// const obj= {
//     mysymb: "",
// }

const arr = [1,2,3,4,5,6,7,8,9,0,1,2,3,1]

const uniqueData = new Set(arr);

let y;  // 
y = 123

let x = 10;
x = 'asdfasdf'
x = [] 
x ={}

// operators and data types (Array)