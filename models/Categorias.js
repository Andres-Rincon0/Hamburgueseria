//importamos mongoose y creamos la base de datos 

import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required: true,
            trim: true,
        },

        descripcion:{
            type:String,
            required: true,
            trim: true,
        },
        
        precio:{
            type:Number,
            required: true,
            trim: true
        },
        stock:{
            type:Number,
            required: true,
            trim: true
        },
    },
    {
        timestamps:true,
    }
);

const Categoria = mongoose.model("categoria", categoriaSchema);

export default Categoria;