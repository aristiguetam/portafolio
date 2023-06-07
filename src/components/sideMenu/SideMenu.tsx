'use client';
import { useContext } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link"

import { UIContext } from "@/context"
import { ThemeSwitcher } from "../themeSwitcher/ThemeSwitcher"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export const SideMenu = () => {
    const router = useRouter();
    const { isMenuOpen, toggleMenu } = useContext(UIContext);
    const navigateTo = (id: string) => {
        router.push(id);
        toggleMenu()
    }

    return (
        <>
            {
                isMenuOpen && (
                    <>
                        <div className="relative">
                            <div className="fixed z-[20000] flex flex-col justify-center items-center h-screen w-screen  dark:bg-black/30  backdrop-blur-xl bg-white/30 ">

                                <div className="absolute top-8 right-5">
                                    <FontAwesomeIcon icon={faXmark} size="2x" onClick={toggleMenu} />
                                </div>

                                <div className=" fixed flex flex-col  items-center justify-center space-y-10 mb-10">

                                    <div>
                                        <h3 onClick={() => navigateTo('#projects')} className="text-xl font-bold text-[#7f5af0]  cursor-pointer">
                                            Proyectos
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 onClick={() => navigateTo('#certificates')} className="text-xl text-[#7f5af0] cursor-pointer font-bold">
                                            Certificaciones
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 onClick={() => navigateTo('#contact')} className="text-xl text-[#7f5af0] cursor-pointer font-bold">
                                            Contáctame
                                        </h3>
                                    </div>
                                    <ThemeSwitcher />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}
