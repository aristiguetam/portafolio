'use client';
import { motion } from "framer-motion"
export const AboutHero = () => {

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-4xl sm:text-6xl text-[#2B2C34] dark:text-[#FFFFFE] font-extrabold text-center">
                    PEDRO ARISTIGUETA
                </h1>
                <small className="text-2xl text-[#94A1B2] dark:text-[#7f5af0] font-semibold text-center">Full Stack Developer</small>
            </div>
            <div className="flex flex-col justify-center items-center pt-2 p-4 sm:p-0">
                <p className='text-lg text-ellipsis font-medium text-[#2B2C34] dark:text-[#94A1B2] text-center pt-2' >
                    ¡Hola!<br />
                    Actualmente vivo en Lima-Perú, me apasiona la tecnología, el arte y el deporte.
                    Me destaco como Full Stack Developer con 1 año de experiencia creando, diseñando aplicaciones para dispositivos móviles y web.
                </p>
                <div className='flex my-8 shadow-lg'>
                    <a href={"#contact"}>
                        <motion.button
                            whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } }}
                            whileTap={{ scale: 0.95, transition: { duration: 0.2, ease: "easeInOut" } }}
                            className="dark:bg-[#7f5af0] bg-primary-light rounded-md font-bold text-center text-black dark:text-white text-lg px-7 py-2 sm:text-xl sm:px-9 sm:py-3 "
                        >
                            Comienza tu proyecto
                        </motion.button>
                    </a>
                </div>
            </div>
        </>
    )
}
