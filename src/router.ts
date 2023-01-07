import { Router } from "express";
import { listCategories } from "./app/userControlller/category/listCategories";
import { createCategory } from "./app/userControlller/category/createCategories";

export const router = Router();

//Lista categories
router.get("/categories", listCategories);

//Create Category
router.post("/category", createCategory);

//List Products
router.get("/products", (req, res) => {
  res.send("OK");
});

//Create Product
router.post("/products", (req, res) => {
  res.send("Ok");
});

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
