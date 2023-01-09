import { Request, Response } from "express";
import { Castegory } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    }

    const category = await Castegory.create({ icon, name });

    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({
      error: "Algo deu errado tente mas tarde!",
    });
  }
}
