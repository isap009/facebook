import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCwdLG8E12p3OW4I8SVZo-V_x5uBfw29lA",
    authDomain: "facebook----clone.firebaseapp.com",
    projectId: "facebook----clone",
    storageBucket: "facebook----clone.appspot.com",
    messagingSenderId: "223420263685",
    appId: "1:223420263685:web:ec89091f5c841f76b5db6c",
    measurementId: "G-CWG5PL3C66"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;