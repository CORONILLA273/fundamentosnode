const express = require('express')
import { initializeApp } from "firebase/app";
const app = express()
const port = 5002

// Conexión a la Base de Datos en Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCmlQtU_C9Pze2Kpze_nsxdMOZbaC1q7pc",
  authDomain: "crud-ech-practica1.firebaseapp.com",
  projectId: "crud-ech-practica1",
  storageBucket: "crud-ech-practica1.appspot.com",
  messagingSenderId: "378014359367",
  appId: "1:378014359367:web:5d4eb0832487f1536bb662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

app.get('/', (req, res) => {
    res.send('Respuesta de la Raiz')
})

app.get('/contacto', (req, res) => {
    res.send('Respuesta desde Contacto')
})

app.listen(port, () => {
    console.log('Servidor Escuchando: ', port)
    console.log(`Servidor Escuchando: ${port}`)
})