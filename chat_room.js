//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyCTd62H_aiVs9NyRJSJI3ESAQtVfkO0UG4",
  authDomain: "lets-talk-5fac8.firebaseapp.com",
  databaseURL: "https://lets-talk-5fac8-default-rtdb.firebaseio.com",
  projectId: "lets-talk-5fac8",
  storageBucket: "lets-talk-5fac8.appspot.com",
  messagingSenderId: "582742026154",
  appId: "1:582742026154:web:b71e9d7ad873fd1da7edd3",
  };
    firebase.initializeApp(firebaseConfig)
  // Initialize Firebase
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
