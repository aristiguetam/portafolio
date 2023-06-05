import Image from 'next/image'

export const TecnologiesList = () => {
    return (
        <>
            <div className='flex justify-center items-center flex-wrap my-5 sm:space-x-4 sm:justify-between'>
                <Image src={'/dockerLogo.png'} alt={'Docker'} width={100} height={100}  />
                <Image src={'/node.js.png'} alt={'node'} width={100} height={100}  />
                <Image src={'/postgress.png'} alt={'postgress'} width={100} height={100}  />
                <Image src={'/tp.png'} alt={'tp'} width={100} height={100}  />
                <Image src={'/js.png'} alt={'js'} width={100} height={100}  />
                <Image src={'/mongodb.png'} alt={'mongo'} width={100} height={100}  />
                <Image src={'/postman.png'} alt={'postman'} width={100} height={100}  />
                <Image src={'/react.png'} alt={'react'} width={100} height={100}  />
            </div>
        </>
    )
}

  