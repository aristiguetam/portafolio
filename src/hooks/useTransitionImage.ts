import { useMemo, useState } from "react"


interface Props {
    images: string[];
}
export const useTransitionImage = ({ images }: Props) => {
    
    const [isHover, setIsHover] = useState(false)
   
    const productImage = useMemo(() => {
        return isHover
            ? images[1]
            : images[0]
    }, [isHover, images])

    return {
        productImage,
        isHover,
        setIsHover,
    }
}

