"use server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid Sender Email"
        }
    }

    if (!validateString(message, 2000)) {
        return {
            error: "Invalid Message"
        }
    }
    let data;

    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: '21it3013@rgipt.ac.in',
            subject: 'Message from Contact form',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
            //text: message as string,
            //react: <ContactFormEmail message={message} senderEmail={senderEmail} />
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data,
    }
};