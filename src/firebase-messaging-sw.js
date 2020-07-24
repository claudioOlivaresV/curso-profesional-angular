// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyC95Xkaax8AesON_yMutXlHC7y8T-FmcBM",
    authDomain: "tests-d6a8a.firebaseapp.com",
    databaseURL: "https://tests-d6a8a.firebaseio.com",
    projectId: "tests-d6a8a",
    storageBucket: "tests-d6a8a.appspot.com",
    messagingSenderId: "960009229237",
    appId: "1:960009229237:web:eb79de3da58b6c86893ffc",
    measurementId: "G-CWRW1X0681"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();