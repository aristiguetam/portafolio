import axios from "axios"

interface Props {
    email: string,
    asunto: string,
    title: string
}

const host = process.env.HOSTNAME || ""
export const sendEmail = async ({ asunto, email, title }: Props) => {
    try {
        const { data } = await axios.post(`${host}/api/sendEmail`, {  title, email, asunto })
        return data 
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
    }

}

