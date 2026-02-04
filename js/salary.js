// Read times from storage
const loginTime = new Date(localStorage.getItem("loginTime"));
const logoutTime = new Date(localStorage.getItem("logoutTime"));

// Calculate worked hours
const workedMs = logoutTime - loginTime;
const workedHours = workedMs / (1000 * 60 * 60);

// Salary rules
const baseHours = 8;
const hourlyRate = 3600;
const basePay = 28800;

// Bonus calculation
let bonus = 0;
if (workedHours > baseHours) {
  bonus = (workedHours - baseHours) * hourlyRate;
}

// Final salary
const finalSalary = basePay + bonus;

// Create daily payroll record
const record = {
  date: new Date().toISOString().split("T")[0],
  loginTime: loginTime.toLocaleTimeString(),
  logoutTime: logoutTime.toLocaleTimeString(),
  workedHours: workedHours.toFixed(2),
  basePay: basePay,
  bonus: Math.round(bonus),
  payCut: 0,
  finalSalary: Math.round(finalSalary)
};

// Get existing history or start new
const history = JSON.parse(localStorage.getItem("history")) || [];
history.push(record);
localStorage.setItem("history", JSON.stringify(history));

// Show summary on UI
document.getElementById("summary").innerHTML = `
  <h3>DAILY PAYROLL SUMMARY</h3>
  <p>Date: ${record.date}</p>
  <p>Login Time: ${record.loginTime}</p>
  <p>Logout Time: ${record.logoutTime}</p>
  <p>Worked Today: ${record.workedHours} hrs</p>
  <p>Base Pay: ₹${record.basePay}</p>
  <p>Bonus Earned: ₹${record.bonus}</p>
  <p>Pay Cut: ₹${record.payCut}</p>
  <hr>
  <h2>FINAL SALARY: ₹${record.finalSalary} ✅</h2>
  <a href="history.html">View History</a>
`;