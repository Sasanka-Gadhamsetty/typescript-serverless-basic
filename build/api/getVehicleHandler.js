"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const dispatcher_1 = require("../dispatcher");
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
