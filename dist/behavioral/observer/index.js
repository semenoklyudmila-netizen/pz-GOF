"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subject_1 = require("./subject");
const concreteObserver_1 = __importDefault(require("./concreteObserver"));
const subject = new subject_1.ConcreteSubject();
const o1 = new concreteObserver_1.default('A');
const o2 = new concreteObserver_1.default('B');
subject.attach(o1);
subject.attach(o2);
subject.setState('state1');
subject.setState('state2');
