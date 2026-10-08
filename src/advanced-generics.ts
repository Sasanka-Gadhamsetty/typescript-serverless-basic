export interface EndpointContract<TInput, TOutput> {
  input: TInput;
  output: TOutput;
}

interface GetVehicleInput {
  vehicleId: string;
}

interface GetVehicleOutput {
  vehicleId: string;
  vin: string;
}

interface UpdateVehicleInput {
  vehicleId: string;
  model: string;
}

interface UpdateVehicleOutput {
  success: boolean;
}

type Contracts = {
  getVehicle: EndpointContract<GetVehicleInput, GetVehicleOutput>;
  updateVehicle: EndpointContract<UpdateVehicleInput, UpdateVehicleOutput>;
};

export async function dispatch<
  TEndpoint extends keyof Contracts
>(
  endpoint: TEndpoint,
  body: Contracts[TEndpoint]["input"]
): Promise<Contracts[TEndpoint]["output"]> {
  throw new Error("Not implemented");
}
