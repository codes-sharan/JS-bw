// loop iteration, repetation


let i = 11;

do {
    console.log(i)
    i++    
} while(i <= 10)

/**
 * let i = 11
 * do 
 * console.log(i)           // 11
 * i++                      // 12 
 * while(12 <= 10) => false     // loop end
 * 
 * 
 * 
 */

i = 1;
while(i <= 10) {
    console.log(i)
    i++
}


for(i = 1; i<=10; i++){
    console.log(i)
}

i = 1; 
for(;i<=10; i++) {
    console.log(i);
}

for(i = 1;;i++) {
    if(i>10) {
        break;
    }
    console.log(i)
}

i = 1
for(;;i++) {
    if(i>10) {
        break;
    }
    console.log(i)
}


i = 1
for(;;) {
    if(i>10) {
        break;
    }
    console.log(i)
    i++
}


// Task - 3 
// Print first 20 even numbers 
for(let j = 1; j<=40; j++) {
    if(j%2 === 0) [
        console.log(i)
    ]
}

for(let j = 2; j <= 40; j+=2) {
    console.log(j)  
}

for(let j = 2, i = 1; i <= 20; i++,j+=2) {
    console.log(j)
}

// array data 
const numbs = [1,2,3,4,5,6,7,8,9,10]
// 10 => 10 index last index
// last Index = size - 1 
//sum of each numbers 
// string + number => string 
// undefined + number => NaN => not a number
let sum = 0;
for(i = 0; i < numbs.length; i++ ){
    sum += numbs[i];
    console.log(sum)
}

/***
 * *
 * *    *
 * *    *    *
 * *    *    *    *
 * *    *    *    *    *
 * 
 * 
 * 1    2    3    4    5    6    7
 * 1    2    3    4    5    6
 * 1    2    3    4    5
 * 1    2    3    4
 * 1    2    3
 * 1    2
 * 1
 * 
 * 
 * 1    2    3    4    5    6    7
 * 1                             7
 * 1                             7
 * 1                             7
 * 1                             7
 * 1                             7
 * 1    2    3    4    5    6    7
 * 
 */


for(i = 1; i <= 5; i++) {   // 2 <= 7
    let toPrint = "";
    for(j = 1; j <= i; j++) {   // j = 1, 3<=2
        toPrint += "*    ";
    }                                   // j++ => j = 3
    console.log(toPrint)
}                       // i++ => 3