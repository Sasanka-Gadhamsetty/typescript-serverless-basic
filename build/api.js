"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHandler = exports.handler = void 0;
const dispatcher_1 = require("./dispatcher");
const auth_1 = require("./auth");
const handler = async (event) => {
    const vehicleId = event.queryStringParameters?.vehicleId ?? "";
    const response = await (0, dispatcher_1.dispatch)("getVehicle", {
        id: "12",
        roles: ["fleet.read"],
    }, {
        vehicleId,
    });
    return {
        statusCode: 200,
        body: JSON.stringify(response),
    };
};
exports.handler = handler;
const createHandler = async (event) => {
    console.log('lambda invoked', event);
    const requiredRole = "fleet.write";
    const authorized = await (0, auth_1.authorize)({ id: '12', roles: [requiredRole] }, requiredRole);
    if (!authorized) {
        return {
            statusCode: 403,
            body: 'Not authorized'
        };
    }
    const response = await (0, dispatcher_1.dispatch)("createVehicle", {
        id: "12",
        roles: [requiredRole],
    }, {
        "vehicleId": 'ABC',
    });
    return {
        statusCode: 201,
        body: JSON.stringify(response)
    };
};
exports.createHandler = createHandler;
