//importamos mongoose y creamos la base de datos 

import mongoose from "mongoose";

const ingredientesSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required: true,
            trim: true,
        },

        categoria:{
            type:String,
            required: true,
            trim: true,
        },
        
        ingredientes:{
            type: Array,
            required: true,
            trim: true
        },

        precio:{
            type:Number,
            required: true,
            trim: true
        },
        chef:{
            type:String,
            required: true,
            trim: true
        },
    },
    {
        timestamps:true,
    }
);

const Ingredientes = mongoose.model("Ingredientes", ingredientesSchema);

export default Ingredientes;