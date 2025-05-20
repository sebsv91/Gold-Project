import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/productSchema.js";
import { validateProductSchema } from "../middlewares/validator.js";

const router = Router();

router.get("/products", authRequired, getProducts);
router.get("/products/:id", authRequired, getProduct);
router.post(
  "/products",
  authRequired,
  validateProductSchema(createProductSchema),
  createProduct
);
router.delete("/products/:id", authRequired, deleteProduct);
router.put(
  "/products/:id",
  authRequired,
  validateProductSchema(updateProductSchema),
  updateProduct
);

export default router;
