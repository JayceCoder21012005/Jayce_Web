const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('togglePasswordSignUp').addEventListener('change', function () {
    const password = document.getElementById('passwordSignUpUp');
    password.type = this.checked ? 'text' : 'password';
    this.nextElementSibling.style.fontWeight = this.checked ? 'bold' : 'normal';
});

document.getElementById('togglePasswordSignIn').addEventListener('change', function () {
    const password = document.getElementById('passwordSignInIn');
    password.type = this.checked ? 'text' : 'password';
    this.nextElementSibling.style.fontWeight = this.checked ? 'bold' : 'normal';
});
