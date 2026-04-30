"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_1 = require("./adapter");
const adaptee_1 = require("./adaptee");
const adaptee = new adaptee_1.Adaptee();
const adapter = new adapter_1.Adapter(adaptee);
console.log('Adapter result:', adapter.request());
