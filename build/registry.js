"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
const handlers_1 = require("./handlers");
exports.endpoints = {
    getVehicle: {
        requiredRole: "fleet.read",
        handler: handlers_1.getVehicle
    },
    createVehicle: {
        requiredRole: "fleet.write",
        handler: handlers_1.createVehicle
    }
};
