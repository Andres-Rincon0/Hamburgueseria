import mongoose from "mongoose";

const hamburguesasSchema = mongoose.Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim: true
        },
        descripcion:{
            type:String,
            required: true,
            trim: true
        }
    },
    {
        timetamps:true
    }
)

const hamburguesas = mongoose.model("hamburguesas", hamburguesasSchema)

export default hamburguesas;