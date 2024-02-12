var firebaseConfig = {
      apiKey: "AIzaSyBVfzk7-z26sA4RnV1h30N_nsdFAEVEg-s",
      authDomain: "kwitter-f58b8.firebaseapp.com",
      databaseURL: "https://kwitter-f58b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-f58b8",
      storageBucket: "kwitter-f58b8.appspot.com",
      messagingSenderId: "482433727525",
      appId: "1:482433727525:web:977e38cd64fccea7c693cc"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names - " + Room_names);
      row = "<div class='room_name' id="+Room_names+ " onclick= 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
 
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

