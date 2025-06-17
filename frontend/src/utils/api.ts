import type { Mail } from "../contact/interfaces/Mail"

export const sendMail = async (data: Mail) => {
    const response = await fetch("https://nooridev.com/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        let errorMessage = "Unknown error occurred";
        try {
            const error = await response.json();
            errorMessage = error.message || errorMessage;
        } catch (e) {
            errorMessage = await response.text();
        }
        throw new Error(errorMessage);
    }

    return response.json();
}
