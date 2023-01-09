import { Request, Response } from "express";

import { Product } from "../../models/Products";

export async function listCategoryByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const products = await Product.find().where("category").equals(categoryId);

    res.json(products);
  } catch (err) {
    res.status(500).json({
      erro: "Algo deu errao tente mas tarde!.",
    });
  }
}
