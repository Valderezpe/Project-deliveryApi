import { Request, Response } from "express";

import { Product } from "../../models/Products";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (err) {
    res.status(500).json({
      erro: "Algo deu errao tente mas tarde!.",
    });
  }
}
