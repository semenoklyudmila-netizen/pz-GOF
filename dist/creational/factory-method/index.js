"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Factory Method demo */
const creator_1 = require("./creator");
const creator = new creator_1.Creator();
const product = creator.createProduct();
product.use();
