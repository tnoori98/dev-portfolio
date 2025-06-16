import type { Mail } from "../contact/interfaces/Mail"

export const sendMail = async (data: Mail) => {
    const result = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if(!result.ok){
        const error = await result.json();
        throw new Error(error.message);
    }

    return result.json();
}