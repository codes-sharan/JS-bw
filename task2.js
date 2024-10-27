let units = 350;
let electricity_bill;

if (units <= 30) {
  electricity_bill = 150;
} else if (units <= 50) {
  electricity_bill = 150 + 7.5 * (units - 30);
} else if (units <= 80) {
  electricity_bill = 150 + 7.5 * (50 - 30) + 9 * (units - 50);
} else if (units <= 130) {
  electricity_bill = 150 + 7.5 * (50 - 30) + 9 * (80 - 50) + 12 * (units - 80);
} else if (units <= 230) {
  electricity_bill =
    150 +
    7.5 * (50 - 30) +
    9 * (80 - 50) +
    12 * (130 - 80) +
    15 * (units - 130);
} else {
  electricity_bill =
    150 +
    7.5 * (50 - 30) +
    9 * (80 - 50) +
    12 * (130 - 80) +
    15 * (230 - 130) +
    20 * (units - 230);
}

console.log("Bill amount is:", electricity_bill);
