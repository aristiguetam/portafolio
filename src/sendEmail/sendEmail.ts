import axios from "axios"

interface Props {
    email: string,
    asunto: string,
    title: string
}

export const sendEmail = async ({ asunto, email, title }: Props) => {
    try {
        const { data } = await axios.post(`https://pedro-arisitigueta-portafolio.vercel.app/api/sendEmail`, {  title, email, asunto })
        return data 
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
    }

}

