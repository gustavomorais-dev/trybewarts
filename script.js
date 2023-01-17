// Trybewarts JS
// Variaveis
const loginButton = document.querySelector('#login-button');

// Funcoes
// Login button HEADER
loginButton.addEventListener('click', () => {
  const loginEmail = document.querySelector('#login-email');
  const loginPassword = document.querySelector('#login-password');
  if (loginEmail.value === 'tryber@teste.com' && loginPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
