"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacFactory = exports.MacCheckbox = exports.MacButton = void 0;
class MacButton {
    render() { console.log('Mac Button'); }
}
exports.MacButton = MacButton;
class MacCheckbox {
    render() { console.log('Mac Checkbox'); }
}
exports.MacCheckbox = MacCheckbox;
class MacFactory {
    createButton() { return new MacButton(); }
    createCheckbox() { return new MacCheckbox(); }
}
exports.MacFactory = MacFactory;
