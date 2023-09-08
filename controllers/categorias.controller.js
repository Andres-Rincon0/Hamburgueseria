import Categoria from "../models/Categorias.js";

const obtenerCategorias = async(req,res)=>{
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        console.log(error);
    }
}

export {obtenerCategorias}