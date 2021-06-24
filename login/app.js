var firebaseConfig = {
  apiKey: "AIzaSyDmeLfJPz5jaLHGumgS1egqnrsQzONx4QM",
  authDomain: "codelabs-c593b.firebaseapp.com",
  projectId: "codelabs-c593b",
  storageBucket: "codelabs-c593b.appspot.com",
  messagingSenderId: "748333148665",
  appId: "1:748333148665:web:e9cb89ec0a8ddcb28db528",
  measurementId: "G-19FH0MB0D2"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function gotoHome() {
  window.location.href = "/home";
}

function redirectResult() {
  var PcallBack = function(result){
    sessionStorage.setItem("user", JSON.stringify(result.user));
    gotoHome();
  };

  var NcallBack = function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage);
    window.alert('there is an internal error please contact administrator\n' + errorMessage + '/n' + errorCode);
  };

  firebase.auth().getRedirectResult().then(PcallBack).catch(NcallBack);
}

function loginUser() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithRedirect(provider).then(e=>redirectResult());
}

function checkUser() {

  firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      gotoHome();
    } else {
      loginUser();
    }
  });
}
window.onload = function() {
  checkUser();
}