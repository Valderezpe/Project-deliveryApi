"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const listCategories_1 = require("./app/userControlller/category/listCategories");
const createCategories_1 = require("./app/userControlller/category/createCategories");
const listProducts_1 = require("./app/userControlller/products/listProducts");
const createProduct_1 = require("./app/userControlller/products/createProduct");
const listProductsByCategory_1 = require("./app/userControlller/category/listProductsByCategory");
const listOrders_1 = require("./app/userControlller/orders/listOrders");
const createOrder_1 = require("./app/userControlller/orders/createOrder");
const changeOrderStatus_1 = require("./app/userControlller/orders/changeOrderStatus");
const cancelOrder_1 = require("./app/userControlller/orders/cancelOrder");
exports.router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination(req, file, cb) {
            cb(null, node_path_1.default.resolve(__dirname, "", "uploads"));
        },
        filename(req, file, cb) {
            cb(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});
//Lista categories
exports.router.get("/categories", listCategories_1.listCategories);
//Create Category
exports.router.post("/category", createCategories_1.createCategory);
//List Products
exports.router.get("/products", listProducts_1.listProducts);
//Create Product
exports.router.post("/products", upload.single("Image"), createProduct_1.createProduct);
// get products category
exports.router.get("/categories/:categoryId/products", listProductsByCategory_1.listCategoryByCategory);
//List orders
exports.router.get("/orders", listOrders_1.listOrders);
//Create Order
exports.router.post("/orders", createOrder_1.createOrder);
//Order status
exports.router.patch("/orders/:orderId", changeOrderStatus_1.changeOrderStatus);
//Delete/ cancel order
exports.router.delete("/orders/:orderId", cancelOrder_1.cancelOrder);
