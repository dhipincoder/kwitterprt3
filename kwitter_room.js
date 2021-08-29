
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAzzI6RCrUaKD2MEOq0YE0RSDCgpJAiwKk",
      authDomain: "kwtter-a08ae.firebaseapp.com",
      projectId: "kwtter-a08ae",
      storageBucket: "kwtter-a08ae.appspot.com",
      messagingSenderId: "100011342713",
      appId: "1:100011342713:web:d71bd9e5aebcd91bf6cda8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
addRoom()
{
Room_names=document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_names).update({purpose:"adding room name"});
localStorage.setItem("room_name",Room_names);
window.location="kitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name)
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
}
