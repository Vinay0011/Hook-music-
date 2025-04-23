// script.js ya firebase.js ke start me daalo
const firebaseConfig = {
    apiKey: "AIzaSyAALbIVhGcatJ4j6TyOcFAEZEOr0o9TXz8",
    authDomain: "hookbeats-4f1d3.firebaseapp.com",
    projectId: "hookbeats-4f1d3",
    storageBucket: "hookbeats-4f1d3.firebasestorage.app",
    messagingSenderId: "610002611064",
    appId: "1:610002611064:web:531b52d958fc370052368d"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();
  