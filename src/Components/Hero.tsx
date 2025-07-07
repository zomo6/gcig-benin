'use client';

import Link from "next/link"
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Navigation , Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Hero() {

    return ( 
        <div className="w-full h-[90vh] Hero sm:flex text-center  flex flex-col   text-white bg-black relative sm:mb-10 ">

            <div className="absolute w-full hidden sm:flex h-full bg-linear-to-r from-black from-20%   via-black/70 to-transparent z-10 "/>

            <div className="sm:flex  flex-col hidden text-start mt-22 ml-20 z-40">

                 <div className="text-5xl flex space-x-6 font-bold mb-4"> 
                      <h1 className="orange">GCIG BENIN</h1>  <p className="bleu">Multi Services</p>
                </div>

                <h1 className="text-5xl font-bold"> 
                    Un seul prestataire de confiance <br/> pour tous vos besoins d'entretien  <br/> et immobiliers
                </h1>

                <p className="text-xl font-medium opacity-70 italic flex mt-10">
                    Nous prenons soin de vos espaces comme s’ils étaient les nôtres. <br/>
                     Nettoyage, entretien et gestion de biens : un service complet, fiable et sur mesure. <br/>
                    {/* Nettoyage, entretien et gestion de biens : un service complet, fiable et sur mesure. <br/> */}
                    
                </p>

                <div className="flex space-x-8 font-semibold mt-16 text-xl">
                    <Link href="/Services " className="px-8 py-3 rounded-full text-center bg-linear-to-r from-[#F39200] to-[#304C9C] transition-all ease-in hover:text-black"> Nos Services </Link>
                      <Link href="/Contact" className="px-8 py-3 rounded-full text-center shadow ring ring-white text-gray-300  transition-all ease-in hover:bg-white  hover:text-black">Contactez-Nous </Link>
                </div>
            </div>

            <div className='mobileUX sm:hidden flex w-full h-full items-center justify-center z-40'>
                <Swiper

                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={50}
                  slidesPerView={1}
                //   autoplay={{delay: 3000,
                //   disableOnInteraction: false
                //   }}
                  pagination={{clickable: true}} 
                // navigation
                  className='flex w-full h-full items-center justify-center'
                
                >

                    <SwiperSlide className="relative">

                 <div className="absolute w-full flex h-full bg-linear-to-r from-black  to-transparent backdrop-blur-[1px]  voile"/>
                             <div className="flex  flex-col  text-start mt-22 mx-10 justify-center items-center z-40">

                <div className="text-3xl flex flex-col space-y-1 font-bold justify-center items-center mb-3  mt-2 z-50"> 
                      <h1 className="orange">GCIG BENIN</h1>  <p className="">Multi Services</p>
                </div>

                {/* <h1 className="text-2xl font-bold flex text-center text-white z-50"> 
                    Un seul prestataire de confiance  pour tous vos besoins d'entretien  et immobiliers
                </h1> */}

                <p className="text-xl font-semibold opacity-80 italic text-center  items-center justify-center flex mt-8 z-50">
                    Nous prenons soin de vos espaces comme s’ils étaient les nôtres. 
                     Nettoyage, entretien et gestion de biens : un service complet, fiable et sur mesure. <br/>
                    
                </p>

                <div className="flex flex-col space-y-8  w-full mx-32 font-semibold mt-18  z-50">
                    <Link href="/Services " className="px-8 py-4 w-full rounded-full text-center bg-linear-to-r from-[#F39200]/30 to-[#304C9C] transition-all ease-in hover:text-black"> Nos Services </Link>
                    <Link href="/Contact" className="px-8 py-3 rounded-full w-full text-center shadow ring ring-white text-gray-300  transition-all ease-in hover:bg-white  hover:text-black">Contactez-Nous </Link>
                </div>
            </div>
                    </SwiperSlide>

            <SwiperSlide className="relative voil">

                 <div className="absolute w-full flex h-full bg-linear-to-r from-black  to-transparent backdrop-blur-[1px]  voile"/>
                             <div className="flex  flex-col  text-start mt-22 mx-10 justify-center items-center z-40">

                <div className="text-3xl sm:flex flex-col space-y-1  font-bold justify-center items-center mb-4  z-50"> 
                      <h1 className="orange text-center">GCIG BENIN</h1>  <p className="text-center">Multi Services</p>
                </div>

                {/* <h1 className="text-5xl font-bold"> 
                    Un seul prestataire de confiance <br/> pour tous vos besoins d'entretien  <br/> et immobiliers
                </h1> */}

                <p className="text-xl font-semibold opacity-80 italic text-center  items-center justify-center flex mt-8 z-50">
                    Nous prenons soin de vos espaces comme s’ils étaient les nôtres. 
                     Nettoyage, entretien et gestion de biens : un service complet, fiable et sur mesure. <br/>
                   
                    
                </p>

                <div className="flex flex-col space-y-8   w-full mx-32 font-semibold mt-18  z-50">
                    <Link href="/Services " className="px-8 py-4 w-full rounded-full text-center bg-linear-to-r from-[#F39200]/30 to-[#304C9C] transition-all ease-in hover:text-black"> Nos Services </Link>
                    <Link href="/Contact" className="px-8 py-3 rounded-full w-full text-center shadow ring ring-white text-gray-300  transition-all ease-in hover:bg-white  hover:text-black">Contactez-Nous </Link>
                </div>
             </div>
            </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Hero
