import firebase from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyCdyrRXAAybkQYj37KRhPfNwcRY2zD3tGo",
    authDomain: "cocodalien-c2c27.firebaseapp.com",
    projectId: "cocodalien-c2c27",
    storageBucket: "cocodalien-c2c27.appspot.com",
    messagingSenderId: "171898057182",
    appId: "1:171898057182:web:27ba62d8131e05095c6d4f",
    measurementId: "G-ETHYE31M0E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;