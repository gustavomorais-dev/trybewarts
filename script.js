// Trybewarts JS
// Variaveis
const loginButton = document.getElementById('login-button');
const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

// Desabilita o botão enviar
submitButton.disabled = true;

// Funcoes
// Login button HEADER
loginButton.addEventListener('click', () => {
  const loginEmail = document.getElementById('login-email');
  const loginPassword = document.getElementById('login-password');
  if (loginEmail.value === 'tryber@teste.com' && loginPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Send button disable/enable
agreement.addEventListener('click', () => {
agreement.checked ? submitButton.disabled = false : submitButton.disabled = true;
})