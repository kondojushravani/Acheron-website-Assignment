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

  //create new user
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    console.log(error.code);
    console.log(error.message);
  });

  //login 
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(){
    console.log("Logged In");
    sessionStorage.setItem("user", email);
  })
  .catch(function (error) {
    console.log(error.code);
    console.log(error.message);
  });

  //logout
  firebase.auth().signOut().then(function () {
    console.log("Logged out!")
  }, function (error) {
    console.log(error.code);
    console.log(error.message);
  });
}
