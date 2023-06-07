'use client';
import { useContext } from "react";

import { UIContext } from "@/context";
import { ThemeSwitcher } from "../themeSwitcher/ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {

    const { isMenuOpen, toggleMenu } = useContext(UIContext);

    return (
        <nav className=" dark:bg-background-dark bg-background-light py-6 sm:py-5 shadow-sm dark:shadow-none flex items-center mx-2 sm:mx-0 sm:fixed sm:top-0 sm:w-screen  sm:z-50">
            <a href={"/"} >
                <div className="pl-2 sm:pl-10 flex flex-col justify-center items-center">
                    <h1 className="text-lg text-[#2B2C34] dark:text-[#FFFFFE] font-bold">
                        PEDRO ARISTIGUETA
                    </h1>
                    <small className="text-sm text-[#94A1B2] dark:text-[#7f5af0] font-semibold">Full Stack Developer</small>
                </div>
            </a>

            <div className="flex-1" />

            <div className="items-center justify-center space-x-5 hidden md:flex sm:pr-14 ">
                <div>
                    <a href={"#projects"} >
                        <h3 className="text-lg text-[#2B2C34] dark:text-[#FFFFFE] cursor-pointer hover:opacity-70">
                            Proyectos
                        </h3>
                    </a>
                </div>
                <div>
                    <a href={"#certificates"}>
                        <h3 className="text-lg text-[#7f5af0] dark:text-[#7f5af0] cursor-pointer font-semibold hover:opacity-70">
                            Certificaciones
                        </h3>
                    </a>
                </div>
                <div>
                    <a href={"#contact"}>
                        <h3 className="text-lg text-[#2B2C34] dark:text-[#FFFFFE] cursor-pointer hover:opacity-70">
                            Contáctame
                        </h3>
                    </a>
                </div>
                <ThemeSwitcher />
            </div>


            {/* <div className="hidden sm:w-16" /> */}

            <div className="block md:hidden pr-2">
                {
                    !isMenuOpen && <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleMenu} />
                }
            </div>
        </nav>
    )
}