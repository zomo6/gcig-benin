import Link from "next/link"

function Hero() {

    return ( 
        <div className="w-full h-[90vh] Hero sm:flex text-center  flex flex-col   text-white bg-black relative mb-10">

            <div className="absolute w-full h-full bg-linear-to-r from-black from-20%   via-black/70 to-transparent z-10 "/>

            <div className="flex  flex-col text-start mt-22 ml-20 z-40">

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

            <div>

            </div>
        </div>
    )
}

export default Hero
