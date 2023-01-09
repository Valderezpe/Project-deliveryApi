"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Castegory = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
exports.Castegory = (0, mongoose_1.model)("Caategory", new mongoose_2.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
}));
