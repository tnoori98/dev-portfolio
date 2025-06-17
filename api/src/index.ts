import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { sendMail } from "./mail/mail";

const app = express();
app.use(cors());
app.use(express.json());

const mailLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 1,
    message: "Too many requests, try again later"
})

app.post("/api/contact", mailLimiter, async (req, res) => {
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
