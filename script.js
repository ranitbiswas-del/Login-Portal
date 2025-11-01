<script>
async function login() {
const username = document.getElementById('username').value.trim();
const password = document.getElementById('password').value.trim();
const errorMsg = document.getElementById('error-msg');

// Hide error message on new attempt
  errorMsg.style.display = 'none';

try {
const response = await fetch('https://script.google.com/a/macros/realtyassistant.in/s/AKfycbxbBMhxpZkwjw-sKDLBWmVGfTEL43RQi_6pYeOd-KBjG2iiaLZvwpkHJz1DPAoZfjkA/exec');
const data = await response.json();


const user = data.find(u =>
(u.Username === username || u.Email === username) && u.Password === password
);


if (user) {
localStorage.setItem('loggedInUser', JSON.stringify(user));
window.location.href = 'index.html';
} else {
errorMsg.style.display = 'block';
}
} catch (error) {
console.error('Login failed:', error);
errorMsg.style.display = 'block';
}
}
</script>