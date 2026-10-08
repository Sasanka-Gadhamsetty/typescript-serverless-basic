import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import { dispatch } from "../dispatcher";
import { authorize } from "../auth";

export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  const vehicleId = event.queryStringParameters?.vehicleId ?? "";

  const response = await dispatch(
    "getVehicle",
    {
      id: "12",
      roles: ["fleet.read"],
    },
    {
      vehicleId,
    },
  );

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};