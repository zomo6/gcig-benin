import Image from 'next/image';
import {  FaUser } from 'react-icons/fa';

function Galery() {

    return (
        <div className="flex flex-col space-y-16   sm:px-20 bg-[#D9E0E8] mb-10 py-5 sm:py-10">
            <div className="flex flex-col items-center px-10 sm:px-0 space-y-2 justify-center text-center">
                <h1 className="text-3xl font-bold text-pretty">Nous opérons dans plusieurs domaines </h1>
                <h1 className="text-3xl font-bold text-pretty">à l'échelle nationale</h1>
            </div>

            <div className="hidden sm:grid sm:grid-cols-4 sm:gap-6 gap-4">

                <div className=" col-span-2 rounded-md shadow-2xl  relative"> 
                     <div className="absolute w-full h-full bg-linear-to-br from-transparent  to-black/70 rounded-md "/>
                     <h1 className="text-white font-extrabold sm:text-3xl text-2xl font-sans absolute sm:bottom-18 bottom-8 right-16 sm:left-5 left-7">Bureaux et espaces commerciaux</h1>
                    <Image src="/a.jpg" alt='pic' width={400} height={400} className='w-full h-full object-cover rounded-md'/> 

                    
                </div>

                <div className="  rounded-md shadow-xl bg-green-400 text-center relative"> 
                     <div className="flex absolute w-full h-full rounded-md bg-black/40"/>
                    {/* <div className="absolute w-full h-full bg-radial from-black/70 from-40% to-transparent rounded-md "/> */}
                    <h1 className="text-white sm:block  font-extrabold sm:text-3xl font-sans absolute bottom-4 left-1  sm:bottom-18  sm:left-2 ">Santé et Hygiène</h1>
                    <Image src="/e.jpg" alt='pic' width={400} height={400} className='w-full h-full object-cover rounded-md'/> 
                </div>
                
                <div className=" row-span-3 rounded-md shadow-xl relative"> 
                    <div className="absolute sm:hidden w-full h-full bg-linear-to-br from-transparent  to-black/70 rounded-md "/>
                     <div className="sm:flex hidden absolute w-full h-full rounded-md bg-black/40"/>
                     <h1 className="text-white sm:hidden font-extrabold sm:text-3xl font-sans absolute bottom-8 flex left-5"> Immobiliers et Construction</h1>
                    <Image src="/agt.jpg" alt='pic' width={400} height={400} className='w-full h-full object-cover rounded-md'/> 
                </div>
                <div className="  rounded-md shadow-xl relative"> 
                     <div className="flex absolute w-full h-full rounded-md bg-black/40"/>
                     <h1 className="text-white hidden sm:block font-extrabold sm:text-3xl font-sans absolute bottom-8 flex left-5"> Immobilier et Construction</h1>
                    <Image src="/h.jpg" alt='pic' width={400} height={400} className='w-full h-full object-cover rounded-md'/> 
                </div>
                <div className=" col-span-2 rounded-md shadow-xl relative"> 
                    <div className="absolute w-full h-full bg-linear-to-br from-transparent  to-black/70 rounded-md "/>
                    <h1 className="text-white font-extrabold sm:text-3xl text-2xl font-sans absolute sm:bottom-18 bottom-8 right-6">Secteur Industriel</h1>
                    <Image src="/Hero.jpeg" alt='pic' width={400} height={400} className='w-full h-full object-cover rounded-md'/> 
                </div>

            </div>

            <div className="grid grid-cols-1 gap-6 sm:hidden px-3">

                <div className="w-full h-52 rounded-lg flex ring-4 ring-white items-center">
                    <div className="w-[40%] justify-start pl-4 pt-8  h-full bg-blue-400 rounded-l-lg flex flex-col space-y-4 items-center">
                        {/* <FaUser className="text-xl font-sans font-bold "/> */}
                        <h1 className="text-lg text-white font-semibold mt-8">Bureaux et Espaces Commerciaux</h1>
                    </div>

                    <Image src="/a.jpg" alt="secteur " width={400} height={400} className="object-cover rounded-lg w-[60%] h-full"/>
                </div>

                <div className="w-full h-52 rounded-lg flex ring-4 ring-white items-center">
                    <div className="w-[40%] justify-start pl-4 pt-8  h-full bg-blue-400 rounded-l-lg flex flex-col space-y-4 items-center">
                        {/* <FaUser className="text-xl font-sans font-bold "/> */}
                        <h1 className="text-lg text-white font-semibold mt-10 flex ml-2">Santé et Hygiène</h1>
                    </div>

                    <Image src="/k.jpg" alt="secteur " width={400} height={400} className="object-cover rounded-lg w-[60%] h-full"/>
                </div>

                <div className="w-full h-52 rounded-lg flex ring-4 ring-white items-center">

                     <Image src="/house.jpg" alt="secteur " width={400} height={400} className="object-cover rounded-l-lg w-[60%] h-full"/>

                    <div className="w-[40%] justify-start pl-4 pt-8  h-full bg-blue-400 rounded-r-lg flex flex-col space-y-4 items-center">
                        {/* <FaUser className="text-xl font-sans font-bold "/> */}
                        <h1 className="text-lg text-white font-semibold mt-12 ">Immobilier et Construction</h1>
                    </div>

                   
                </div>

                    <div className="w-full h-52 rounded-lg flex ring-4 ring-white items-center">

                     <Image src="/industriel.jpg" alt="secteur " width={400} height={400} 
                     className="object-cover rounded-l-lg w-[60%] h-full"/>

                    <div className="w-[40%] justify-start pl-4 pt-8  h-full bg-blue-400 rounded-r-lg flex flex-col space-y-4 items-center">
                        {/* <FaUser className="text-xl font-sans font-bold "/> */}
                        <h1 className="text-lg text-white font-semibold mt-10 ">Nettoyage Industriel</h1>
                    </div>

                   
                </div>

            </div>
        </div>
    )
}

export default Galery
