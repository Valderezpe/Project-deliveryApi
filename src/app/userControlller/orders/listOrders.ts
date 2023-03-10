import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const order = await Order.find()
      .sort({ createdAt: 1 })
      .populate("products.product");

    res.json(order);
  } catch (err) {
    res.status(500).json({
      erro: "Algo deu errao tente mas tarde!.",
    });
  }
}
