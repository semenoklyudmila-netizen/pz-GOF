"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = void 0;
class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    request() {
        return "Adapter: " + this.adaptee.specificRequest();
    }
}
exports.Adapter = Adapter;
