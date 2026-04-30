"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndroidUI = void 0;
class AndroidUI {
    constructor(backend) {
        this.backend = backend;
    }
    render() {
        console.log('AndroidUI: Rendering ->', this.backend.getData());
    }
}
exports.AndroidUI = AndroidUI;
