// Trybewarts JS
// Variaveis
const loginButton = document.getElementById('login-button');
const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const remainingCharacters = document.getElementById('counter');

// Desabilita o botão enviar
submit.disabled = true;

// Funcoes
const agreeCheck = () => {
  if (agreement.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};

const refreshCounter = () => {
  const remaining = 500 - textArea.value.length;
  remainingCharacters.innerHTML = `${remaining}`;
};
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
agreement.addEventListener('click', agreeCheck);

// TextArea Key Check
textArea.addEventListener('keyup', refreshCounter);
