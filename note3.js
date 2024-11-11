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
customerObj.name = "Sandesh";
console.log(customerObj);

class Seller extends User {
  role = "seller";
  pan;
  vat;
}
const sellerObj = new Seller();
console.log(sellerObj);

// const customerObj = new Customer();
// customerObj.name = "Sandesh";
// console.log(customerObj);
