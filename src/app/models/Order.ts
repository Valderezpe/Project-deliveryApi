import { Model, Schema, SchemaType, model } from "mongoose";

export const Order = model(
  "Order",
  new Schema({
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["WAITTING", "IN_PRODUCTION", "DONE"],
      default: "WAITTING",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    product: {
      required: true,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
          quantidy: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  })
);
