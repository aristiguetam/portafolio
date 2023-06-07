import Image from 'next/image'
import Iperson from '../../../public/Iperson.png'

export const ImagenHero = () => {
    return (
        <>
            <div className='bg-[#7f5af0] h-[450px] w-[450px] rounded-full flex justify-center items-center '>
                <Image width={0} height={0} sizes='100vw' src={Iperson} alt='my' className='object-cover' />
            </div>
        </>
    )
}
