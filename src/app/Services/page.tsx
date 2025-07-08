'use client';

import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Navigation , Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { nettoyage , immobilier } from '@/app/constant';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import ServiceTrick from '@/Components/ServiceTrick';
import ServiceCTA from '@/Components/ServiceCTA';
import Nettoyage from '@/Components/Nettoyage';


function Page() {
    return (
        <div className="bg overflow-hidden">
          
            <div className="flex flex-col items-center justify-center space-y-9 sm:pt-20 sm:pb-18 py-16  px-10 sm:px-24 text-pretty relative  bg-blend-mutiply service ">

               <div className="absolute blur-2xl bg-[#F39200] rounded-full h-[440px] w-[440px] opacity-20  -mt-40 -ml-6"/>
            
                <h1 className='flex flex-col space-y-7 items-center text-3xl font-bold font-serif mt-10 z-40 text-white'> 
                  <p className="sm:text-7xl text-3xl text-[#F39200] text-center">GCIG BENIN <br />
                   </p> </h1>

                <p className='sm:text-xl text-xl font-medium text-center  italic z-50 text-white'>Nettoyage professionnel, entretien complet et gestion immobilière : nous prenons soin <br/>
                 de vos espaces pour que vous puissiez vous concentrer sur l'essentiel.</p>

                 <div className="absolute blur-2xl bg-blue-500 rounded-full h-[440px] w-[440px] opacity-20  bottom-4 ml-64 mt-28"/>
            </div>

             <div className='sm:flex flex-col hidden space-y-7 py-10 sm:px-14 px-7 overflow-hidden' id="netoy">
                <div className='flex'> <h2 className='sm:text-3xl text-2xl font-semibold font-sans overflow-hidden'>Nettoyage et Entretien</h2> </div>

                   <Swiper
                  modules={[Navigation , Pagination , Autoplay]}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={3}
                  // autoplay={{delay: 5000,
                  // disableOnInteraction: false
                  // }}
                //   pagination={{clickable: true}} 
                navigation
                
                  className='flex sm:w-full relative max-w-7xl items-center justify-center   overflow-hidden '>
                    {
                        nettoyage.map((imo)=>(
                           <SwiperSlide key={imo.id} id={imo.tag} className="w-64  h-auto flex flex-col rounded-md shadow-xl space-y-6  border-b-white/10  relative items-center justify-center group ring-4 ring-white">
                                 {/* <div className="flex absolute w-full h-full rounded-md  bg-linear-to-b  from-transparent from-40% to-95% to-black "/>
                                 <Image src="/Hero.jpeg" alt="nettoyage" width={400} height={400} className="object-cover rounded-md w-full h-full"/>

                                 <h1 className="absolute text-xl font-bold text-white flex text-center bottom-7 mx-4"> {imo.title} </h1> */}

                                 <div className="w-full h-52"> <Image src={imo.pic} alt="pc" width={500} height={500} className="object-cover rounded-md w-full h-full"/></div>

                                {/* <div className='items-center justify-center bg-black/35 backdrop-blur-sm w-full rounded-md h-full hidden group-hover:flex absolute'>
                                  <div className='flex space-x-4 items-center justify-center px-6 py-3 text-lg font-sans font-semibold rounded-full bg-black text-white'>
                                    <Link href="/Services">Tout les services</Link> <FaArrowRight/>
                                  </div> */}

                                <div className='flex flex-col space-y-4 px-2 pb-5 '>
                                    <h1 className="flex sm:text-xl text-lg font-bold "> {imo.title} </h1>

                                    <div className='sm:text-md text-md flex'> 
                                       {imo.desc}
                                    </div>
                                </div>
                                
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className='sm:flex flex-col hidden space-y-7 pt-4 pb-10 sm:px-14 px-7' id="immo">
                <div className='flex'> <h2 className='sm:text-3xl text-2xl font-semibold font-sans'>Gestion immobilière</h2> </div>

                   <Swiper
                  modules={[Navigation , Pagination , Autoplay]}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={3}
                  // autoplay={{delay: 5000,
                  // disableOnInteraction: false
                  // }}
                //   pagination={{clickable: true}} 
                navigation
                
                  className='flex sm:w-full w-7xl items-center   '>
                    {
                        immobilier.map((imo)=>(
                           <SwiperSlide key={imo.id} id={imo.tag} className="sm:w-64  h-auto flex flex-col rounded-md shadow-xl space-y-6  border-b-white/10  relative items-center justify-center group ring-4 ring-white">
                                 {/* <div className="flex absolute w-full h-full rounded-md  bg-linear-to-b  from-transparent from-40% to-95% to-black "/>
                                 <Image src="/Hero.jpeg" alt="nettoyage" width={400} height={400} className="object-cover rounded-md w-full h-full"/>

                                 <h1 className="absolute text-xl font-bold text-white flex text-center bottom-7 mx-4"> {imo.title} </h1> */}

                                 <div className="w-full h-52"> <Image src={imo.pic} alt="pc" width={500} height={500} className="object-cover rounded-md w-full h-full"/></div>

                                {/* <div className='items-center justify-center bg-black/35 backdrop-blur-sm w-full rounded-md h-full hidden group-hover:flex absolute'>
                                  <div className='flex space-x-4 items-center justify-center px-6 py-3 text-lg font-sans font-semibold rounded-full bg-black text-white'>
                                    <Link href="/Services">Tout les services</Link> <FaArrowRight/>
                                  </div> */}

                                <div className='flex flex-col space-y-4 px-2 pb-5 '>
                                    <h1 className="flex sm:text-xl text-lg font-bold "> {imo.title} </h1>

                                    <div className='sm:text-md text-md flex'> 
                                       {imo.desc}
                                    </div>
                                </div>
                                
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>


               <div className='sm:hidden flex flex-col space-y-10 w-full mt-6 mb-5 pt-10 pb-4 bg-[#FCFCF7]' id="nettoy">
            
                            <h1 className='text-2xl font-semibold ml-6'> Nettoyage et Entretien </h1>

                             <div  
                              className='flex flex-col w-full h-auto items-center justify-center gap-12 px-7'
                                
                            >
                                  {
                                      nettoyage.map((imo)=>(
                           <div key={imo.id} id={imo.tag} 
                           className="w-full h-auto flex flex-col rounded-md shadow-xl space-y-6  border-b-white/10  relative items-center justify-center group ring-4 ring-white">

                                 <div className="w-full h-[30%]"> 
                                    <Image src={imo.pic} alt="pc" width={500} height={500} 
                                      className="object-cover rounded-md w-full h-full"/>
                                  </div>

                                <div className='w-full h-[70%] flex flex-col space-y-5 px-4 pb-5 '>
                                    <h1 className="flex sm:text-xl text-xl font-bold "> {imo.title} </h1>

                                    <div className='sm:text-md text-lg flex'> 
                                       {imo.desc}
                                    </div>
                                </div>
                                
                            </div>
                        ))
                                  }
            
                            </div>
                      </div> 


            <div className='sm:hidden flex flex-col space-y-10 w-full mt-6 pt-10 pb-4 bg-[#FCFCF7]' id="immo">
            
                            <h1 className='text-2xl font-semibold ml-6'> Gestion Immobilière </h1>

                             <div  
                              className='flex flex-col w-full h-auto items-center justify-center gap-12 px-7'
                                
                            >
                                  {
                                      immobilier.map((imo)=>(
                           <div key={imo.id} id={imo.tag} 
                           className="w-full h-auto flex flex-col rounded-md shadow-xl space-y-6  border-b-white/10  relative items-center justify-center group ring-4 ring-white">

                                 <div className="w-full h-[30%]" > 
                                    <Image src={imo.pic} alt="pc" width={500} height={500} 
                                      className="object-cover rounded-md w-full h-full"/>
                                  </div>

                                <div className='w-full h-[70%] flex flex-col space-y-5 px-4 pb-5 '>
                                    <h1 className="flex sm:text-xl text-xl font-bold "> {imo.title} </h1>

                                    <div className='sm:text-md text-lg flex' > 
                                       {imo.desc}
                                    </div>
                                </div>
                                
                            </div>
                        ))
                                  }
            
                            </div>
                      </div>                 

            <Nettoyage/>

            <ServiceTrick/>

            
           
            <ServiceCTA/>

        </div>
    )
}

export default Page
