import firebase from "firebase";

const firebaseApp=firebase.initializeApp({

        apiKey: "AIzaSyDqg1o2JgZVXrnvUse3RVZ5ft_A_QP0V7g",
        authDomain: "shopify-9d361.firebaseapp.com",
        databaseURL: "https://shopify-9d361.firebaseio.com",
        projectId: "shopify-9d361",
        storageBucket: "shopify-9d361.appspot.com",
        messagingSenderId: "913712182785",
        appId: "1:913712182785:web:ffa0648aad6d19f2357200",
        measurementId: "G-SW86DP2PEK",

});

const auth=firebase.auth();

export {auth};

