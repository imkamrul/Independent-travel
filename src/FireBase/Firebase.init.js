import { initializeApp } from "firebase/app";

import firebaseConfig from "./Firebase.confiq";
const initialAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initialAuthentication;