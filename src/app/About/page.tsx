import Image from 'next/image';
import { FaBell } from 'react-icons/fa';
import { teams , vals} from '../constant';
import ServiceCTA from '@/Components/ServiceCTA';

function Page() {
    return (
        <div className="overflow-hidden bg-linear-to-r from-[#F9E7FE] to-[#DAFCFC]">
                        <div className='sm:flex  w-full pb-3 mb-32 sm:mb-0 pt-14  items-center  bg-[#f5f5f5] sm:px-14 px-10'>
                           <div className='sm:trapeze relative rounded-lg shadow-xl h-full sm:ml-10'>

                            <h1 className="px-10 py-4 rounded-md shadow-xl bg-[#F39200] font-semibold text-white text-xl trapeze absolute -top-7 ml-5">About Us</h1>
                               <Image src="/g.jpg" alt="pic" width={400} height={400} className="object-cover w-full h-full rounded-lg shadow-xl" />
                           </div>
           
                            {/* <div className='absolute w-64 h-72 left-120 mt-40'>
                               <Image src="/room.jpg" alt="pic" width={400} height={400} className="object-cover w-full h-full rounded-xl" />
                           </div> */}
           
                           <div className='flex flex-col sm:w-[75%] sm:h-[500px]'>
                             <div className="flex flex-col space-y-6 items-center mt-12  sm:ml-32 sm:mt-10">
                               <h1 className='sm:text-2xl text-xl font-semibold'>
                                   GCIG BENIN est une entreprise béninoise spécialisée dans les services d'entretien, de nettoyage et de gestion immobilière. 
                                   Fondée avec la vision de devenir le partenaire de référence des particuliers et entreprises, nous combinons expertise technique, 
                                   innovation et proximité client pour offrir des solutions complètes et durables.  
                               </h1>
           
                               <p className='text-lg text-gray-500 italic'>Née de la passion de nos fondateurs pour l'excellence opérationnelle, 
                                GCIG BENIN s'est rapidement imposée comme un acteur incontournable du secteur.
                                 Depuis nos débuts, nous avons accompagné plus de 200 clients dans l'entretien de leurs espaces et la gestion de leur patrimoine immobilier,
                                 construisant notre réputation sur la confiance et les résultats.</p> 
                             </div>
                           </div>
                       </div>
{/* 
            <div className=" flex ">
                <div className="mission">

                </div>

                <div className="vision">

                </div>
            </div> */}

            <div className="flex sm:mt-8 mt-5 items-center w-full bg-black text-white justify-center sm:py-5 pb-3 sm:space-x-20">

                <div className="flex flex-col mt-18 font-serif  sm:w-[45%] w-[80%] relative sm:h-[500px] sm:pr-5 sm:pl-6">

                     <div className="sm:w-[500px] sm:hidden sm:h-72 rounded-md shadow-lg absolute -top-44 -ml-20">
                         <Image src="/vert.jpg" alt="pic" width={400} height={400}
                          className="object-cover w-full h-full rounded-md shadow-lg"/>
                     </div>

                                <h2 className="sm:mb-14 mb-8 text-base">"Simplifier la vie de nos clients en prenant soin de leurs espaces et en optimisant la gestion de leur patrimoine immobilier."</h2>
                                <h1 className='sm:text-xl leading-[32px] font-semibold z-20'>
                                   Notre mission est de simplifier la vie de nos clients en prenant soin de leurs espaces et en optimisant la gestion de leur patrimoine immobilier. <br/>
                                    Chez GCIG BENIN, nous nous engageons quotidiennement à délivrer des services d'excellence qui dépassent les attentes,
                                     libérant ainsi nos clients des contraintes d'entretien et de gestion pour qu'ils puissent se concentrer sur leurs priorités essentielles. <br/>
                                      Nous apportons des solutions innovantes et durables tout en maintenant des relations de confiance à long terme,
                                    contribuant activement au développement du secteur immobilier béninois.
                                   
                               </h1>
{/*            
                     <div className="sm:w-[500px] sm:h-72 sm:hidden rounded-md shadow-lg absolute -bottom-10 -right-15 brightness-70">
                         <Image src="/vert.jpg" alt="pic" width={400} height={400}
                          className="object-cover w-full h-full rounded-md shadow-lg"/>
                     </div> */}
                               
                </div>

                <div className="sm:grid hidden grid-cols-1 gap-7">
                    <div className="w-[500px] h-72 ml-28 rounded-md shadow-lg"> <Image src="/e.jpg" alt="pic" width={400} height={400} className="object-cover w-full h-full rounded-md shadow-lg"/> </div>
                    <div className="w-[500px] h-72 rounded-md shadow-lg hidden sm:flex"> <Image src="/vert.jpg" alt="pic" width={400} height={400} className="object-cover w-full h-full rounded-md shadow-lg"/> </div>
                    {/* <div className="w-64 h-64"> <Image src="/g.jpg" alt="pic" width={400} height={400} className="object-cover w-full h-full"/> </div> */}
                </div>
            </div>

            <div className="Engagement">
                <h1></h1>

                <div className='grid sm:grid-cols-3 sm:gap-7 gap-10 px-14 py-14 text-center mt-10 mb-3'>
                    {
                        vals.map((val)=>(
                            <div key={val.id} className="flex flex-col sm:space-y-8 space-y-6 items-center justify-center">

                                <FaBell className="text-3xl font-bold "/>

                                <div className="flex flex-col font-serif space-y-5">
                                    <h2 className='sm:text-2xl text-xl font-bold'> {val.title} </h2>
                                    <p className='sm:text-lg text-lg font-medium text-black/60'> {val.desc} </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="équipe w-full px-14 py-16 items-center justify-center sm:space-y-16 space-y-14 bg-gray-300/10">
                <h1 className='sm:text-2xl text-xl font-serif font-bold text-center'>Une équipe compétente, disponible et prèt à vous rendre service </h1>

                <div className="grid sm:grid-cols-4 grid-cols-1 gap-6 px-2">
                    {
                        teams.map((team)=>(
                            <div key={team.id} className='rounded-md sm:h-80 h-60 shadow-xl relative'>
                                <div className="w-full h-full absolute ">
                                    <Image src={team.pic} alt="pic" width={400} height={400} className="object-cover w-full h-full rounded-md"/>
                                </div>

                                <div className="w-full   space-y-2 text-center sm:py-6 py-3 bg-black/40  text-white sm:top-60 top-40 rounded-b-md relative z-20">
                                    <h2 className="font-bold sm:text-xl text-lg font-serif"> {team.name} </h2>

                                    <p className=" sm:text-lg text-sm text-pretty font-medium italic"> {team.poste} </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <ServiceCTA/>
        </div>
    )
}

export default Page
