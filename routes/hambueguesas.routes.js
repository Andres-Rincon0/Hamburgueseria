import express from "express";

const router = express.Router();

import { obtenerHamburguesas } from "../controllers/categorias.controller.js";

router.get("/all", obtenerHamburguesas);