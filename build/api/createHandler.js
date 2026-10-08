"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHandler = void 0;
const auth_1 = require("../auth");
const dispatcher_1 = require("../dispatcher");
const client_sns_1 = require("@aws-sdk/client-sns");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sns = new client_sns_1.SNSClient();
const createHandler = async (event) => {
    // console.log('lambda invoked', event);
    const requiredRoleName = "fleet.write";
    const { id, vehicleId, requiredRole } = JSON.parse(event.body);
    const userDetails = { id, roles: [requiredRole] };
    const authorized = await (0, auth_1.authorize)(userDetails, requiredRoleName);
    if (!authorized) {
        return {
            statusCode: 403,
            body: JSON.stringify({
                "message": 'Not authorized'
            })
        };
    }
    const response = await (0, dispatcher_1.dispatch)("createVehicle", userDetails, {
        vehicleId
    });
    return {
        statusCode: 201,
        body: JSON.stringify(response)
    };
};
exports.createHandler = createHandler;
