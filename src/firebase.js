import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD3tt3MRO5nFPKGNN2a2lrlvYxzU77E_FU",
    authDomain: "patrice-web-developer.firebaseapp.com",
    projectId: "patrice-web-developer",
    storageBucket: "patrice-web-developer.appspot.com",
    messagingSenderId: "227280329619",
    appId: "1:227280329619:web:fe87b80a6e54fdf076a666",
    measurementId: "G-GD3YSDC5BW"
};


const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();
const provider = firebase.auth.GoogleAuthProvider;


export  {db, auth, storage, provider};
