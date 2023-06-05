'use client';
import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

import { useTransitionImage } from "@/hooks/useTransitionImage"
import { IProject } from "../../../imageBase/projectsDb"

interface Props {
    projects: IProject
}
const CardProjects = ({ projects: { images, description, id, github , website } }: Props) => {

    const [textShow, setTextShow] = useState(false);
    const { isHover, productImage, setIsHover } = useTransitionImage({ images });
    const img3 = `w-auto h-[400px] sm:h-[315px] sm:w-[600px] object-top rounded-md ${isHover ? 'sm:h-[315px] sm:w-auto' : ''} `

    return (
        <>
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={`flex bg-black justify-center items-center flex-col mx-4 space-y-2 shadow-md rounded-md`}>
                <div className="flex justify-center items-center">
                    <img
                        src={productImage}
                        alt={'proyecto'}
                        className={`object-cover w-auto h-auto rounded-md ${id === '3' ? img3 : ""} `} />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <p className="text-xl text-ellipsis  text-center sm:tex-start text-[#2B2C34] dark:text-[#94A1B2] p-4">
                    {
                        textShow ? description : `${description.substring(0, 100)}...`
                    }
                    <span className="cursor-pointer hover:text-primary-dark" onClick={() => setTextShow(!textShow)}>
                        {
                            textShow ? ' ver menos' : ' ver más'
                        }
                    </span>
                </p>

                <div className="my-4 flex gap-2 ">
                    <a href={github} target="_blank">
                        <button className="flex gap-2 items-center bg-primary-light dark:bg-primary-dark rounded-md font-light sm:font-medium text-black dark:text-white text-lg px-4 py-2" >
                            Ver proyecto  <img src="/github.png" alt="github" className="w-5 h-5 rounded-sm" />
                        </button>
                    </a>
                    {
                        id === '1' || id === '2' ? (
                            <a href={website} target="_blank">
                            <button className="bg-primary-light dark:bg-primary-dark rounded-md font-light sm:font-medium text-black dark:text-white text-lg px-4 py-2" >
                                Visitar sitio web <FontAwesomeIcon icon={faGlobe} className="text-black" />
                            </button>
                            </a>
                        ) :
                            null
                    }

                </div>
            </div>

        </>
    )
}

export default CardProjects