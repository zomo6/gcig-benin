import Image from 'next/image';
import Link from "next/link"

function First() {

    return (
         <div className="flex items-center w-full  text-white justify-center py-5 px-5 relative">

            <div className="absolute w-full h-full bg-linear-to-r from-black via-black/50 to-white  "/>

            {/* <div className="absolute h-full w-[60%] left-0 bg-black cliper"/> */}

            <div className="flex  flex-col text-start mt-7   w-[55%] z-40 px-4 ">

                 <div className="text-5xl flex space-x-2 font-bold mb-6"> 
                      <h1 className="orange">GCIG BENIN</h1>  <p className="bleu italic">Multi Services</p>
                </div>

                <h1 className="text-5xl font-bold"> 
                    Un seul prestataire de confiance  pour tous vos besoins d'entretien  <br/> et immobiliers
                </h1>

                <p className="text-lg font-medium opacity-70 italic flex mt-10">
                    Nous prenons soin de vos espaces comme s’ils étaient les nôtres. <br/>
                     Nettoyage, entretien et gestion de biens : un service complet, fiable et sur mesure. <br/>
                    {/* Nettoyage, entretien et gestion de biens : un service complet, fiable et sur mesure. <br/> */}
                    
                </p>

                <div className="flex space-x-8 font-semibold mt-16 text-xl">
                    <Link href="/Services " className="px-8 py-3 rounded-full text-center bg-linear-to-r from-[#F39200] to-[#304C9C] transition-all ease-in hover:text-black"> Nos Services </Link>
                      <Link href="/Contact" className="px-8 py-3 rounded-full text-center shadow ring ring-white text-gray-300  transition-all ease-in hover:bg-white  hover:text-black">Contactez-Nous </Link>
                </div>
            </div>

                <div className="grid grid-cols-1 gap-5  z-40">
                    <div className="w-[450px] h-64 ml-28 rounded-md shadow-lg"> <Image src="/h.jpg" alt="pic" width={400} height={400} className="object-cover w-full h-full rounded-md shadow-lg"/> </div>
                    <div className="w-[450px] h-64 rounded-md shadow-lg"> <Image src="/bureau.jpg" alt="pic" width={400} height={400} className="object-cover w-full h-full rounded-md shadow-lg"/> </div>
                    {/* <div className="w-64 h-64"> <Image src="/g.jpg" alt="pic" width={400} height={400} className="object-cover w-full h-full"/> </div> */}
                </div>
            </div>
    )
}

export default First