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
    room_name=localStorage.getItem("room_name");
    function send() { 
          msg = document.getElementById("msg").value; 
          firebase.database().ref(room_name).push({
                 name:user_name,
                  message:msg,
                   like:0 
                  });
                    document.getElementById("msg").value = "";
                   }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//End code
      } });  }); }
getData();
