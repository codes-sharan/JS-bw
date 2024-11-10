const products = [
    {
        name: "Product one",
        price: 1000,
        discount: 10            // in percent
    },
    {
        name: "Product two",
        price: 1500,
        discount: 7            // in percent
    },
    {
        name: "Product Three",
        price: 2500,
        discount: 3            // in percent
    },
    {
        name: "Product Four",
        price: 2200,
        discount: 2            // in percent
    }
]

// calculate each discount value and after discount price and print
let disAmt = 0;
let afterDis = 0;


// for(let i = 0; i < products.length; i++) {
// for(let i in products) {
//     let prod = products[i];
for(let prod of products){
    disAmt = prod.price * prod.discount / 100;
    afterDis = prod.price - disAmt
    console.log("Name: ", prod.name, 
        "Price: Npr.", prod.price, 
        "Discount: ", prod.discount,
        "% Discount Amount: Npr.",disAmt, 
        "After Discount: Npr.",afterDis 
    )
}
/**
 * functions 
 * .map()
 * .filter()
 * .forEach()
 * .reduce()
 */


let students = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      marksObtained: 350
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      marksObtained: 420
    },
    {
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      marksObtained: 280
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      marksObtained: 450
    },
    {
      name: "Daniel Wilson",
      email: "daniel.wilson@example.com",
      marksObtained: 390
    },
    {
      name: "Olivia Brown",
      email: "olivia.brown@example.com",
      marksObtained: 310
    },
    {
      name: "James Taylor",
      email: "james.taylor@example.com",
      marksObtained: 470
    },
    {
      name: "Sophia Anderson",
      email: "sophia.anderson@example.com",
      marksObtained: 230
    },
    {
      name: "William Thomas",
      email: "william.thomas@example.com",
      marksObtained: 340
    },
    {
      name: "Isabella Jackson",
      email: "isabella.jackson@example.com",
      marksObtained: 410
    }
  ]

for(let std of students) {
    let per = std.marksObtained/500 * 100;
    std.percentage = per;

    // division 
    if(per >=80 ){
        std.division ="Distinction";
    } else if(per >= 60) {
        std.division ="First";
    } else if(per >= 45) {
        std.division ="Second";
    } else if(per >= 32) {
        std.division ="Third";
    } else {
        std.division = "Failed"
    }
    
    // print 
    console.log("Name: ",std.name)
    console.log("Email: ", std.email)
    console.log("Marks Obtained: ", std.marksObtained)
    console.log("Percentage: ", std.percentage+"%")
    console.log("Division: ", std.division)
    console.log("------------------------------------------")
}