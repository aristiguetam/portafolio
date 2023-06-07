import { useState, useEffect } from "react";

export const isMobileOrDesktop = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        const mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
        setIsMobile(mobile);
    }, []);

    return isMobile;
}