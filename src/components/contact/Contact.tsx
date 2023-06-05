import { ContactForm } from "./ContactForm"

export const Contact = () => {
    return (
        <div className=" bg-background-dark dark:bg-background-light h-[630px] flex flex-col justify-center items-center">
            <div className="justify-center items-center">
                <h2 className="dark:text-[#2B2C34] text-[#FFFFFE] text-3xl font-bold sm:text-7xl sm:font-extrabold text-center">
                    Trabajemos <span className="text-[#7f5af0]">juntos.</span>
                </h2>
                <p className="text-sm font-medium sm:text-lg text-ellipsis text-center dark:text-[#2B2C34] text-[#FFFFFE] mt-2 sm:font-semibold">¿Tienes una idea genial que quieras llevar a cabo? Contáctame y hagamos realidad tu proyecto.</p>
            </div>

            <div className="w-[350px]  h-[250px] sm:w-[800px] sm:h-[300px] my-7 ">
                <ContactForm />
            </div>

        </div>
    )
}
