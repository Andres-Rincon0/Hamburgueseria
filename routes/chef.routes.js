import express from "express";

const router = express.Router();

import { obtenerChef } from "../controllers/categorias.controller.js";

router.get("/all", obtenerChef);