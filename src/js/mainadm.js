const tableBody = document.getElementById('show-data');
const infoSection = document.getElementById('visitors-info');
const loginSection = document.getElementById('main-login');
const btnLogin = document.getElementById('submit-login');
let password = document.getElementById('exampleInputPassword1');
let email = document.getElementById('exampleInputEmail1');

// Hide non necessary HTML elements
infoSection.style.display = 'none';

// Login
btnLogin.addEventListener('click', (ev) => {
  event.preventDefault(ev);
  if (email.value === 'admin@terminal1.com' || password.value === 'welcomeadmin') {
    loginSection.style.display = 'none';
    infoSection.style.display = 'block';

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyAdd49IO1IpLA7KU2VcZithm89dPb_YxlU',
  authDomain: 'registrousuarios-1c6e3.firebaseapp.com',
  databaseURL: 'https://registrousuarios-1c6e3.firebaseio.com',
  projectId: 'registrousuarios-1c6e3',
  storageBucket: 'registrousuarios-1c6e3.appspot.com',
  messagingSenderId: '615254550849'
};

firebase.initializeApp(config);
let db = firebase.firestore();

db.collection('user').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
  querySnapshot.forEach(function(doc) {
    let data = doc.data();
    loginSection.style.display = 'none';
    infoSection.style.display = 'block';
    tableBody.innerHTML += `<tr>
      <th scope="row"><img class="user-photo" src="${data.blob}"></th>
      <td>${data.name}</td>
      <td>${data.date}</td>
    </tr>`;
  });
});

  } else {
    alert('Email o contraseña incorrecto');
  }
});
