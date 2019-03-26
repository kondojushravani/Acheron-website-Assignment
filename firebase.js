$(document).ready(function () {
  var config = {
    apiKey: "AIzaSyCZabxXANcODhMxiOlzJYPywo2EnffqKnY",
    authDomain: "acheronwebsitedemo.firebaseapp.com",
    databaseURL: "https://acheronwebsitedemo.firebaseio.com",
    projectId: "acheronwebsitedemo",
    storageBucket: "acheronwebsitedemo.appspot.com",
    messagingSenderId: "1074694088051"
  };
  firebase.initializeApp(config);
  // Get a reference to the database service
  var database = firebase.database();
  var user = sessionStorage.getItem("user");

  $("#applicationsubmit").click(function () {
    var name = $('#name').val();
    var contactno = $('#contactno').val();
    var email = $('#mail').val();
    var alternateno = $('#altcontactno').val();
    var degree = $('#degreeopt').val();
    var role = $('#role').val();
    writeUserData(name, contactno, email, alternateno, degree, role);
  })
  function writeUserData(name, contactno, email, alternateno, degree, role) {
    firebase.database().ref('users/' + name).set({
      username: name,
      contactnumber: contactno,
      email: email,
      alternatenumber: alternateno,
      degree: degree,
      role: role
    });

  }
  //login to apply job
  $("#login").click(function () {
    var username = $("#uname").val();
    var password = $("#pass").val();
    if (username != "" && password != "") {
      $("login").attr("")
    }
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(function () {
        sessionStorage.setItem("user", username);
        $("#applicationformModal").modal("show");
        console.log("Logged In");
        console.log(firebase.auth().currentUser);
      })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  })

  //checking session
  $("#applynowbtn").click(function () {
    if (user) {
      $("#applicationformModal").modal("show");
    } else {
      $("#loginformModal").modal("show");
    }
  })

  //logout
  $("#logoutbtn").click(function () {
    firebase.auth().signOut()
      .then(function () {
        sessionStorage.removeItem("user");
        window.open("index.html", "_self");
      }, function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  })
  //create new user
  // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
  //   console.log(error.code);
  //   console.log(error.message);
  // });

})
