//importamos mongoose y creamos la base de datos 

import mongoose from "mongoose";

const chefSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required: true,
            trim: true,
        },

        especialidad:{
            type:String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps:true,
    }
);

const Chef = mongoose.model("chef", chefSchema);

export default Chef;