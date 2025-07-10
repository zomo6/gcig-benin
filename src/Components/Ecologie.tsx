"use client"

import {FaCheckCircle , FaLeaf , FaShieldAlt} from 'react-icons/fa';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Navigation , Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


function Ecologie() {
  return (
    <div className="sm:flex w-full h-auto sm:space-x-26  relative items-center sm:bg-cover justify-between sm:bg-black/10 mt-5 sm:pl-16 sm:pr-5 py-20 sm:bg-[url('/bgTwo.jpg')] bg-black/10 ">  

        <div className="absolute sm:flex hidden w-full h-full left-0 bg-gradient-to-r from-black via-white/70 to-transparent opacity-30 backdrop-blur-3xl" />  

        <div className="sm:flex flex-col hidden space-y-9  w-[40%] z-50">
            <h1 className="flex text-2xl font-bold">Des produits professionnels respectueux de votre santé et de l'environnement</h1>

            {/* Nos produits de nettoyage : efficacité , sécurité , écologie */}

            <p className='flex font-bold text-3xl '>
                Nous utilisons des produits de qualité professionnelle, sélectionnés 
                pour leur efficacité, leur sécurité et leurs respect de l'environnement.
            </p>
        </div>

        <div className=" w-[50%] z-50 sm:flex hidden">
            <ul className="flex flex-col space-y-14 ">

                <li className='flex space-x-4'>
                    <p className="rounded-lg shadow-lg bg-white w-22 h-14 justify-center items-center relative">
                        <FaCheckCircle className='text-blue-700 text-4xl text-center justify-center ml-2.5 mt-2.5'/>
                    </p>

                    <div className="flex flex-col space-y-4">
                        <h1 className="text-2xl font-bold">Efficacité :</h1>

                        <p className="flex text-lg font-medium  pr-20">
                             Nos produits sont conçus pour offrir une 
                             performance optimale, garantissant un nettoyage en profondeur.
                        </p>
                    </div>
                </li>

                 <li className='flex space-x-4'>
                    <p className="rounded-lg shadow-lg bg-white w-24 h-14 justify-center items-center relative">
                        <FaShieldAlt className='text-gray-600 text-4xl text-center justify-center ml-2.5 mt-2.5'/>
                    </p>

                    <div className="flex flex-col space-y-4">
                        <h1 className="text-2xl font-bold">Sécurité :</h1>

                        <p className="flex text-lg font-medium  pr-24">
                              Nous privilégions des formules non toxiques 
                              et sans danger pour la santé de nos clients et de nos employés.
                        </p>
                    </div>
                </li>

                 <li className='flex space-x-4'>
                    <p className="rounded-lg shadow-lg bg-white w-24 h-14 justify-center items-center relative">
                        <FaLeaf className='text-green-500 text-4xl text-center justify-center ml-2.5 mt-2.5'/>
                    </p>

                    <div className="flex flex-col space-y-4">
                        <h1 className="text-2xl font-bold text-green-500">Écologie :</h1>

                        <p className="flex text-lg font-medium  pr-20">
                             Nos produits sont biodégradables et respectueux 
                             de l'environnement, contribuant à la préservation de notre planète.
                        </p>
                    </div>
                </li>

               
            </ul>
        </div>


            <div className="absolute sm:hidden right-0 h-full w-[40%] bg-white top-0"/>

        <div className="mobileUx relative sm:hidden space-y-18">


        <div className=" flex flex-col  space-y-7  pl-10 pr-10 z-50">
            <h1 className="flex text-2xl font-bold">
                Des produits professionnels respectueux de votre santé et de l'environnement</h1>

            {/* Nos produits de nettoyage : efficacité , sécurité , écologie */}

            <p className='flex font-medium text-gray-500 text-xl '>
                Nous utilisons des produits de qualité professionnelle, sélectionnés 
                pour leur efficacité, leur sécurité et leurs respect de l'environnement.
            </p>
        </div>

            {/* <div className="absolute right-2 h-full w-[40%] bg-white"/> */}


             <div className='sm:hidden flex w-full items-center pl-10 pr-7'>
                
             <Swiper

                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{delay: 3000,
                  disableOnInteraction: false
                  }}
                  pagination={{clickable: true}} 
                // navigation
                  className='flex w-full  items-center '
                
                >
                      
                        <SwiperSlide >

                           <div  className='flex space-x-5  justify-between  text-white w-full h-auto'>

                                    <div className="rounded-md flex shadow-xl bg-white w-36 h-16 ">
                                        <FaCheckCircle className='text-blue-700 text-3xl text-center mt-4 ml-1.5 '/>
                                    </div>

                                    <div className="flex flex-col space-y-4">
                                        <h1 className="text-2xl font-bold text-blue-700">Efficacité :</h1>

                                        <p className="flex text-lg font-medium  text-gray-700">
                                            Nos produits sont conçus pour offrir une 
                                            performance optimale, garantissant un nettoyage en profondeur.
                                        </p>
                                    </div>
                            </div>
                
                        </SwiperSlide>


                        <SwiperSlide >

                           <div  className='flex space-x-5  justify-between  text-white w-full h-auto'>

                                    <div className="rounded-md flex shadow-xl bg-white w-36 h-16 ">
                                        <FaShieldAlt className='text-gray-600 text-3xl text-center mt-4 ml-3 '/>
                                    </div>

                                    <div className="flex flex-col space-y-4">
                                        <h1 className="text-2xl font-bold text-gray-600">Sécurité :</h1>

                                        <p className="flex text-lg font-medium  text-gray-700">
                                            Nous privilégions des formules non toxiques 
                                            et sans danger pour la santé de nos clients et de nos employés.
                                        </p>
                                    </div>
                            </div>
                
                        </SwiperSlide>


                        <SwiperSlide >

                           <div  className='flex space-x-5  justify-between  text-white w-full h-auto'>

                                    <div className="rounded-md flex shadow-xl bg-white w-36 h-16 ">
                                        <FaLeaf className='text-green-500 text-3xl text-center mt-4 ml-3 '/>
                                    </div>

                                    <div className="flex flex-col space-y-4">
                                        <h1 className="text-2xl font-bold text-green-500">Écologie :</h1>

                                        <p className="flex text-lg font-medium  text-gray-700">
                                            Nos produits sont biodégradables et respectueux 
                                            de l'environnement, contribuant à la préservation de notre planète.
                                        </p>
                                    </div>
                            </div>
                
                        </SwiperSlide>
                

                </Swiper>
            </div>
        </div>

    </div>
  )
};

export default Ecologie;