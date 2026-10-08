import { SNSEvent } from "aws-lambda";

export const handler = async (event: SNSEvent): Promise<void> => {
    console.log(event);
    for (const record of event.Records) {
        console.log(record)
        const message = JSON.parse(record.Sns.Message);

        console.log(message.vehicleId);
        console.log(message.status);

        // Send email
        // Send SMS
        // Update another system
    }
};