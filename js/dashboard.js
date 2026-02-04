const user = localStorage.getItem("user");
const loginTime = localStorage.getItem("loginTime");

document.getElementById("welcome").innerText = `Welcome, ${user}`;
document.getElementById("loginTime").innerText =
  new Date(loginTime).toLocaleTimeString();

function logout() {
  const logoutTime = new Date().toISOString();
  localStorage.setItem("logoutTime", logoutTime);
  window.location.href = "summary.html";
}