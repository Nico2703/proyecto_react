import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Intermediario from "./context/cartContext";
import { initializeApp } from "firebase/app";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const firebaseConfig = {
    apiKey: "AIzaSyAY44afXeRCsdUFWmTE0XMiFw89laFGv34",
    authDomain: "proyecto-react-9510d.firebaseapp.com",
    projectId: "proyecto-react-9510d",
    storageBucket: "proyecto-react-9510d.appspot.com",
    messagingSenderId: "1038992021693",
    appId: "1:1038992021693:web:d4e915e49ffd6fc2753fd4"
};

initializeApp(firebaseConfig);

root.render(
    <Intermediario>
        <App/>
    </Intermediario>
);
