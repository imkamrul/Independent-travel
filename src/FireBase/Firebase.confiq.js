console.log(process.env)
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREABSE_API_KEY,
    authDomain: process.env.REACT_APP_FIREABSE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREABSE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREABSE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREABSE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREABSE_APP_ID,

    // apiKey: "AIzaSyCNPbVq8cHF_m9jrs8NItWqhh1bN_CG6Dw",
    // authDomain: "simple-firbase.firebaseapp.com",
    // projectId: "simple-firbase",
    // storageBucket: "simple-firbase.appspot.com",
    // messagingSenderId: "117099170647",
    // appId: "1:117099170647:web:de5c611509a9647cf8cc12"
};
export default firebaseConfig;