//importamos a mongoose desde el package.json

import mongoose from "mongoose";

//creamos las constante connectarDB que es la que nos va a pertmitir conectarnos a la base de datos
const conectarDB = async ()=>{
    try {

        //nos conectamos al puerto que tenemos en el archivo .ENV
        const connectionDB = await mongoose.connect(procces.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const url = `conectado a mongo en el server: ${connectionDB.connection.host} - EN PUERTO: ${connectionDB.connection.port}`;
        console.log(url); 
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
}

//exportamos las constante 

export default conectarDB;
