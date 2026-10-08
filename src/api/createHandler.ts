import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { authorize, UserContext } from "../auth";
import { dispatch } from "../dispatcher";
import { PublishCommand, SNSClient } from "@aws-sdk/client-sns";
import dotenv from "dotenv";
dotenv.config();
const sns = new SNSClient();
export const createHandler = async(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // console.log('lambda invoked', event);
    const requiredRoleName = "fleet.write";
    const { id, vehicleId, requiredRole} = JSON.parse(event.body!);
    const userDetails: UserContext = {id, roles: [requiredRole]}
    const authorized: boolean = await authorize(userDetails, requiredRoleName);
    if (!authorized) {
        return {
            statusCode: 403,
            body: JSON.stringify({
                "message": 'Not authorized'
            })
        }
    }
    const response = await dispatch(
        "createVehicle",
        userDetails,
        {
        vehicleId
        },
    );
    return {
        statusCode: 201,
        body: JSON.stringify(response)
    }
}