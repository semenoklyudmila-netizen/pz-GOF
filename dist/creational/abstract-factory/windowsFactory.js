"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsFactory = exports.WinCheckbox = exports.WinButton = void 0;
class WinButton {
    render() { console.log('Windows Button'); }
}
exports.WinButton = WinButton;
class WinCheckbox {
    render() { console.log('Windows Checkbox'); }
}
exports.WinCheckbox = WinCheckbox;
class WindowsFactory {
    createButton() { return new WinButton(); }
    createCheckbox() { return new WinCheckbox(); }
}
exports.WindowsFactory = WindowsFactory;
