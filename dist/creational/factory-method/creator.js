"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = void 0;
const concreteProduct_1 = require("./concreteProduct");
class Creator {
    createProduct() {
        return new concreteProduct_1.ConcreteProduct();
    }
}
exports.Creator = Creator;
