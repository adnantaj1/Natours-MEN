/*eslint-disable*/

const login = async (email, password) => {
  console.log('Email:', email);
  console.log('Password:', password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      }
    });
    console.log('Response:', res);
  } catch (err) {
    console.log('Error:', err.response.data);
  }
}

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log('Submitting login form...');
  login(email, password);
});

