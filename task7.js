class DivisionCalculation {
  marksObt;
  percentage;
  divison;

  setPercentage(marksObt) {
    this.percentage = (marksObt / 500) * 100;
  }

  getPercentage = () => {
    return this.percentage;
  };

  setDivision() {
    if (this.percentage >= 80) {
      this.divison = "Distinction";
    } else if (this.percentage >= 60) {
      this.divison = "First Division";
    } else if (this.percentage >= 45) {
      this.divison = "Second Division";
    } else if (this.percentage >= 32) {
      this.divison = "Third Division";
    } else {
      this.divison = "Failed";
    }
  }

  getDivision = () => {
    return this.divison;
  };
}

class Student extends DivisionCalculation {
  name;
  email;
  marksObt;
}

const std = new Student();
std.name = "Hari";
std.email = "hari@gmail.com";
std.marksObt = 346;

std.setPercentage(std.marksObt);
std.setDivision();

console.log(std.getPercentage());
console.log(std.getDivision());

// class DivisionCalculation {
//   constructor() {
//     this.marksObt = 0;
//     this.percentage = 0;
//     this.division = "";
//   }

//   setPercentage(marksObt) {
//     this.marksObt = marksObt;
//     this.percentage = (this.marksObt / 500) * 100;
//   }

//   getPercentage() {
//     return this.percentage;
//   }

//   setDivision() {
//     if (this.percentage >= 80) {
//       this.division = "Distinction";
//     } else if (this.percentage >= 60) {
//       this.division = "First Division";
//     } else if (this.percentage >= 45) {
//       this.division = "Second Division";
//     } else if (this.percentage >= 32) {
//       this.division = "Third Division";
//     } else {
//       this.division = "Failed";
//     }
//   }

//   getDivision() {
//     return this.division;
//   }
// }

// class Student extends DivisionCalculation {
//   constructor(name, email, marksObt) {
//     super();
//     this.name = name;
//     this.email = email;
//     this.setPercentage(marksObt);
//     this.setDivision();
//   }
// }

// // Example usage
// const student = new Student("Hari", "hari@gmail.com", 346);
// console.log(student.getPercentage());
// console.log(student.getDivision());
