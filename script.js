// Trybewarts JS
// Variaveis
const loginButton = document.getElementById('login-button');
const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const getData = document.getElementById('form-data');
const textArea = document.getElementById('textarea');

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
// Login button HEADER
loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const loginEmail = document.getElementById('login-email');
  const loginPassword = document.getElementById('login-password');
  if (loginEmail.value === 'tryber@teste.com' && loginPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const nomeTodo = () => {
  const getFirstName = document.getElementById('input-name');
  const getLastName = document.getElementById('input-lastname');
  const paragrafo = document.createElement('p');
  paragrafo.innerHTML = `Nome: ${getFirstName.value} ${getLastName.value}`;
  getData.appendChild(paragrafo);
};

const email = () => {
  const getEmail = document.getElementById('input-email');
  const paragrafo = document.createElement('p');
  paragrafo.innerHTML = `Email: ${getEmail.value}`;
  getData.appendChild(paragrafo);
};

const casa = () => {
  const getCasa = document.getElementById('house');
  const paragrafo = document.createElement('p');
  paragrafo.innerHTML = `Casa: ${getCasa.value}`;
  getData.appendChild(paragrafo);
};

const familia = () => {
  const getFamilia = document.getElementsByName('family');
  const paragrafo = document.createElement('p');
  for (let index = 0; index < getFamilia.length; index += 1) {
    if (getFamilia[index].checked) {
      paragrafo.innerHTML = `Família: ${getFamilia[index].value}`;
    }
  }
  getData.appendChild(paragrafo);
};

const materias = () => {
  const getMaterias = document.getElementsByClassName('subject');
  const paragrafo = document.createElement('p');
  let string = 'Matérias: ';
  for (let index = 0; index < getMaterias.length; index += 1) {
    if (getMaterias[index].checked) {
      string += `${getMaterias[index].value}, `;
    }
  }
  paragrafo.innerHTML = string;
  getData.appendChild(paragrafo);
};

const avaliacao = () => {

};

const observacoes = () => {
  const paragrafo = document.createElement('p');
  paragrafo.innerHTML = `Observações: ${textArea.value}`;
  getData.appendChild(paragrafo);
};

const printData = () => {
  getData.innerHTML = '';
  nomeTodo();
  email();
  casa();
  familia();
  materias();
  avaliacao();
  observacoes();
};

submit.addEventListener('click', (event) => {
  event.preventDefault();
  printData();
});

// Send button disable/enable
agreement.addEventListener('click', agreeCheck);
