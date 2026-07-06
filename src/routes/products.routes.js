import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from "../controllers/products.controller.js";

const router = Router();

// Rutas públicas
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Rutas protegidas
router.post("/create", authMiddleware, createProduct);
router.delete("/:id", authMiddleware, deleteProduct);

export default router;
