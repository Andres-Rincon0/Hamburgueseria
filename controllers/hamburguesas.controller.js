import Hamburguesas from "../models/Categorias.js";

const obtenerHamburguesas = async(req,res)=>{
    try {
        const categorias = await Hamburguesas.find();
        res.json(categorias);
    } catch (error) {
        console.log(error);
    }
}

export {obtenerHamburguesas}