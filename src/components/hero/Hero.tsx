import { AboutHero } from "./AboutHero"
import { ImagenHero } from "./ImagenHero"

export const Hero = () => {
    return (
        <>
            <div 
                className="flex flex-col justify-center items-center sm:my-5 md:my-10 sm:flex-row h-[600px] container mx-auto">
                <div className="justify-center items-center md:w-1/2 w-[100%] ">
                    <AboutHero />
                </div>
                <div className="justify-center items-center w-1/2 hidden md:flex ">
                    <ImagenHero />
                </div>
            </div>

        </>
    )
}
