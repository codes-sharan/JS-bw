const employees = [
  { name: "Alice Johnson", annualIncome: 450000 },
  { name: "Bob Smith", annualIncome: 1200000 },
  { name: "Charlie Brown", annualIncome: 750000 },
  { name: "Diana Prince", annualIncome: 2000000 },
  { name: "Edward Elric", annualIncome: 300000 },
  { name: "Fiona Apple ", annualIncome: 1800000 },
  { name: "George Washington", annualIncome: 900000 },
  { name: "Hannah Montana", annualIncome: 2100000 },
  { name: "Ian Fleming", annualIncome: 600000 },
  { name: "Julia Roberts", annualIncome: 4500000 },
];

for (employee of employees) {
  if (employee.annualIncome <= 600000) {
    employee.yearlyTax = (employee.annualIncome * 1) / 100;
  } else if (employee.annualIncome <= 800000) {
    employee.yearlyTax =
      (600000 * 1) / 100 + (employee.annualIncome - 600000) * 0.15;
  } else if (employee.annualIncome <= 1100000) {
    employee.yearlyTax =
      (600000 * 1) / 100 +
      200000 * 0.15 +
      (employee.annualIncome - 800000) * 0.2;
  } else if (employee.annualIncome <= 1600000) {
    employee.yearlyTax =
      (600000 * 1) / 100 +
      200000 * 0.15 +
      300000 * 0.2 +
      (employee.annualIncome - 1100000) * 0.25;
  } else if (employee.annualIncome <= 2600000) {
    employee.yearlyTax =
      (600000 * 1) / 100 +
      200000 * 0.15 +
      300000 * 0.2 +
      500000 * 0.25 +
      (employee.annualIncome - 1600000) * 0.3;
  } else if (employee.annualIncome > 2600000) {
    employee.yearlyTax =
      (600000 * 1) / 100 +
      200000 * 0.15 +
      300000 * 0.2 +
      500000 * 0.25 +
      1000000 * 0.3 +
      (employee.annualIncome - 2600000) * 0.36;
  } else {
    console.log("Invalid annual income");
  }

  employee.monthlyTax = employee.yearlyTax / 12;
  employee.annualNetSalary = employee.annualIncome - employee.yearlyTax;
  employee.monthlyNetSalary = employee.annualNetSalary / 12;

  console.log(`Name: ${employee.name}
    Annual Income: Npr: ${employee.annualIncome} 
    Monthly Tax: Npr ${employee.monthlyTax}
    Yearly Tax: Npr ${employee.yearlyTax}
    Monthly Net Salary: Npr ${employee.monthlyNetSalary}
    Annual Net Salary: Npr ${employee.annualNetSalary}
  ------------------------`);
}
