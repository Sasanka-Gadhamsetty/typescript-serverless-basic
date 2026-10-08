"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVehicle = getVehicle;
exports.createVehicle = createVehicle;
async function getVehicle(request) {
    return {
        success: true,
        data: {
            vehicle: {
                id: request.body.vehicleId,
                vin: "1HGCM82633A123456",
                make: "Honda",
                model: "Accord",
            },
        },
    };
}
async function createVehicle(request) {
    console.log(request.body);
    return {
        success: true,
        data: {
            vehicle: {
                id: request.body.vehicleId ?? "ABC",
                make: "Honda",
                model: "Accord",
            },
        },
    };
}
