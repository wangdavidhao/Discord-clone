import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDjAHOEzU465PfAefxxiuAMgtmgOfBwdI0",
  authDomain: "discord-clone-c783b.firebaseapp.com",
  databaseURL: "https://discord-clone-c783b.firebaseio.com",
  projectId: "discord-clone-c783b",
  storageBucket: "discord-clone-c783b.appspot.com",
  messagingSenderId: "314904051709",
  appId: "1:314904051709:web:d7e89ea90aee8a7da4e394"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth, provider};
export default db;