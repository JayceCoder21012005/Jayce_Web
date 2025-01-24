const container = document.querySelector('.container');
const sign_up_btn = document.querySelector('.sign_up-btn');
const Login_btn = document.querySelector('.login-btn');

sign_up_btn.addEventListener('click', () => {
    container.classList.add('active');
});

Login_btn.addEventListener('click', () => {
    container.classList.remove('active');
});