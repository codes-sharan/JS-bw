/**
 * a. Arithematic Operators
 *      +, -, *, /, %
 *  b. Increment or decrement 
 *          ++, --
 *  c. Assignment Operator 
 *      =, +=, -=, *=, /=, %=
 *  d. Concatination/ String Operator 
 *      + ,
 *  e. Comparision Operator (return boolean)
 *      <, >, <=, >=, ==, !=, ===, !==
 *  f. Logical Operators 
 *      &&,||, !
 *  g. Conditional operator or ternary operator 
 *      (exp) ? true statements : false Statements;
 *  h. Template Literals 
 *      `${}`
 *  i. Object Destructure
 *  j. Spread or Rest operator 
 *      ...
 */

let a = 10;
let b = 3;
let c = a / b;          // 10/3 => 3.3333333
let d = a % b;          // d => 1 

console.log(a)      // 10 
a++                 // a = a + 1
console.log(a)          // 11
a--
console.log(a)          // 10

// a = 10
console.log(a++)        // print, 10 , increment => a = 11, post assign
console.log(++a)        // increment=>12  print, 12


// 
a = a + 1               // 13
a++;                    // 14
++a;                    // 15
a += 1;                 // 16


let name = "Sandesh ";
let last = "Bhattarai"

console.log(name+last)       // Sandesh Bhattarai

name += last;   

console.log(name)       // Sandesh Bhattarai


let e = 10;
let f = '10'

console.log(e + f)        // 1010

console.log(e-f)        // 0
console.log(e*f)        // 100
console.log(e/f)        // 1
console.log(e%f)        // 0


console.log(name, last, e)
let g = 3
let h = 2

console.log(g <= h)      // false

// value or value and datatype
console.log(e === f)                // false    // value + datatype
console.log(e == f)                 // true     // only value

console.log(e !== f)        // true
console.log(e != f)         // false 


console.log((g > h) && (e !== f))
// true && true     => all the expression should be true 

console.log((g < h) || (e !== f))
// false || true        ==> If any one of the expression is true 


console.log(!(g > h))
// !true => false => ! => TURE -> FLASE -> TRUE


let numbs = [1,2,3,4,5]
let numb1 = 2

// numb1 => numbs
console.log(!numbs.includes(numb1))      // true 


const loading = true; 

console.log(
    (loading === true) ? "Loading..." : "Not Loading..."
)

const data = {
    age: 10
}

// let age = data.age ? data.age : null;
let age = data.age ?? null


let emailTemp = `Dear ${name},
    you have ${a} no of notification. 
    Regards, 
    ${name}
`

let user = {
    fullName: "Sandesh Bhattarai",
    email: "sandesh@broadwayinfosys.com",
    address: "Kathmandu",
    role: "Tutor",
    language: "MERN, PHP"
}


let sandeshUser = {
    ...user,                // spread 
    phone: 123456789,
    organization: "Broadway Infosys"
}
// let fullName =  user.fullName; 
// let email = user.email;
// let address = user.address;
// let leftover = {
//     role: user.role, 
//     language: user.language
// }

// destructuring of an object 
// rest 
let {fullName:username, email, address, ...leftover} = user;

console.log(username, email, address)


// Control statements 
// git 
// if -else 
// else -if 
// switch-case 