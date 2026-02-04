const summaryDiv = document.getElementById("summary");

if (!localStorage.getItem("loginTime") || !localStorage.getItem("logoutTime")) {
  summaryDiv.innerHTML = "<h3>No work session found. Please login first.</h3>";
  throw new Error("Missing login/logout time");
}

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

// Create daily record
const record = {
  date: new Date().toISOString().split("T")[0],
  loginTime: loginTime.toLocaleTimeString(),
  logoutTime: logoutTime.toLocaleTimeString(),
  workedHours: workedHours.toFixed(2),
  basePay,
  bonus: bonus.toFixed(0),
  payCut: 0,
  finalSalary: finalSalary.toFixed(0),
  tasks: JSON.parse(localStorage.getItem("todayTasks")) || []
};

// Save to history
const history = JSON.parse(localStorage.getItem("history")) || [];
history.push(record);
localStorage.setItem("history", JSON.stringify(history));

// Clear today's tasks
localStorage.removeItem("todayTasks");

// Render UI
summaryDiv.innerHTML = `
  <h3>DAILY PAYROLL SUMMARY</h3>
  <p>Date: ${record.date}</p>
  <p>Worked: ${record.workedHours} hrs</p>
  <p>Base Pay: ₹${record.basePay}</p>
  <p>Bonus: ₹${record.bonus}</p>
  <hr>
  <h2>FINAL SALARY: ₹${record.finalSalary}</h2>
  <a href="history.html">View History</a>
`;