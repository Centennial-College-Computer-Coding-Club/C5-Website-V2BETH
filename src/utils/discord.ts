interface WebhookPayload {
    content: string;
    embeds?: {
        title?: string;
        description?: string;
        author?: {
            name: string;
        };
        footer?: {
            text: string;
        };
    }[];
}

export async function sendDiscordWebhook(payload: WebhookPayload): Promise<void> {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error("Discord webhook URL is not set");
        return;
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error("Failed to send Discord webhook:", error);
    }
}
