HEAD
const BASE_URL = "https://user-authentication-api-production.up.railway.app";

async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  });

  const data = await response.json();
  document.getElementById("message").innerText =
    data.message || JSON.stringify(data);
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  document.getElementById("message").innerText =
    data.message || JSON.stringify(data);
}
=======
function showMessage() {
    alert("Thank you for visiting my portfolio!");
} 6e99898f10f373a6fdf6211e7382d1f56216513f
