// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjkmB3aw-v3yxTHozmLiMA03pe6oHifFQ",
  authDomain: "lets-chat-web-app-794e5.firebaseapp.com",
  projectId: "lets-chat-web-app-794e5",
  storageBucket: "lets-chat-web-app-794e5.appspot.com",
  messagingSenderId: "170923914646",
  appId: "1:170923914646:web:5f56da706041a74f7319b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  user_name= localStorage.getItem("username");
  document.getElementById("User_name").innerHTML ="Welcome"+ user_name +"!";

  function getData() { 
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 
    }); }); } 
    getData();

    function add_room(){
      user_name =document.getElementById("User_name").value;

      localStorage.setItem("username",room_name); 
  
      window.location ="kwitter_page.html";
    }
    