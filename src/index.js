import express from "express";
import dotenv from "dotenv";

import router from "./routes/router.js";

dotenv.config();

const app = express();

//Vistas

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home");
});

app.use("/",router);

// Inicia el servidor en el puerto 3006 y muestra un mensaje en la consola
app.listen(3001, () => console.log("Servidor web en marcha en puerto 3001."));
