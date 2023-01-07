import { Request, Response } from "express";
import { Castegory } from "../../models/Category";

export async function listCategories(req: Request, res: Response) {
  const categories = await Castegory.find();

  res.json(categories);
}
