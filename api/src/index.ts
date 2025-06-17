import express from "express";
import cors from "cors";
import { sendMail } from "./mail/mail";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
    const mailData = req.body;

    try{
        await sendMail(mailData);
        res.status(200).json({success: true});
    }
    catch(error){
        res.status(500).json({error: "Failed to send email"});
    }
});

app.listen(5001, () => console.log("Server running on port 5000"));
