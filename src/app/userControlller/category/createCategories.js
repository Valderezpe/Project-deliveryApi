"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const Category_1 = require("../../models/Category");
function createCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { icon, name } = req.body;
            if (!name) {
                return res.status(400).json({
                    error: "Name is required",
                });
            }
            const category = yield Category_1.Castegory.create({ icon, name });
            res.status(201).json(category);
        }
        catch (err) {
            res.status(500).json({
                error: "Algo deu errado tente mas tarde!",
            });
        }
    });
}
exports.createCategory = createCategory;
