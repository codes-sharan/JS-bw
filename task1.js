const marks = 422;
const fullMarks = 500;

if (marks <= fullMarks) {
  const percentage = (marks / fullMarks) * 100;

  if (percentage >= 80) {
    console.log("Distinction");
  } else if (percentage >= 60) {
    console.log("First Division");
  } else if (percentage >= 45) {
    console.log("Second Division");
  } else if (percentage >= 32) {
    console.log("Third Division");
  } else {
    console.log("Sorry, you have failed");
  }
} else {
  console.log(
    "Invalid marks: Marks should be less than or equal to full marks."
  );
}
