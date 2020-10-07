import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB6TLi4yT1WURtZpfvD0GDUd27HMHOkxwk",
  authDomain: "facebook-clone-react-6c768.firebaseapp.com",
  databaseURL: "https://facebook-clone-react-6c768.firebaseio.com",
  projectId: "facebook-clone-react-6c768",
  storageBucket: "facebook-clone-react-6c768.appspot.com",
  messagingSenderId: "117652819256",
  appId: "1:117652819256:web:ff0653860a1b1adc0ec5cd",
  measurementId: "G-7RBK9JJBRX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;