
export const isValidEmail = (email: string): boolean => {

    const match = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

    return !!match;
};

export const validateField = (email: string, title: string, asunto: string) => {

    if (!isValidEmail(email)) {
        return "El email no es valido";
    }

    if (title.length < 3) {
        return "El titulo debe tener al menos 3 caracteres";
    }

    if (asunto.length < 3) {
        return "El asunto debe tener al menos 3 caracteres";
    }

}
