import { DeleteMessageCommand, ReceiveMessageCommand } from "@aws-sdk/client-sqs";
import { SQS_CLIENT } from "..";

export const startPolling = async () => {
    while (true) {
        try {
            await pollForMessages();
        } catch (err) {
            console.error('Polling error:', err);
            await new Promise((res) => setTimeout(res, 5000));
        }
    }
}

export const pollForMessages = async () => {
    const SQS_URL = process.env.SQS_URL;

    if (!SQS_CLIENT || !SQS_URL) return;

    const resp = await SQS_CLIENT.send(
        new ReceiveMessageCommand({
            MaxNumberOfMessages: 5,
            QueueUrl: SQS_URL,
            WaitTimeSeconds: 20,
        })
    );

    if (!resp.Messages || resp.Messages.length === 0) return;

    let processedMessageIds = new Set<string>();
    await Promise.all(
        resp.Messages.map(async (m) => {
            try {
                if (!m.Body || !m.MessageId) throw new Error("No body in message");
                if (processedMessageIds.has(m.MessageId)) {
                    throw ("message already processed!");
                } else {
                    processedMessageIds.add(m.MessageId);
                }

                const body = JSON.parse(m.Body);
                switch (body.cmd) {
                    case "retry_video-request_upload":
                        await new Promise(()=>{});
                        break;
                    case "upload_approved_video-request":
                        await new Promise(()=>{});
                        break;
                    default:
                        console.warn("Unknown cmd:", body.cmd);
                }

                await SQS_CLIENT.send(
                    new DeleteMessageCommand({
                        QueueUrl: SQS_URL!,
                        ReceiptHandle: m.ReceiptHandle!,
                    })
                );
            } catch (err) {
                console.error("Error processing message:", err);
            }
        })
    );
}