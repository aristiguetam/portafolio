import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { certificates } from '../../../imageBase/projectsDb';
import { CertificateCard } from "./CertificateCard";
import { useSliderShow } from "@/hooks/useSliderShow";



export const Certificates = () => {
  const { sliderLeft, sliderRight } = useSliderShow();

  return (
    <div className=" container mx-auto h-[500px] sm:h-[600px] w-auto mt-24">
      <div className="flex justify-start">
        <h2 className="text-3xl font-bold  text-[#2B2C34] dark:text-white w-auto  sm:text-start ">
          Certificados
        </h2>
      </div>

      <div className="relative flex items-center mt-10 overflow-hidden ">
        <FontAwesomeIcon icon={faChevronLeft} onClick={sliderLeft} className="cursor-pointer opacity-50 hover:opacity-100" />
        <div id="slider" className=" flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth gap-3 scrollbar-hide">
          {
            certificates.myCertificate.map((certificates) => (
              <CertificateCard key={certificates.id} certificate={certificates} />
            ))
          }
        </div>
        <FontAwesomeIcon icon={faChevronRight} onClick={sliderRight} className="cursor-pointer opacity-50 hover:opacity-100" />
      </div>
    </div>
  )
}
