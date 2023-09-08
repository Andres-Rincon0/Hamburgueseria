import Chef from "../models/Categorias.js";

const obtenerChef = async(req,res)=>{
    try {
        const categorias = await Chef.find();
        res.json(categorias);
    } catch (error) {
        console.log(error);
    }
}

export {obtenerChef}