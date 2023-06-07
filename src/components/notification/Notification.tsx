'use client';
import { faCircleCheck, faCircleExclamation, faRemove } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

interface Props {
    success: boolean;
    message: string;
}
export const Notification = ({ success, message }: Props) => {

    return (

        <div className=" relative flex justify-center items-center z-[999] ">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                }}
                exit={{ opacity: 0 }}
                className="absolute flex flex-col dark:bg-background-dark bg-background-light h-[130px] w-[320px] justify-center items-center rounded-lg  p-2">

                <div className="absolute top-2 right-4">
                    <FontAwesomeIcon icon={faRemove} size="1x" className="text-red-500 cursor-pointer" onClick={() => window.location.reload()} />
                </div>

                <div className="flex  items-center justify-center gap-4">
                    <h2 className={`text-center text-2xl font-bold ${success ? 'text-[#7f5af0]' : 'text-red-500'} `}>
                        {message}
                    </h2>
                    {success ? (<FontAwesomeIcon icon={faCircleCheck} size="lg" className="text-[#7f5af0]" />) : (<FontAwesomeIcon icon={faCircleExclamation} size="lg" className="text-red-500" />)}


                </div>
            </motion.div>
        </div>
    )
}
