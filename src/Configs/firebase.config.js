import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDEvQzXaCSnsSNOLyDl-cH5Co9b8fDjbA4",
  authDomain: "polar-protocol-266908.firebaseapp.com",
  databaseURL: "https://polar-protocol-266908.firebaseio.com",
  projectId: "polar-protocol-266908",
  storageBucket: "polar-protocol-266908.appspot.com",
  messagingSenderId: "6529502578",
  appId: "1:6529502578:web:8cae4a1cf978fd6538e1eb",
  measurementId: "G-RSP7M78CTE",
};

let fire = firebase.initializeApp(firebaseConfig);
export default fire;
