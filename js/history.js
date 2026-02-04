const history = JSON.parse(localStorage.getItem("history")) || [];
const container = document.getElementById("history");

if (history.length === 0) {
  container.innerHTML = "<p>No records yet</p>";
} else {
  history.reverse().forEach(day => {
    const div = document.createElement("div");
    div.style.borderBottom = "1px solid #ddd";
    div.style.marginBottom = "10px";

    div.innerHTML = `
      <p><strong>${day.date}</strong></p>
      <p>Worked: ${day.workedHours} hrs</p>
      <p>Salary: ₹${day.finalSalary}</p>
    `;
    container.appendChild(div);
  });
}
