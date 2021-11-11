import firebase from 'firebase/app'
    import 'firebase/auth'
    import 'firebase/firestore'


const Config = {
  apiKey: "AIzaSyC4hMVt0T6muPwKP34Zvh5g8f8MPQCaZXk",
  authDomain: "imessage-clone-21c0c.firebaseapp.com",
  projectId: "imessage-clone-21c0c",
  storageBucket: "imessage-clone-21c0c.appspot.com",
  messagingSenderId: "349206178681",
  appId: "1:349206178681:web:a91ef7b960d88da29b9da8"
};

// Initialize Firebase
firebase.initializeApp(Config);

export const auth = firebase.auth()
export const db = firebase.firestore()
export const provider = new firebase.auth.GoogleAuthProvider()
export default firebase