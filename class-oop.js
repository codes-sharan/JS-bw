// DS
// Entity
// Eg. Ecommerce, Product, User, Order
// product => name, color, price, size, description, mfgDate
// user => name, email, address, phone, gender, datofBirth
// Blueprint ===> Object
// data, methods(functions)

// 4 Pillars of OOP => Encapsulation, Abstration, Inheritance, Polymorphism
// Encapsulate
// MVC ===> Model, Services, Middleware, Controller

// Access Modifier, public(default), private, protected
class User {
  name;
  #email;
  address;
  phone;
  #gender; // private
  #dob;

  constructor(_name, _email, _addres, _phone, _gender, _dob) {
    this.name = _name;
    this.#email = _email;
    this.address = _addres;
    this.phone = _phone;
    this.#gender = _gender;
    this.#dob = _dob;
  }

  // setEmail(_email){
  //     this.#email = _email
  // }

  getEmail = () => {
    return this.#email;
  };
}

const userObj = new User(
  "Hari Sharma",
  "hari@gmail.com",
  "Kathmandu",
  9876543210,
  "Male",
  "1991-01-01"
);
// userObj.setEmail("hari@gmail.com")
console.log(userObj);
// console.log(userObj.getEmail())

// class MailService{
//     // smtp serve connect
//     constructor(){
//         // smtp server connection code
//     }
// }

// const mailsvc = new MailService()

// class DBService {
//     constructor() {
//         // db Server connection code
//     }
// }

// const dbSvc = new DBService()
