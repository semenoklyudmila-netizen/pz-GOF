"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("./context");
const strategyA_1 = require("./strategyA");
const strategyB_1 = require("./strategyB");
const ctx = new context_1.Context(new strategyA_1.ConcreteStrategyA());
ctx.execute();
ctx.setStrategy(new strategyB_1.ConcreteStrategyB());
ctx.execute();
