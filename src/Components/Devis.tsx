import Link from "next/link";


function Devis() {
  return (
    <div className="sm:flex flex-col  items-center justify-center w-full py-16 px-7  sm:pt-24 sm:pb-24 sm:px-40 bg-gray-100  shadow-md  relative ">

       {/* <div className="absolute sm:flex hidden w-full h-full left-0 bg-gradient-to-r from-black via-black/80 to-transparent opacity-30 backdrop-blur-3xl" /> */}
        
        <h1 className=" sm:text-3xl font-semibold text-center z-50 text-2xl ">
            Bénéficiez d'une estimation gratuite et sans engagement pour vos besoins en nettoyage,
             entretien ou gestion immobilière.  
        </h1>

        <p className="text-lg my-6 sm:font-medium sm:mt-12 sm:text-xl  sm:mx-32 text-center z-50"> Notre équipe experte s'engage à vous proposer une solution sur-mesure, économe et adaptée à vos spécificités.</p>

        <Link href="/Contact" className="bg-[#F39200] mt-12  px-5 py-3 z-50 sm:mt-14 text-lg sm:text-xl ml-24 mb-5 text-center text-white sm:px-7 sm:py-3 font-medium rounded-lg hover:bg-blue-600 transition duration-300">
          Obtenir un devis
        </Link>
    </div>
  )
};

export default Devis;