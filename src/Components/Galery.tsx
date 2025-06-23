import Image from 'next/image';

function Galery() {

    return (
        <div className="flex flex-col space-y-16 px-10  sm:px-20 bg-[#D9E0E8] mb-10 py-5 sm:py-10">
            <div className="flex flex-col items-center space-y-2 justify-center text-center">
                <h1 className="text-3xl font-bold text-pretty">Nous opérons dans plusieurs domaines </h1>
                <h1 className="text-3xl font-bold text-pretty">à l'échelle nationale</h1>
            </div>

            <div className="grid sm:grid-cols-4 sm:gap-6 gap-4">

                <div className=" col-span-2 rounded-md shadow-2xl  relative"> 
                     <div className="absolute w-full h-full bg-linear-to-br from-transparent  to-black/70 rounded-md "/>
                     <h1 className="text-white font-extrabold sm:text-3xl text-2xl font-sans absolute sm:bottom-18 bottom-8 right-16 sm:left-5 left-7">Bureaux et espaces commerciaux</h1>
                    <Image src="/a.jpg" alt='pic' width={400} height={400} className='w-full h-full object-cover rounded-md'/> 

                    
                </div>
                <div className="  rounded-md shadow-xl bg-green-400 text-center relative"> 
                     <div className="flex absolute w-full h-full rounded-md bg-black/40"/>
                    {/* <div className="absolute w-full h-full bg-radial from-black/70 from-40% to-transparent rounded-md "/> */}
                    <h1 className="text-white sm:block hidden font-extrabold sm:text-3xl font-sans absolute bottom-18 flex ">Secteur de la santé</h1>
                    <Image src="/e.jpg" alt='pic' width={400} height={400} className='w-full h-full object-cover rounded-md'/> 
                </div>
                <div className=" row-span-3 rounded-md shadow-xl relative"> 
                    <div className="absolute sm:hidden w-full h-full bg-linear-to-br from-transparent  to-black/70 rounded-md "/>
                     <div className="sm:flex hidden absolute w-full h-full rounded-md bg-black/40"/>
                     <h1 className="text-white sm:hidden font-extrabold sm:text-3xl font-sans absolute bottom-8 flex left-5">Secteur Immobilier et Construction</h1>
                    <Image src="/agt.jpg" alt='pic' width={400} height={400} className='w-full h-full object-cover rounded-md'/> 
                </div>
                <div className="  rounded-md shadow-xl relative"> 
                     <div className="flex absolute w-full h-full rounded-md bg-black/40"/>
                     <h1 className="text-white hidden sm:block font-extrabold sm:text-3xl font-sans absolute bottom-8 flex left-5">Secteur Immobilier et Construction</h1>
                    <Image src="/h.jpg" alt='pic' width={400} height={400} className='w-full h-full object-cover rounded-md'/> 
                </div>
                <div className=" col-span-2 rounded-md shadow-xl relative"> 
                    <div className="absolute w-full h-full bg-linear-to-br from-transparent  to-black/70 rounded-md "/>
                    <h1 className="text-white font-extrabold sm:text-3xl text-2xl font-sans absolute sm:bottom-18 bottom-8 right-6">Secteur Industriel</h1>
                    <Image src="/Hero.jpeg" alt='pic' width={400} height={400} className='w-full h-full object-cover rounded-md'/> 
                </div>

            </div>
        </div>
    )
}

export default Galery
