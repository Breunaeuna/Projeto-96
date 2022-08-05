

  const firebaseConfig = {
    
    apiKey: "AIzaSyD0oVU55u6J7TaHxWSY6cF-smlIsNBc9J4",
    authDomain: "c93-a-97-kwitter.firebaseapp.com",
    databaseURL: "https://c93-a-97-kwitter-default-rtdb.firebaseio.com",
    projectId: "c93-a-97-kwitter",
    storageBucket: "c93-a-97-kwitter.appspot.com",
    messagingSenderId: "597168385883",
    appId: "1:597168385883:web:7a0ff26740795c5e3d747e"
};
// ADD YOUR FIREBASE LINKS
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem vindo" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Nome da salas"
  });
  localStorage.setItem("room_name", room_name);
 
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
     
      console.log("Nomes das salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="kwitter_page.html";
  }

  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html")
  }



      
