"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatch = dispatch;
const registry_1 = require("./registry");
const auth_1 = require("./auth");
async function dispatch(endpointName, user, body) {
    const endpoint = registry_1.endpoints[endpointName];
    if (!(0, auth_1.authorize)(user, endpoint.requiredRole)) {
        throw new Error("Forbidden");
    }
    return endpoint.handler({
        userId: user.id,
        path: endpointName,
        body
    });
}
