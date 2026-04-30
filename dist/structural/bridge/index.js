"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AndroidUI_1 = require("./AndroidUI");
const MobileBackend_1 = require("./MobileBackend");
const backend = new MobileBackend_1.MobileBackend();
const android = new AndroidUI_1.AndroidUI(backend);
android.render();
