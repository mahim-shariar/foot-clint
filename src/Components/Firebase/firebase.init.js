import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitFirebas = ()=>{
    initializeApp(firebaseConfig)
}

export default InitFirebas ;
