export interface Vehicle {
  id: string;
  vin?: string;
  make: string;
  model: string;
}

export interface GetVehicleInput {
  vehicleId: string;
}

export interface GetVehicleOutput {
  vehicle: Vehicle;
}
