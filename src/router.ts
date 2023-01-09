import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { listCategories } from "./app/userControlller/category/listCategories";
import { createCategory } from "./app/userControlller/category/createCategories";
import { listProducts } from "./app/userControlller/products/listProducts";
import { createProduct } from "./app/userControlller/products/createProduct";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, "", "uploads"));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

//Lista categories
router.get("/categories", listCategories);

//Create Category
router.post("/category", createCategory);

//List Products
router.get("/products", listProducts);

//Create Product
router.post("/products", upload.single("Image"), createProduct);

// get products category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("Ok");
});

//List orders
router.get("/orders", (req, res) => {
  res.send("Ok");
});

//Create Order
router.post("/orders", (req, res) => {
  res.send("ok");
});

//Order status
router.patch("/orders/:orderId", (req, res) => {
  res.send("ok");
});

//Delete/ cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("ok");
});
