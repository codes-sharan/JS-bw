const fullMarks = 500;

const studentScores = [
  {
    name: "Hari",
    email: "hari@gmail.com",
    marks: 387,
  },

  {
    name: "Ram",
    email: "ram@gmail.com",
    marks: 427,
  },

  {
    name: "Gita",
    email: "gita@gmail.com",
    marks: 347,
  },
];

for (scores of studentScores) {
  const perc = (scores.marks * 100) / fullMarks;

  if (scores.marks <= fullMarks) {
    if (perc >= 80) {
      div = "Distinction";
    } else if (perc >= 60) {
      div = "First Division";
    } else if (perc >= 45) {
      div = "Second Division";
    } else if (perc >= 32) {
      div = "Third Division";
    } else {
      div = "Failed";
    }
  } else {
    console.log("Invalid marks: Marks should be <= fullMarks.");
  }

  console.log(`Name ${scores.name}
Email: ${scores.email} 
Marks Obtained: ${scores.marks}
Percentage: ${perc}
Division: ${div}
------------------------`);
}
