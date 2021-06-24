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
  window.location.href = '/home'
}

function gotoLogin() {
  window.location.href='/login';
}

function checkUser() {
  var callBack = (user) => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      gotoHome();
    }
  };
  firebase.auth().onAuthStateChanged(callBack);
}
