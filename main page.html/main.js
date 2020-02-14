// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyBFEYKTuh-NAZ3tjwpjgb6kBLSQqpTgwsc",
    authDomain: "contact-form-2fee7.firebaseapp.com",
    databaseURL: "https://contact-form-2fee7.firebaseio.com",
    projectId: "contact-form-2fee7",
    storageBucket: "contact-form-2fee7.appspot.com",
    messagingSenderId: "144695102493",
    appId: "1:144695102493:web:dcd6c121e343c8def78af4",
    measurementId: "G-9608DYBQYV"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name;email,message){
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }