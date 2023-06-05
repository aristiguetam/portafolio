'use client';
import { useEffect, useState } from "react"

import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun} from "@fortawesome/free-regular-svg-icons";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const [selected, setSelected] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null

    const toggleTheme = () => {
        setSelected(!selected);
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <div
            onClick={toggleTheme}
            className={`flex w-10 h-5 rounded-full cursor-pointer transition-all duration-500  ${selected ? " bg-gray-900" : "bg-[#7f5af0] "}`}>
            <span
                className={` w-5 h-5 flex justify-center items-center 
              rounded-full transition-all duration-500  ${selected ? 'bg-[#7f5af0] ml-[21px]' : ' bg-gray-900  ml-0'}`}>
                {
                    selected ? (<FontAwesomeIcon icon={faSun} color="black" />) : (<FontAwesomeIcon icon={faMoon} color="white"  />)
                }

            </span>
        </div>
    )
}