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
                        className="dark:bg-[#7f5af0] bg-primary-light rounded-md font-bold text-center text-black dark:text-white text-lg px-7 py-2 sm:text-xl sm:px-9 sm:py-3 ">
                        Comienza tu proyecto 
                    </motion.button>
                </div>
            </div>
        </>
    )
}
