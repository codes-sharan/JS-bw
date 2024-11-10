/**
 * Array 
 * - collection of data 
 * - separated by comma 
 * - stored in index-value pair 
 * - index are autodefined and always starts from 0 
 * - enclosed within []
 */

// 100
// let name = "Sandesh Bhattarai";
// let email = "sandesh@broadwayinfosys.com";
// let address = "Kathmandu";
// let phone = 9876543210;

let user_1 = [
    "Sandesh Bhattarai",                // 0
    "sandesh@broadwayinfosys.com",      // 1
    "Kathmandu",                        // 2
    9876543210                          // 3
]

console.log(user_1[0])
console.log(user_1[1])
console.log(user_1[2])
console.log(user_1[3])



let product = [
    "iPhone 12",                    // product name
    1280000,                        // price
    10,                             // discount in percentage
    10,                             // stock
    "apple",                        // brand
    "Oliz Store"                    // store 
]

// implement

// single dimensional Array
// if an array does not include any other array as a value 
user_1 = [
    "Sandesh Bhattarai",                // 0
    "sandesh@broadwayinfosys.com",      // 1
    "Kathmandu",                        // 2
    9876543210                          // 3
]
console.log(user_1[0])      // Sandesh Bhattarai

// multi dimensional Array
// atleast one array data within an array
let students = [
    [
        "Sandesh Bhattarai",                // 0
        "sandesh@broadwayinfosys.com",      // 1
        9876543210,                        // 2
        "Kathmandu"                          // 3
    ],
    [
        "User One",                // 0
        "one@user.com",      // 1
        "Kathmandu",                        // 2
        9812345670                          // 3
    ]
]

console.log(students[0][0]) // Sandesh Bhattarai

let user_obj = {
    email: "sandesh@broadwayinfosys.com",              
    name: "Sandesh Bhattarai",                        
    address: "Kathmandu",                                
    phone: 9876543210                                  
}

console.log(user_obj.name)



// form fill 
// object 
    // name, email, address

// product detail page 
    // object 



const popularCourses = [
    {
        id: 1,
        image: "image not found",
        title: "Digital Marketing 360° Training",
        duration: "3 months"
    },
    {
        id: 2,
        image: "image not found", 
        title: "MERN Stack Development Training",
        duration: "3 months"
    }
]

// <img src="popularCourses[0].image" />
console.log(popularCourses[0].id)
console.log(popularCourses[0].image)
console.log(popularCourses[0].title)
console.log(popularCourses[0].duration)

console.log("")

console.log(popularCourses[1].id)
console.log(popularCourses[1].image)
console.log(popularCourses[1].title)
console.log(popularCourses[1].duration)

// push, read

let allProducts = [];

let product1 = {
    name: "iPhone 12",
    price: 128000,
    discount: 10,
    brand: "apple"
}

// default operation push 
// queue
console.log("")
console.log(allProducts)
allProducts.push(product1)
console.log(allProducts)        // 0 index 

let product2  =  {
    name: "Galaxy s24 ultra",
    price: 200000,
    discount: 12,
    brand: "Samsung"
}

allProducts.push(product2)
console.log(allProducts)

// insert at top 
// 0, 1 ===>
let product3  ={
    name: "iPhone 14",
    price: 178000,
    discount: 5,
    brand: "apple"
}
allProducts.unshift(product3)


// 0,1,2
allProducts[3] = product3
console.log(allProducts)

// 0,1,2,3,7
allProducts[7] = product1
allProducts[5] = product2
// 0,1,2,3,5,7

allProducts.splice(2,0, product3)
// 0,1,2,3,4,6,8
console.log(allProducts)

// read 
// query 
const last  = allProducts.pop()     //{} last element 
// 0,1,2,3,4,6

const firstElem = allProducts.shift()       //{} 0 index value 
// 0,1,2,3,5

const indexed = allProducts.splice(2, 1);   // [{}]


// 
console.log(allProducts.length)

/**
 * .map()
 * .filter()
 * .reduce()
 * .forEach()
 * .some()
 */