import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="flex  sm:px-20 px-10 py-16 w-full sm:h-[500px] justify-between bg-[#f4f1f8] mb-10 backdrop-blur-lg overflow-hidden">

        <div className="flex flex-col sm:mt-7  h-full sm:w-[45%] w-full ">
            <h1 className="font-semibold sm:text-3xl text-2xl  flex">Le partenaire de confiance qu'il vous faut !!  </h1>

            <p className="font-medium text-gray-500 sm:text-xl my-10 text-lg flex sm:mt-7 sm:leading-[30px]">

                
                 {/* Depuis notre création, GCIG BENIN  s'impose comme le leader
                    incontournable du nettoyage professionnel et des services immobiliers au Bénin. 
                     Notre expertise reconnue et notre approche sur-mesure font de nous le choix 
                   privilégié des entreprises et particuliers exigeants. */}

                   {/* Découvrez notre entreprise, votre partenaire de confiance pour tous 
                   vos besoins en nettoyage et entretien, ainsi qu'en gestion de biens immobiliers. 
                   Nous nous engageons à offrir des services de qualité supérieure,
                    adaptés à vos exigences spécifiques. Que ce soit pour maintenir 
                    la propreté de vos espaces ou pour optimiser la gestion de vos propriétés,
                     notre équipe expérimentée met tout en œuvre pour garantir votre satisfaction. 
                     Faites le choix de l'excellence et laissez-nous prendre soin de vos biens,
                    afin que vous puissiez vous concentrer sur ce qui compte vraiment. */}

                    Bienvenue chez nous ! Nous sommes spécialisés dans le nettoyage et l'entretien,
                     ainsi que dans la gestion de biens immobiliers. Notre équipe dédiée s'assure que
                      vos espaces restent impeccables et que vos propriétés sont gérées avec soin.
                     Faites confiance à notre expertise pour un service de qualité qui répond à vos besoins.
                
                </p>

            <Link href="/About"
             className="px-8 py-4 sm:mt-1 sm:mr-60 flex rounded-full text-center items-center justify-center sm:text-lg text-lg font-semibold shadow-xl border border-white sm:items-start transition-all ease-in hover:text-black">
                 En savoir plus ! 
                 </Link>
                 
        </div>

        <div className="sm:flex hidden gap-10 relative ">


             <div className="second flex flex-col space-y-3 -mt-18 ">
                <div className="w-64 h-64 rounded-lg shadow-xl  relative">
                                        <div className="absolute w-full h-full bg-black opacity-20 rounded-lg"/>
                    <Image src="/nettoyage.jpg" alt="nettoyage" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
                </div>

                <div className="w-64 h-72 rounded-lg shadow-xl bg-pink-600 relative">
                    <div className="absolute w-full h-full bg-black opacity-50 rounded-lg"/>
                    <Image src="/tool.jpg" alt="nettoyage" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
                </div>

                {/* <div className="w-64 h-52 rounded-lg shadow-xl bg-green-600">

                </div> */}
            </div>

            <div className="one flex flex-col space-y-3 -mt-10  -mb-2">
                <div className="w-64 h-40 rounded-lg shadow-xl bg-[#F39200] relative">
                     <div className="absolute w-full h-full bg-black opacity-20 rounded-lg"/>
                    <Image src="/bgThree.jpg" alt="pic" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
                </div>

                <div className="w-64 h-84 rounded-lg shadow-xl bg-pink-600 relative">
                                            <div className="absolute w-full h-full bg-black opacity-50 rounded-lg"/>
                    <Image src="/house.jpg" alt="pic" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
                </div>

                <div className="w-64 h-40 rounded-lg shadow-xl relative">
                                <div className="absolute w-full h-full bg-black opacity-20 rounded-lg"/>
                    <Image src="/fn.jpg" alt="pic" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
                </div>
            </div>

            
        </div>
    </div>
  )
};

export default About;