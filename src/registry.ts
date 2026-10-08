import { getVehicle, createVehicle } from "./handlers";

export const endpoints = {
  getVehicle: {
    requiredRole: "fleet.read",
    handler: getVehicle
  },
  createVehicle: {
    requiredRole: "fleet.write",
    handler: createVehicle
  }
};

export type EndpointName = keyof typeof endpoints;
