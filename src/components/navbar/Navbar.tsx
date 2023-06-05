import Link from "next/link";

import {ThemeSwitcher} from "../themeSwitcher/ThemeSwitcher";

export const Navbar = () => {
    return (
            <nav className=" dark:bg-background-dark bg-background-light py-6 sm:py-5 flex items-center mx-2 sm:mx-0 sm:fixed sm:top-0 sm:w-screen  sm:z-50">
                <Link href={"/"}>
                    <div className="pl-2 sm:pl-10 flex flex-col justify-center items-center">
                        <h1 className="text-lg text-[#2B2C34] dark:text-[#FFFFFE] font-bold">
                            PEDRO ARISTIGUETA
                        </h1>
                        <small className="text-sm text-[#94A1B2] dark:text-[#7f5af0] font-semibold">Full Stack Developer</small>
                    </div>
                </Link>

                <div className="flex-1" />

                <div className="items-center justify-center space-x-5 hidden sm:flex sm:pr-14 ">
                    <div>
                        <Link href={"/"}>
                            <h3 className="text-lg text-[#2B2C34] dark:text-[#FFFFFE] cursor-pointer">
                                Proyectos
                            </h3>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/"}>
                            <h3 className="text-lg text-[#7f5af0] dark:text-[#7f5af0] cursor-pointer font-semibold">
                                Certificaciones
                            </h3>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/"}>
                            <h3 className="text-lg text-[#2B2C34] dark:text-[#FFFFFE] cursor-pointer">
                                Contáctame
                            </h3>
                        </Link>
                    </div>
                    <ThemeSwitcher />
                </div>

                
                {/* <div className="hidden sm:w-16" /> */}

                <div className="block sm:hidden pr-2">
                    <h3 className="text-lg  text-[#2B2C34] dark:text-[#FFFFFE]">
                        Menú
                    </h3>
                </div>
            </nav>
    )
}