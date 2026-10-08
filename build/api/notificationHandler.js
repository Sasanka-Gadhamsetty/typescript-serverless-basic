"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    console.log(event);
    for (const record of event.Records) {
        console.log(record);
        const message = JSON.parse(record.Sns.Message);
        console.log(message.vehicleId);
        console.log(message.status);
        // Send email
        // Send SMS
        // Update another system
    }
};
exports.handler = handler;
