"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConcreteObserver {
    constructor(name) {
        this.name = name;
    }
    update(state) {
        console.log(`Observer ${this.name} received state: ${state}`);
    }
}
exports.default = ConcreteObserver;
