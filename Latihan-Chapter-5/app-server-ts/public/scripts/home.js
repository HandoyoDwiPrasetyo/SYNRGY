console.log('home.js');

const elName = document.getElementById('name'); // DOM Selector berdasarkan id
const elFormRegister = document.getElementById('form-register');
const elInputEmail = document.getElementById('email');

elFormRegister.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = elInputEmail.value;
  console.log('emailValue : ', emailValue);
  fetch('/register', {
    method: 'post',
    body: JSON.stringify({
      email: emailValue,
    }),
  });
});

fetch('/users')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log('data > ', data.user.name);
    const name = data.user.name;
    elName.innerHTML = name;
  });
