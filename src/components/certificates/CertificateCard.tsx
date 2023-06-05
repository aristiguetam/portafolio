import { ICertificate } from "../../../imageBase/projectsDb"

interface Props {
    certificate: ICertificate
}
export const CertificateCard = ({ certificate: { imagen, name } }: Props) => {
    return (
        <>
            <img src={imagen} alt={name} className="inline-block h-[350] sm:h-[450px] w-[100%] rounded-lg object-cover justify-center items-center" />
        </>
    )
}
