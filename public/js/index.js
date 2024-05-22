/*eslint-disable*/
const login = require('./login');
const mapBox = require('./mapBox');

// DOM elements
const mp = document.getElementById('mp');
const loginForm = document.getElementById('form');

// DELEGATION
if (mp) {
  const locations = JSON.parse(mp.dataset.locations);
  mapBox.displayMap(locations);
}
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login.login(email, password);
  });
}
