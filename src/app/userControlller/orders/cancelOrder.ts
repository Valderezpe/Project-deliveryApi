import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function cancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({
      error: "Algo deu errado tente mas tarde!",
    });
  }
}
