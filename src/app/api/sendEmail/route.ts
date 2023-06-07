
import { NextRequest } from 'next/server';
import { createTransport } from 'nodemailer';

export async function POST(req: NextRequest) {

    const body = await req.json();

    const { title, email, asunto,  }: { title: string, email: string, asunto: string } = body;

    try {
        const transporter = createTransport({
            service: "gmail",
            auth: {
                user: "aristiguetam97@gmail.com",
                pass: "vzcgwkahzmjvtstf",
            },
        });

        const mailOptions = {
            from: "aristiguetam97@gmail.com",
            to: email ,
            subject: title,
            text: asunto,
        };

        const info = await transporter.sendMail(mailOptions);

        return new Response(`${JSON.stringify(info)}`);

    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        return new Response(`error`)
    }
}
