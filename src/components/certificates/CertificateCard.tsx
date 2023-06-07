import Image from "next/image"
import { ICertificate } from "../../../imageBase/projectsDb"

interface Props {
    certificate: ICertificate
}
export const CertificateCard = ({ certificate: { imagen, name } }: Props) => {
    return (
        <>
            <Image width={0} height={0} sizes="100vw"  src={imagen} alt={name} className="inline-block h-[350] sm:h-[450px] w-[100%] rounded-lg object-cover justify-center items-center" />
        </>
    )
}
