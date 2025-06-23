import Link from "next/link"
import Image from 'next/image'

function AboutUs() {
    return ( 
        <div className="w-full  flex mt-7 items-center sm:justify-between sm:px-20 mb-5  sm:py-9 "> 

            <div className="h-full w-[70%] relative ml-12 -mt-20 sm:block hidden">

                <div className="rounded-full ring-6 ring-[#F39200]/30 w-40 h-40 absolute -top-52 -left-6 z-10">
                     <Image src="/Hero.jpeg" alt="pic" className="contain w-full h-full rounded-full" width={400} height={400}/> </div>

                <div className="rounded-full ring-6 ring-[#F39200]/80 w-96 h-96 absolute -top-36">
                     <Image src="/d.jpg" alt="pic" className="contain w-full h-full rounded-full" width={400} height={400}/> </div>

                <div className="rounded-full ring-6 ring-[#F39200]/50 w-32 h-32 absolute top-20 -left-4">
                     <Image src="/a.jpg" alt="pic" className="contain w-full h-full rounded-full" width={400} height={400}/> </div>

               {/* <div className="flex rounded-full ring-2 ring-[#F39200] h-full w-[400px] p-3">
                 <Image src="/logo.png" alt="pic" width={400} height={400} className='object-cover  w-full h-full'/> 
                 </div> */}
            </div>

            <div className="flex flex-col h-full sm:w-[70%] sm:items-start sm:p-0 px-10 pb-7 pt-10 pl-16 justify-center items-center">
                <h1 className="text-[#304C9C] font-bold text-xl pl-2 border-l-4 border-[#F39200] mb-7 mt-3 sm:my-3">
                    Qui Sommes-Nous ?
                </h1>

                <p className="flex flex-wrap font-bold text-pretty text-2xl  items-center ">
                   Depuis notre création, GCIG BENIN  s'impose comme le leader
                    incontournable du nettoyage professionnel et des services immobiliers au Bénin. 
                     Notre expertise reconnue et notre approche sur-mesure font de nous le choix 
                   privilégié des entreprises et particuliers exigeants.
                </p>

                <p className="sm:text-xl text-lg text-gray-500 italic font-bold mt-10 mb-9">
                    Faites confiance à l'expérience GCIG BENIN pour des espaces qui reflètent votre excellence.
                </p>

                 <Link href="/Contact" className="px-8 py-3 rounded-full text-center text-lg font-semibold text-white bg-linear-to-r from-[#F39200] to-[#304C9C] transition-all ease-in hover:text-black">
                 En svoir plus ! 
                 </Link>
            </div>
        </div>
    )
}

export default AboutUs
