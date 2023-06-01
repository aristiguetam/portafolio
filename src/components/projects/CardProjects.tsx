import Image from "next/image"
import { IProject } from "../../../imageBase/projectsImage"
import { useMemo, useState } from "react"

interface Props {
    projects: IProject
}
const CardProjects = ({ projects: { images, description, id } }: Props) => {

    const [textShow, setTextShow] = useState(false);
    const [isHover, setIsHover] = useState(false)
    const img3 = `w-auto h-[400px] sm:h-[315px] sm:w-[600px] object-top rounded-md ${isHover ? 'sm:h-auto sm:w-auto' : ''} `

    const productImage = useMemo(() => {
        return isHover
            ? images[1]
            : images[0]
    }, [isHover, images])

    return (
        <>
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={`flex justify-center items-center flex-col mx-4 space-y-2 shadow-md rounded-md`}>
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
                    <button className="bg-primary-light dark:bg-primary-dark rounded-md font-bold text-black dark:text-white text-lg px-4 py-2" >
                        Ver proyecto
                    </button>
                    {
                        id === '1' || id === '2' ? (
                            <button className="bg-primary-light dark:bg-primary-dark rounded-md font-bold text-black dark:text-white text-lg px-4 py-2" >
                                Visitar sitio web
                            </button>
                        ) :
                            null
                    }

                </div>
            </div>

        </>
    )
}

export default CardProjects