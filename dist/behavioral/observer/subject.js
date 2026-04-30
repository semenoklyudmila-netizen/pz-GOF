"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteSubject = void 0;
class ConcreteSubject {
    constructor() {
        this.observers = [];
        this.state = '';
    }
    attach(o) { this.observers.push(o); }
    detach(o) { this.observers = this.observers.filter(x => x !== o); }
    setState(s) {
        this.state = s;
        this.notify();
    }
    notify() { this.observers.forEach(o => o.update(this.state)); }
}
exports.ConcreteSubject = ConcreteSubject;
