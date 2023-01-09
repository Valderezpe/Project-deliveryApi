import { Request, Response } from "express";
import { Product } from "../../models/Products";

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      imagePath,
      ingredients: JSON.parse(ingredients),
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({
      erro: "Algo deu errao tente mas tarde!.",
    });
  }
}
