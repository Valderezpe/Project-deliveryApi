import { Request, Response } from "express";
import { Castegory } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {
  const { icon, name } = req.body;

  const category = await Castegory.create({ icon, name });

  res.json(category);
}
