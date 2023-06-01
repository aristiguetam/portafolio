'use client';
import { motion } from "framer-motion"
export const AboutHero = () => {

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <h1
                    className="text-6xl font-bold text-[#2B2C34] dark:text-white justify-start items-start text-center">
                    Pedro <span className='text-primary-dark text-3xl'>LOGO</span> Aristigueta
                </h1>
                <h2
                    className='text-lg font-bold text-primary-light dark:text-primary-dark text-center pt-2'>
                    Full Stack Developer
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center pt-2">
                <div>
                    <p className='text-lg text-ellipsis text-[#2B2C34] dark:text-[#94A1B2] text-center pt-2' >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae nihil rem adipisci, pariatur necessitatibus corrupti consequatur ullam incidunt, similique ducimus quam ratione non veniam iure tempore fugit quis libero!
                    </p>
                </div>
                <div className='flex my-8 shadow-lg'>
                    <motion.button
                        whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: "easeInOut" } }}
                        whileTap={{ scale: 0.95, transition: { duration: 0.2, ease: "easeInOut" } }}
                        className="dark:bg-primary-dark bg-primary-light rounded-md font-bold text-center text-black dark:text-white text-lg px-7 py-2 sm:text-xl sm:px-9 sm:py-3 ">
                        Comienza tu proyecto
                    </motion.button>
                </div>
            </div>
        </>
    )
}
