// // Object
// const  user = {
//     name: "",
//     getName: () => {

//     }
// }
// prototype based OOP
function User(_name, _email) {
  // data, functions
  this.name = _name;
  this.email = _email;
}

User.prototype.getName = function () {
  return this.name;
};

const user = new User("Hari Sharma", "hari@gmail.com");

// user.name = "Hari Sharma"
console.log(user.getName());
