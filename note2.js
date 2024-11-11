class User {
  name;
  #email;
  address;
  phone;
  #gender;
  #dob;

  constructor(_name, _email, _address, _phone, _gender, _dob) {
    this.name = _name;
    this.#email = _email;
    this.address = _address;
    this.phone = _phone;
    this.#gender = _gender;
    this.#dob = _dob;
  }

  setEmail(_email) {
    this.#email = _email;
  }

  getEmail = () => {
    return this.#email;
  };
}

const userObj = new User();

userObj.setEmail("shpanthi09@gmail.com");

console.log(userObj.getEmail());
