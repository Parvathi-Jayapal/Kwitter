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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function Addroom(){
      Room_name=document.getElementById("roomname").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",Room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name -"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML  +=  row;
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
