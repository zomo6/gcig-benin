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
import { FaArrowRight , FaHome, FaUser } from 'react-icons/fa';
// import { Router } from 'next/router';
import { useRouter } from 'next/navigation'


interface ServicesProps {
    
}

const Services: React.FC<ServicesProps> = () => {


  const router = useRouter();


    return (
        <div className="flex flex-col space-y-3 items-center overflow-hidden justify-center py-9  sm:py-7 sm:px-20 w-full  sm:mt-4 sm:mb-10 bg-[#F5F5F5]">

          <div className="absolute blur-2xl hidden sm:flex bg-blue-400 rounded-full h-72 w-[600px] bg-blend-lighten justify-center -mt-[610px] opacity-40"/>

            <div className="flex flex-col space-y-6 text-center z-20">
                {/* <h1 className="font-semibold text-3xl  ">Nos Services</h1> */}
                <p className="font-semibold text-2xl sm:text-3xl text-black flex sm:px-52">
                    Nous offrons une large gamme de services  adaptée à vos problèmes respectifs  
                </p>
            </div>

         <div className="sm:flex flex-col hidden sm:space-y-32 space-y-12 mt-18 relative overflow-hidden">

              <div className="sm:flex  sm:space-x-20 space-x-10 relative overflow-hidden">
                <div className="sm:flex hidden  flex-col rounded-md shadow-lg relative items-center justify-center size-48 sm:w-72 sm:h-80 ring-white ring-10">
                    <div className="flex absolute w-full h-full rounded-md bg-black/40"/>
                    <Image src="/tool.jpg" alt="nettoyage" width={400} height={400} className="object-cover rounded-md w-full h-full"/>

                   <div
                    className="flex flex-col  items-center rounded-lg justify-center
                     absolute z-20 text-white">

                        <h1 className="font-bold mt-11 sm:text-3xl text-2xl text-pretty ">Nettoyage</h1>
                         
                         <h1 className="font-bold  sm:text-3xl text-2xl text-pretty text-[#F39200]">Entretien</h1>

                         <div className='flex space-x-4 mt-20 items-center justify-center px-6 py-3 text-lg font-sans font-semibold rounded-full bg-black opacity-80 text-white'>
                                    <Link href="/Services#netoy">Tout les services</Link> <FaArrowRight/>
                          </div>

                    </div>

                    
                </div>

                <p className="text-3xl font-bold  sm:hidden text-center ml-10 text-[#F39200]">
                  Nettoyage et Entretien</p>

                <Swiper
                  modules={[Navigation , Pagination , Autoplay]}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={3}
                  // autoplay={{delay: 2000,
                  // disableOnInteraction: false
                  // }}
                //   pagination={{clickable: true}} 
                navigation
                  className='flex sm:w-[900px] mt-10 max-w-5xl  items-center justify-center relative  overflow-hidden'>
                    {
                        nettoyage.map((imo)=>(
                            <SwiperSlide key={imo.id} className="sm:w-64 w-40 h-52 sm:h-64 flex flex-col rounded-md shadow-xl relative items-center justify-center group">
                                 <div className="flex absolute w-full h-full rounded-md  bg-linear-to-b  from-transparent from-40% to-95% to-black "/>
                                 <Image src={imo.pic} alt="nettoyage" width={400} height={400} className="object-cover rounded-md w-full h-full"/>

                                 <h1 className="absolute text-xl font-bold text-white flex text-center bottom-7 mx-4"> {imo.title} </h1>

                                  {/* <Link href={`/Services#${imo.tag}`} className="sm:flex hidden rounded-full shadow-xl ring-4 ring-white bg-[#f5f5f5] items-center justify-center absolute z-40 px-5 py-1 right-3 top-3">
                                   <FaArrowRight className='font-semibold text-xl -rotate-25'/>
                                 </Link >

                                 <Link href="/Services#netoy" className="flex sm:hidden rounded-full shadow-xl ring-4 ring-white bg-[#f5f5f5] items-center justify-center absolute z-40 px-5 py-1 right-3 top-3">
                                   <FaArrowRight className='font-semibold text-xl -rotate-25'/>
                                 </Link > */}

                                {/* <div className='items-center justify-center bg-black backdrop-blur-sm w-full z-20 rounded-md h-full hidden group-hover:flex absolute'>
                                  <div className='flex space-x-4 items-center justify-center px-6 py-3 text-lg font-sans font-semibold rounded-full bg-black text-white'>
                                    <Link href="/Services">Tout les services</Link> <FaArrowRight/>
                                  </div>
                                </div> */}

                                
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

             <div className="sm:flex  sm:space-x-20 space-x-10 -mt-24 relative overflow-hidden">
                <div className="sm:flex hidden  flex-col rounded-md shadow-lg relative items-center justify-center size-48 sm:w-72 sm:h-80 ring-white ring-10">
                    <div className="flex absolute w-full h-full rounded-md bg-black/40"/>
                    <Image src="/house.jpg" alt="nettoyage" width={400} height={400} className="object-cover justify-center rounded-md w-full h-full"/>

                    <div className="flex flex-col  items-center rounded-lg justify-center absolute z-20 text-white">

                        <h1 className="font-bold mt-11 sm:text-3xl text-2xl text-pretty ">Gestion</h1>
                         
                         <h1 className="font-bold  sm:text-3xl text-2xl text-pretty text-[#F39200]">Immobiliere</h1>

                         <div className='flex space-x-4 mt-20 items-center justify-center px-6 py-3 text-lg font-sans font-semibold rounded-full bg-black opacity-80 text-white'>
                                    <Link href="/Services#immo">Tout les services</Link> <FaArrowRight/>
                          </div>

                    </div>

                    
                </div>

                <p className="text-3xl font-bold sm:mt-0 mt-3 sm:hidden text-center ml-8 text-[#F39200]">
                  Services Immobiliers</p>

                <Swiper
                  modules={[Navigation , Pagination , Autoplay]}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={3}
                  // autoplay={{delay: 2000,
                  // disableOnInteraction: false
                  // }}
                //   pagination={{clickable: true}} 
                navigation
                  className='flex sm:w-[900px] mt-10 max-w-5xl items-center justify-center relative  overflow-hidden'>
                    {
                        immobilier.map((imo)=>(
                            <SwiperSlide key={imo.id} className="sm:w-64 w-40 h-52 sm:h-64 flex flex-col rounded-md shadow-xl relative items-center justify-center group">
                                 <div className="flex absolute w-full h-full rounded-md  bg-linear-to-b  from-transparent from-40% to-95% to-black "/>
                                 <Image src={imo.pic} alt="nettoyage" width={400} height={400} className="object-cover rounded-md w-full h-full"/>

                                 <h1 className="absolute text-xl font-bold text-white flex text-center bottom-7 mx-4"> {imo.title} </h1>

                                 <Link href={`/Services#${imo.tag}`} className="sm:flex hidden rounded-full shadow-xl ring-4 ring-white bg-[#f5f5f5] items-center justify-center absolute z-40 px-5 py-1 right-3 top-3">
                                   <FaArrowRight className='font-semibold text-xl -rotate-25'/>
                                 </Link >

                                 <Link href="/Services#immo" className="flex sm:hidden rounded-full shadow-xl ring-4 ring-white bg-[#f5f5f5] items-center justify-center absolute z-40 px-5 py-1 right-3 top-3">
                                   <FaArrowRight className='font-semibold text-xl -rotate-25'/>
                                 </Link >

                                {/* <div className='items-center justify-center bg-black/35 backdrop-blur-sm w-full rounded-md h-full hidden group-hover:flex absolute'>
                                  <div className='flex space-x-4 items-center justify-center px-6 py-3 text-lg font-sans font-semibold rounded-full bg-black text-white'>
                                    <Link href="/Services">Tout les services</Link> <FaArrowRight/>
                                  </div>
                                </div> */}
                                
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
           
           

             {/* <div 
               className="flex space-x-22 relative">
                <div className="flex flex-col group rounded-md shadow-lg relative items-center justify-center w-72 h-80 ring-white ring-10">
                    <div className="flex absolute w-full h-full rounded-md bg-black/40"/>
                    <Image src="/a.jpg" alt="nettoyage" width={400} height={400} className="object-cover rounded-md w-full h-full"/>

                    <div className="flex flex-col space-y-1 items-center justify-center absolute z-20 text-white">

                        <h1 className="font-bold text-3xl text-pretty ">Entretien</h1>
                         <i className="font-extrabold text-4xl text-[#F39200]">&</i>
                         <h1 className="font-bold text-3xl text-pretty ">Nettoyage</h1>

                    </div>

                    <div>

                    </div>
                </div>

                <Swiper
                  modules={[Navigation , Pagination , Autoplay]}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={3}
                  autoplay={{delay: 3000,
                  disableOnInteraction: false
                  }}
                //   pagination={{clickable: true}} 
                navigation
                  className='flex w-[900px] items-center justify-center  '>
                    {
                        nettoyage.map((net)=>(
                            <SwiperSlide key={net.id} className="w-64 h-64 flex flex-col rounded-md shadow-xl relative items-center justify-center  group">
                                 <div className="flex absolute w-full h-full rounded-md  bg-linear-to-b  from-transparent from-40% to-95% to-black "/>
                                 <Image src={net.pic} alt="nettoyage" width={400} height={400} className="object-cover rounded-md w-full h-full"/>

                                 <h1 className="absolute text-xl font-bold text-white flex text-center bottom-7 mx-4"> {net.title} </h1>

                                  <div className='items-center justify-center bg-black/35 backdrop-blur-sm w-full rounded-md h-full hidden group-hover:flex absolute'>
                                     <div className='flex space-x-4 items-center justify-center px-6 py-3 text-lg font-sans font-semibold rounded-full bg-black text-white'>
                                        <Link href="/Services">Tout les services</Link> <FaArrowRight/>
                                     </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div> */}
          </div>

          <div className='sm:hidden hidden flex-col space-y-8 w-full mt-12'>

                <h1 className='text-2xl font-semibold ml-4'> Nettoyage et Entretien </h1>
                 <Swiper

                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{delay: 3000,
                  disableOnInteraction: false
                  }}
                  // pagination={{clickable: true}} 
                navigation
                  className='flex w-full h-auto items-center justify-center '
                
                >
                      {
                           nettoyage.map((net)=>(
                            <SwiperSlide key={net.id}
                             className="h-80 w-full flex  flex-col rounded-md shadow-xl relative items-center justify-center group">
                                 <div className="flex absolute w-full h-full rounded-md  bg-linear-to-b  from-transparent from-40% to-95% to-black "/>
                                 <Image src={net.pic} alt="nettoyage" width={400} height={400} 
                                 className="object-cover rounded-md w-full h-full"/>

                                 <h1 className="absolute text-xl font-bold text-white flex  bottom-8 ml-4"> {net.title} </h1>

                                  <Link href={`/Services#${net.tag}`} className="sm:flex hidden rounded-full shadow-xl ring-4 ring-white bg-[#f5f5f5] items-center justify-center absolute z-40 px-5 py-1 right-3 top-3">
                                   <FaArrowRight className='font-semibold text-xl -rotate-25'/>
                                 </Link >

                                 <Link href="/Services#netoy" className="flex sm:hidden rounded-full shadow-xl ring-4 ring-white bg-[#f5f5f5] items-center justify-center absolute z-40 px-5 py-1 right-3 top-3">
                                   <FaArrowRight className='font-semibold text-xl -rotate-25'/>
                                 </Link > 
                            </SwiperSlide>
                        ))
                      }

                </Swiper>
          </div>

          <div className='sm:hidden hidden flex-col space-y-8 w-full mt-6 pt-10 pb-4 bg-[#FCFCF7]'>

                <h1 className='text-2xl font-semibold ml-4'> Gestion Immobilière </h1>
                 <Swiper

                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{delay: 3000,
                  disableOnInteraction: false
                  }}
                  // pagination={{clickable: true}} 
                navigation
                  className='flex w-full h-auto items-center justify-center '
                
                >
                      {
                           immobilier.map((net)=>(
                            <SwiperSlide key={net.id}
                             className="h-80 w-full flex  flex-col rounded-md shadow-xl relative items-center justify-center group">
                                 <div className="flex absolute w-full h-full rounded-md  bg-linear-to-b  from-transparent from-40% to-95% to-black "/>
                                 <Image src={net.pic} alt="nettoyage" width={400} height={400} 
                                 className="object-cover rounded-md w-full h-full"/>

                                 <h1 className="absolute text-xl font-bold text-white flex  bottom-8 ml-4"> {net.title} </h1>

                                  <Link href={`/Services#${net.tag}`} className="flex sm:hidden rounded-full shadow-xl ring-4 ring-white bg-[#f5f5f5] items-center justify-center absolute z-40 px-5 py-1 right-3 top-3">
                                   <FaArrowRight className='font-semibold text-xl -rotate-25'/>
                                 </Link >

                                 <Link href="/Services#immo" className="sm:flex hidden rounded-full shadow-xl ring-4 ring-white bg-[#f5f5f5] items-center justify-center absolute z-40 px-5 py-1 right-3 top-3">
                                   <FaArrowRight className='font-semibold text-xl -rotate-25'/>
                                 </Link > 
                            </SwiperSlide>
                        ))
                      }

                </Swiper>
          </div>
            
            <div className='flex flex-col sm:hidden space-y-10 mt-10 px-4'>

                  <div onClick={()=>(router.push("./Services/Entretien"))} className='nettoy cursor-pointer flex flex-col w-full h-72 relative ring-6 ring-white rounded-lg'>
                      
                      <div className="absolute w-full h-full rounded-lg bg-linear-to-r from-blue-500  via-transparent  to-transparent backdrop-blur-[1px]"/>
                      <Image src="/a.jpg" alt="service de nettoyage et entretien" width={300} height={300}
                       className='w-full h-full object-cover rounded-lg'/>

                      <div className='absolute space-y-10  z-40 bottom-14 left-10 text-white items-center justify-start'>

                        {/* <FaUser className=" text-2xl font-medium"/> */}

                        <h1 className="text-3xl font-bold ">Nettoyage et Entretient</h1>

                        <Link href="/Services/Entretien" className=" hover:bg-blue-400 ml-12  ring-2  rounded-full bg-white/40 backdrop-blur-md px-7 py-3 text-center text-md font-semibold">
                            En Savoir Plus
                        </Link>
                      </div>

                  </div>

                   <div onClick={()=>(router.push("./Services/Immobilier"))} className='nettoy cursor-pointer flex flex-col w-full h-72 relative ring-6 ring-white rounded-lg'>
                      
                      <div className="absolute w-full h-full rounded-lg bg-linear-to-r from-[#F39200]  via-transparent  to-transparent backdrop-blur-[1px]"/>
                      <Image src="/clef.jpg" alt="service de nettoyage et entretien" width={300} height={300}
                       className='w-full h-full object-cover rounded-lg '/>

                      <div className='absolute   z-40 bottom-14 left-10 text-white items-center justify-center space-y-5 text-center'>

                
                           <FaHome className="flex mx-auto items-center text-center p-3 ring-4 ring-white rounded-full text-8xl font-medium"/>

                        <h1 className="text-3xl font-bold ">Gestion Immobilière</h1>

                        {/* <Link href="/Services/Immobilier" className=" hover:bg-blue-400 ml-12  ring-2  rounded-full bg-white/40 backdrop-blur-md px-7 py-3 text-center text-md font-semibold">
                            En Savoir Plus
                        </Link> */}

                        <Link href="/Services/Immobilier"  className='mx-auto flex items-center justify-center  text-xl font-semibold text-[#F39200] underline underline-offset-4'>
                                Clickez Ici 
                        </Link>
                      </div>

                  </div>
            </div>

        </div>
    );
};

export default Services;