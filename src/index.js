import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIvX5YkfZ5JtKrvpaO3KAvPTX6NPA5VWE",
  authDomain: "my-base-a9a36.firebaseapp.com",
  databaseURL: "https://my-base-a9a36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-base-a9a36",
  storageBucket: "my-base-a9a36.appspot.com",
  messagingSenderId: "900988286778",
  appId: "1:900988286778:web:07f4965590703893da0203"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const firestore = firebase.firestore()

export { auth }
export default firestore



export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
	<Context.Provider value={{
		firebase,
		auth,
		firestore
	}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
