import { GetVehicleInput, GetVehicleOutput } from "./domain";
import { ApiRequest, ApiResponse } from "./types";

export async function getVehicle(
  request: ApiRequest<GetVehicleInput>,
): Promise<ApiResponse<GetVehicleOutput>> {
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

export async function createVehicle(
  request: ApiRequest<GetVehicleInput>,
): Promise<ApiResponse<GetVehicleOutput>> {
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
