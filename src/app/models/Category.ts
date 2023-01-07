import { model } from "mongoose";
import { Model, Schema } from "mongoose";

export const Castegory = model(
  "Caategory",
  new Schema({
    name: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },
  })
);
