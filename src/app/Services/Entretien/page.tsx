'use client';

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
          
            <div className="flex flex-col items-center justify-center space-y-9 sm:pt-20 sm:pb-18 py-5  px-10 sm:px-24 text-pretty relative  bg-blend-mutiply serv ">

               <div className="absolute blur-3xl bg-[#F39200] rounded-full h-[440px] w-[440px] opacity-20  -mt-40 -ml-6"/>
            
                <h1 className='flex flex-col space-y-5 items-center text-3xl font-bold font-serif mt-10 z-40 text-white'> 
                  <p className="sm:text-7xl text-3xl text-[#F39200] ">GCIG BENIN 
                   </p> </h1>

                <p className='sm:text-xl text-xl font-medium   italic z-50 text-white'>

                    Nous proposons des services de nettoyage haut de gamme pour les espaces industriels,
                     bureaux et commerces, assurant un environnement hygiénique et accueillant.  
                     {/* Nos équipes formées interviennent avec du matériel performant et des produits
                      adaptés pour un résultat irréprochable, sans perturber vos activités. */}
                </p>

                <p className='sm:text-xl text-xl font-medium   italic z-50 text-white'>
                    Nous complétons notre offre par des prestations d’entretien extérieur 
                    (jardinage, voirie) et un service de nettoyage automobile (intérieur/extérieur)
                    pour une propreté 360°.
                </p>

                 <div className="absolute blur-2xl bg-blue-500 rounded-full h-[440px] w-[440px] opacity-20  bottom-4 ml-64 mt-28"/>
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

            <Nettoyage/>

            {/* <ServiceTrick/> */}

            <ServiceCTA/>

        </div>
    )
}

export default Page
