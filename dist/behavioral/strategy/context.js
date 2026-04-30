"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(s) { this.strategy = s; }
    execute() {
        const result = this.strategy.doAlgorithm(['a', 'b', 'c']);
        console.log('Strategy result:', result);
    }
}
exports.Context = Context;
