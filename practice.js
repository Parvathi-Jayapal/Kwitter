// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhQEyNnY8KTMq4yDDnjp2i1yk2g_SnYOM",
    authDomain: "social-851d0.firebaseapp.com",
    databaseURL: "https://social-851d0-default-rtdb.firebaseio.com",
    projectId: "social-851d0",
    storageBucket: "social-851d0.appspot.com",
    messagingSenderId: "628381038306",
    appId: "1:628381038306:web:8d14d058bf417936bb10bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function AddUser(){
    username=document.getElementById("Username").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding user"
    });
}