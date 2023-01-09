import { Request, Response } from "express";
import { Castegory } from "../../models/Category";

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Castegory.find();

    res.json(categories);
  } catch (err) {
    res.status(500).json({
      erro: "Algo deu errao tente mas tarde!.",
    });
  }
}
