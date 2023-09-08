import Ingredientes from "../models/Categorias.js";

const obtenerIngredientes = async(req,res)=>{
    try {
        const Ingredientes = await Ingredientes.find();
        res.json(categorias);
    } catch (error) {
        console.log(error);
    }
}

export {obtenerIngredientes}
