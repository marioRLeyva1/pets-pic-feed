import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXHz8poUfEdSUM6jllwwcDd_MLy54OS9g",
  authDomain: "pets-pic-feed.firebaseapp.com",
  projectId: "pets-pic-feed",
  storageBucket: "pets-pic-feed.appspot.com",
  messagingSenderId: "124722036701",
  appId: "1:124722036701:web:d3d221454ea86d67104034",
  measurementId: "G-GD97EYR34R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById('root'));
