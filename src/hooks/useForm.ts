import { useState, FormEvent } from "react";

import { sendEmail } from "@/sendEmail/sendEmail";
import { validateField } from "@/utils/validateField";

type FormData = {
    email: string;
    title: string
    asunto: string;
}

export const useForm = () => {

    const [data, setData] = useState<FormData>({
        title: "",
        email: "",
        asunto: "",
    })

    const [blur, setBlur] = useState(false);
    const [blurEmail, setBlurEmail] = useState(false);
    const [blurAsunto, setBlurAsunto] = useState(false);
    const [select, setSelect] = useState(false);
    const [selectEmail, setSelectEmail] = useState(false);
    const [selectAsunto, setSelectAsunto] = useState(false);

    const handleBlur = () => {
        setBlur(true);
        setSelect(false);
    }

    const handleFocus = () => {
        setSelect(true)
        setBlur(false);
    }


    const handleBlurEmail = () => {
        setBlurEmail(true);
        setSelectEmail(false);
    }

    const handleFocusEmail = () => {
        setSelectEmail(true);
        setBlurEmail(false);
    }

    const handleBlurAsunto = () => {
        setBlurAsunto(true);
        setSelectAsunto(false);
    }

    const handleFocusAsunto = () => {
        setSelectAsunto(true);
        setBlurAsunto(false);
    }

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();

        const { asunto, email, title } = data;

        if (validateField(email, title, asunto)) {
            alert("Todos los campos son obligatorios");
            return;
        }

        sendEmail({ title, email, asunto });

        setData({
            email: "",
            title: "",
            asunto: "",
        });
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    return {
        data,
        blur,
        select,
        selectEmail,
        selectAsunto,
        handleBlur,
        handleFocus,
        handleBlurEmail,
        handleBlurAsunto,
        handleSubmit,
        handleChange,
        handleFocusEmail,
        handleFocusAsunto,
    }
}
