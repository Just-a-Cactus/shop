import React from "react";
// import firebase from "firebase/compat/app";

// interface Login {
//   auth?: Object;
// }

// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnOobEq3Gkgj0aShi_UMAkP_hLeGJCPRQ",
  authDomain: "shop-6369d.firebaseapp.com",
  projectId: "shop-6369d",
  storageBucket: "shop-6369d.appspot.com",
  messagingSenderId: "180862866527",
  appId: "1:180862866527:web:0ba5845e1243134e0637ea",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const Login = () => {
  // const Login = ({ auth }: Login) => {
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button onClick={login}>Click to login</button>
    </div>
  );
};

export default Login;
