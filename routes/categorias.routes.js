import express from "express";

const router = express.Router();

import { obtenerCategorias } from "../controllers/categorias.controller.js";

router.get("/all", obtenerCategorias);