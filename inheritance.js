// Multi-Level
// A => B => C => D => E
// A <= B <= C <= D <= E

class User {
  name;
  email;
  address;
  phone;
}

class Customer extends User {
  role = "customer";
}

const customerObj = new Customer();
customerObj.name = "Hari";
console.log(customerObj);

class Seller extends User {
  role = "seller";
  pan;
  vat;
}
const sellerObj = new Seller();
console.log(sellerObj);

// Create a class called Student. Assign name, email and marks Obtained.
// Create another class called Division. Assign percentage and divsion in this class.
// Inherit Division to Student and find out the division and percetage of the student if 500 is total;
// - If percentage is >= 80            => division is Distinction
// - If percentage is >= 60 but < 80   => division is First Division
// - If percentage is >= 45 but < 60   => division is Second Division
// - If percentage is >= 32 but < 45   => division is Third Division
// - If percentage is < 32             => Sorry! You are failed

class DivisionCalculation {
  percentage;
  division;

  getDivision = () => {
    if (this.percentage >= 80) {
      this.division = "Distinction";
    }
  };
}

class Student extends DivisionCalculation {
  name;
  email;
  marksObt;

  getPercentage = () => {
    this.percentage = (this.marksObt / 500) * 100;
  };
}

const std = new Student();
std.name = "Hari Sharma";
std.email = "hari@gmail.com";
std.marksObt = 123;
std.getPercentage();
std.getDivision();
console.log(std);
