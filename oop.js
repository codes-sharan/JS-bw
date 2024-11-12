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

const user = new User("Sandesh Bhattarai", "sandesh@broadwayinfosys.com");

// user.name = "Sandesh Bhattarai"
console.log(user.getName());
