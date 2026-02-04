function login() {
  const name = document.getElementById("username").value;

  if (!name) {
    alert("Please enter your name");
    return;
  }

  const loginTime = new Date().toISOString();

  localStorage.setItem("user", name);
  localStorage.setItem("loginTime", loginTime);

  window.location.href = "dashboard.html";
}