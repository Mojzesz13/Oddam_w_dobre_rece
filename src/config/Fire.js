import firebase from "firebase";

const config = {
    apiKey: "AIzaSyA0OGioKL7COBrob-Vc-M25Bo09Im_Tnv8",
    authDomain: "oddam-w-dobre-rece-1c38c.firebaseapp.com",
    databaseURL: "https://oddam-w-dobre-rece-1c38c.firebaseio.com",
    projectId: "oddam-w-dobre-rece-1c38c",
    storageBucket: "oddam-w-dobre-rece-1c38c.appspot.com",
    messagingSenderId: "444801990812",
    appId: "1:444801990812:web:b1e9eeaae73da5677e6d59",
    measurementId: "G-RPRPJS58FF"
};

const fire = firebase.initializeApp(config);
export default  fire ;