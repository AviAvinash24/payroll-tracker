const loginTime = new Date(localStorage.getItem("loginTime"));
const logoutTime = new Date(localStorage.getItem("logoutTime"));

const workedMs = logoutTime - loginTime;
const workedHours = workedMs / (1000 * 60 * 60);

// Salary rules
const baseHours = 8;
const hourlyRate = 3600;
const basePay = 28800;

let bonus = 0;
if (workedHours > baseHours) {
  bonus = (workedHours - baseHours) * hourlyRate;
}

const finalSalary = basePay + bonus;

document.getElementById("summary").innerHTML = `
<h3>DAILY PAYROLL SUMMARY</h3>
<p>Worked Today: ${workedHours.toFixed(2)} hrs</p>
<p>Base Pay: ₹${basePay}</p>
<p>Bonus: ₹${bonus.toFixed(0)}</p>
<hr>
<h2>FINAL SALARY: ₹${finalSalary.toFixed(0)}</h2>
`;