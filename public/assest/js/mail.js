

const firebaseConfig = {
    apiKey: "AIzaSyAln5WgEXvmrxZtOTCeYoefflLeEMYF2_Q",
    authDomain: "ksrparkroyal.firebaseapp.com",
    databaseURL: "https://ksrparkroyal-default-rtdb.firebaseio.com",
    projectId: "ksrparkroyal",
    storageBucket: "ksrparkroyal.appspot.com",
    messagingSenderId: "895147241026",
    appId: "1:895147241026:web:d7d670ab81aa3f3c7b87db"
  };

//initialize firebase  
firebase.initializeApp(firebaseConfig);  

//reference your database
var contactFormDB = firebase.database().ref('ksrparkroyal')

document.getElementById('contact').addEventListener('submit', submitForm)

function submitForm (e) {
    e.preventDefault();
    var name = getElementVal('name');
    var contact = getElementVal('contact');
    var email = getElementVal('email');
    var comments = getElementVal('comments');
    console.log(name, contact, email, comments)
}

const getElementVal = (id) => {
    return document.getElementById('id').value;
}