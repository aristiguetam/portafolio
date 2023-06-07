"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from 'next-themes'

import { motion} from 'framer-motion';
import { Ring } from '@uiball/loaders'
import { UIProvider } from "@/context";

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <div className=" flex h-screen w-screen justify-center items-center">
            <Ring
                size={80}
                lineWeight={4}
                speed={0.4}
                color="black"
            />
        </div>
    )

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
        >
            <UIProvider>
                <ThemeProvider attribute='class'>
                    {children}
                </ThemeProvider>
            </UIProvider>
        </motion.div>
    )

}

export default Providers;

