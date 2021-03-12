import firebase from "firebase";

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAXYk8RZCBALfXd48_Iq8IJpHya2HSB7I4",
    authDomain: "portafoliokevin-3f0a2.firebaseapp.com",
    projectId: "portafoliokevin-3f0a2",
    storageBucket: "portafoliokevin-3f0a2.appspot.com",
    messagingSenderId: "824640855283",
    appId: "1:824640855283:web:f666b27f65202ead952b86"

});

var db = firebaseApp.firestore();

export { db };