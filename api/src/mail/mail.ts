import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { Mail } from "./interfaces/Mail";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true, //port 465 -> TLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
});

export const sendMail = async (mailData: Mail) => {
    const mailOptions = {
        from: `"${mailData.name}" <${process.env.SMTP_USER}>`,
        to: mailData.to,
        subject: `New message from ${mailData.name}`,
        text: mailData.message,
        html: `<p><strong>${mailData.name} ${mailData.email}</strong></p><p> ${mailData.message}</p>`
    };

    await transporter.sendMail(mailOptions);
}