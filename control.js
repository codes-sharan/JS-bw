/**
 * a. If-else 
 * b. esle-if
 * c. switch-case
 * d. Loop 
 *  i. do-while
 *  ii. while 
 *  iii. for 
 *  iv. for-in 
 *  v. for-of
 */

let day = "Monday";
    // Friday => Weekend 
    // Saturday or Sunday => holiday
    // Monday-Thursday => Working day

// if-else  nesting 
if(day === 'Friday') {
    // if body
    console.log("Friday")
} else {
    // else body
    // optional 
    if(day === 'Saturday' || day === 'Sunday')  {
        // 
        console.log("Holiday")
    } else {
        console.log("Working Day")
    }
}

// else if 
if(day === 'Friday') {
    console.log("Weekend")
} else if(day === 'Saturday'  || day === 'Sunday') {
    console.log("Holiday")
} else if(["Monday","Tuesday","Wednesday","Thursday"].includes(day)) {
//  else if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === 'Thursday'){
    console.log("Working Day");
}



let marksObt = 400;
let total = 500;
if(marksObt <= total) {

    let per = (marksObt/total) * 100;
    // if(marksObt > total) {
    //     console.log("Obtained score should be less than total.")
    // } else 
    if(per >= 80) {
        console.log("Distinction")
    } else if (per >= 60) {
        console.log("First Division")
    } else if (per >= 45) {
        console.log("Second Division")
    } else if (per >= 32) {
        console.log("Third Division")
    } else {
        console.log("Sorry! You are Failed.")
    }
} else {
    console.log("Obtained score should be less than total.")
}


const unitsConsumed = 350;
let billAmt = 0

if(unitsConsumed <= 30) {
    billAmt = 150;
} else if(unitsConsumed <= 50) {
    billAmt =  150 + (unitsConsumed-30) * 7.5
} else if(unitsConsumed <= 80) {
    billAmt = 150 + 20*7.5 + (unitsConsumed - 50) * 9;
}
//.... 
else {
    billAmt = 150 + 20*7.5 + 30 * 9 + 50 * 12 + 100 * 15 + (unitsConsumed - 230) * 20
}

console.log("Bill Amount: Npr. ", billAmt)


/**
 * Switch Case
 */

day = "Monday";
if(day === 'Friday') {
    console.log("Weekend")
} else if(day === 'Saturday' || day === 'Sunday') {
    console.log("Holiday")
} else {
    console.log("Weekday")
}


switch(day){
    case "Friday":
        console.log("Weekend")
        break;
    case "Saturday": 
    case "Sunday":
        console.log("Holiday");
        break;
    default:    // optional
        console.log("Weekday");
        break;      // optional
}


switch(true) {
    case (10<10): 
        // body
        break;
    default: 
        // body 
        break;
}