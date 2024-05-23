"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const startLogger = (obj) => {
    setInterval(() => {
        console.log(obj);
    }, 3000);
};
exports.startLogger = startLogger;
