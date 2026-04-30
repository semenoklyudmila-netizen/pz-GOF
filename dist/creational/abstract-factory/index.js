"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const macFactory_1 = require("./macFactory");
const windowsFactory_1 = require("./windowsFactory");
function demo(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    button.render();
    checkbox.render();
}
console.log('AbstractFactory: Mac');
demo(new macFactory_1.MacFactory());
console.log('AbstractFactory: Windows');
demo(new windowsFactory_1.WindowsFactory());
