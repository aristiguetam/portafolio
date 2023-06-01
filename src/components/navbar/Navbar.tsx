import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav 
            className="bg-[#f8f5f2] dark:bg-background-dark py-6 sm:py-5 flex items-center mx-2 sm:mx-0 sm:fixed sm:top-0 sm:w-screen sm:z-50">
                <div className="pl-5">
                    <Link href={"/"}>
                        <h2 className="text-lg font-bold text-primary-dark">
                            Pedro Aristigueta
                        </h2>
                    </Link>
                </div>

                <div className="flex-1" />

                <div className="items-center justify-center space-x-5 hidden sm:flex sm:pr-20 xl:pr-40 ">
                    <div>
                        <Link href={"/"}>
                            <h3 className="text-lg text-[#2B2C34] dark:text-[#FFFFFE] cursor-pointer">
                                Proyectos
                            </h3>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/"}>
                            <h3 className="text-lg text-[#2B2C34] dark:text-[#FFFFFE] cursor-pointer">
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
                </div>

                <div className="block sm:hidden">
                    <h3 className="text-lg  text-[#2B2C34] dark:text-[#FFFFFE]">
                        Menú
                    </h3>
                </div>
            </nav>

        </>
    )
}
export default Navbar;