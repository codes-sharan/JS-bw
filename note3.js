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

// const customerObj = new Customer();
// customerObj.name = "Hari";
// console.log(customerObj);

class Student extends Division {
  name;
  email;
  marksObtained;
}

class Division {
  percentage;
  divison;
}
