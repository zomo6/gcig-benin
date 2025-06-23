import { testimony } from '@/app/constant'
import Image from 'next/image'
import React from 'react'

function Testimony() {
    return (
        <div className="flex flex-col justify-center items-center w-full  space-y-22 sm:px-6 px-10 bg-black text-white my-10 sm:py-0 py-10">

            <div className='mt-12  text-center'>
                <h1 className="text-2xl font-bold text-pretty ">Nous avons déja fait nos preuves auprès de nombreux clients</h1>
            </div>

            <div className="absolute blur-2xl bg-blue-400 rounded-full h-96 w-[400px] bg-blend-multiply mt-20  opacity-40"/>

           <div className='grid sm:grid-cols-4 sm:gap-4 gap-6 z-10'>
                {
                    testimony.map((testy)=>(
                        <div key={testy.id} className='flex flex-col rounded-lg shadow-xl sm:p-3 p-5 space-y-7 z-20 border border-white/10'>
                        <div className='flex justify-between items-center'>
                           <div className="w-14 h-14"> <Image src={testy.pic} alt={testy.author} width={150} height={150}  className='object-cover rounded-full w-full h-full  ring-4 ring-white'/> </div>

                            <h1 className='text-xl font-bold '> {testy.author} </h1>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <p className='text-gray-400 italic text-lg font-serif font-medium'> {testy.avis.slice(0,285)}... </p>

                            <p className='text-md font-normal'> {testy.Services} </p>
                        </div>
                        </div>
                    ))
                }
           </div>
           
        </div>
    )
}

export default Testimony


//  <div className='flex'>
//                 {
//                     testimony.map((testy)=>(
//                         <div className='flex flex-col rounded-lg shadow-lg space-y-2'>
//                             <div className='flex space-x-2 items-center'>
//                                 <Image src={testy.pic} alt={testy.author} width={100} height={100} className='object-cover '/>

//                                 <h1> {testy.author} </h1>
//                             </div>
//                                 {/* <Image src="" alt='crochet' className='absolute'/> */}
//                             <div>
//                                 {testy.avis}
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>


            //  <div className="droit flex flex-col space-y-3">
            //     <div className="one flex space-x-4">
            //         <div className='testy rounded-md shadow-md flex flex-col'>
            //             <div className="flex items-center justify-between"> <Image src="/a.jpg" alt="pic" width={40} height={40} className="object-cover"/>  <h1>John BELAMY</h1> </div>
            //         </div>

            //         <div>
            //             <i>
            //                 Depuis 2 ans, cette équipe s'occupe de mes 4 appartements à Cotonou. 
            //                 Leur service de gestion immobilière est remarquable : ils gèrent les locataires, collectent les loyers sans retard et maintiennent mes biens en parfait état.
            //                  Le service de nettoyage entre les locations est impeccable - mes nouveaux locataires sont toujours impressionnés par la propreté. 
            //                  L'entretien préventif qu'ils effectuent m'a évité plusieurs réparations coûteuses. 
            //                 Je recommande vivement leurs services complets !
            //             </i>

            //             <p>Gestion immobilière, nettoyage post-location, entretien préventif</p>
            //         </div>
            //     </div>
            // </div>