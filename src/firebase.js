import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAwazsynIViv5rTDka8alvjeUY7QLnJDOg",
  authDomain: "webtask-5e801.firebaseapp.com",
  databaseURL: "https://webtask-5e801.firebaseio.com",
  projectId: "webtask-5e801",
  storageBucket: "webtask-5e801.appspot.com",
  messagingSenderId: "630366854641"
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseRef = firebase.database().ref('');
