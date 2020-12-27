import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDWg-hlPhmX6QT05SZyJA6jJnNeFPJ2wZY",
    authDomain: "clone-bd1ab.firebaseapp.com",
    projectId: "clone-bd1ab",
    storageBucket: "clone-bd1ab.appspot.com",
    messagingSenderId: "633732906151",
    appId: "1:633732906151:web:acec22b0f04383d4302f82",
    measurementId: "G-Y0KGQDCWV3"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()
  export {db,auth,provider}