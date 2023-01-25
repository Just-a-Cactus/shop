import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

// // Import the functions you need from the SDKs you need
// // v9 compat packages are API compatible with v8 code
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
//
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAnOobEq3Gkgj0aShi_UMAkP_hLeGJCPRQ",
//   authDomain: "shop-6369d.firebaseapp.com",
//   projectId: "shop-6369d",
//   storageBucket: "shop-6369d.appspot.com",
//   messagingSenderId: "180862866527",
//   appId: "1:180862866527:web:0ba5845e1243134e0637ea",
// };
//
// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
//
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
