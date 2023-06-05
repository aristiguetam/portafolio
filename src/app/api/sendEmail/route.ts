
import { createTransport } from 'nodemailer';

export async function POST(req: Response) {

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
            from: email,
            to: "aristiguetam97@gmail.com",
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
