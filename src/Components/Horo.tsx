import Image from "next/image";
import Link from "next/link";

function Horo() {
  return (
    <div className="flex sm:pl-17 sm:pr-6 shadow-xl pl-5 w-full sm:h[100vh] h-[90vh] justify-between space-x-7 bg-[#f4f1f8] mb-10 backdrop-blur-lg overflow-hidden">

        {/* <div className="flex flex-col mt-14  h-full w-[45%]">
            <h1 className="font-semibold text-3xl flex">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eum modi facere eaque soluta . 
            </h1>

            <p className="font-medium text-gray-500 text-xl flex mt-8">

                
                 Depuis notre création, GCIG BENIN  s'impose comme le leader
                    incontournable du nettoyage professionnel et des services immobiliers au Bénin. 
                     Notre expertise reconnue et notre approche sur-mesure font de nous le choix 
                   privilégié des entreprises et particuliers exigeants.
                
                </p>

            <Link href="/About"
             className="px-8 py-3 mt-16 mr-60 rounded-full text-center text-lg font-semibold shadow-xl border border-white items-start transition-all ease-in hover:text-black">
                 En svoir plus ! 
                 </Link>
        </div> */}

         <div className="absolute blur-2xl bg-[#F39200] rounded-full h-[440px] w-[440px] opacity-20  -mt-40 -ml-6"/>

           <div className="flex  flex-col text-start sm:mt-14 mt-10 z-40 sm:pr-10 ">

                 <div className="sm:text-5xl text-6xl sm:flex text-center items-center space-y-4  sm:space-x-6 font-bold mb-3 justify-center"> 
                      <h1 className="orange">GCIG BENIN</h1>  <p className="bleu sm:text-3xl -mt-4 text-2xl italic sm:flex hidden">Multi Services</p>
                </div>

                <h1 className="sm:text-5xl text-3xl font-bold text-center"> 
                    Un seul prestataire de confiance  pour tous vos besoins d'entretien  <br/> et immobiliers
                </h1>

                <p className="text-xl font-medium opacity-70 italic flex mt-7 text-center">
                    Nous prenons soin de vos espaces comme s’ils étaient les nôtres. 
                     Nettoyage, entretien et gestion de biens : un service complet, fiable et sur mesure.
                    {/* Nettoyage, entretien et gestion de biens : un service complet, fiable et sur mesure. <br/> */}
                    
                </p>

                <div className="flex space-x-3 font-semibold mt-9 sm:text-xl text-lg justify-center">
                    <Link href="/Services " 
                    className="sm:px-8 px-4 py-2 flex sm:py-3  rounded-full text-center shadow-xl  bg-[#F39200] transition-all ease-in text-white"> Nos Services </Link>
                      <Link href="/Contact" className="sm:px-8 flex sm:py-3 px-4 py-2 rounded-full text-center shadow-2xl  ring-white text-black ring   transition-all ease-in bg-white  hover:text-black">Contactez-Nous </Link>
                </div>
            </div>

 <div className="absolute blur-2xl bg-blue-500 rounded-full h-[440px] w-[440px] opacity-20  bottom-4 ml-64 mt-28"/>

        <div className="sm:flex hidden gap-7 relative ">


             <div className="second flex flex-col space-y-5 mt-4 ">
                <div className="w-64 h-64 rounded-lg shadow-xl  relative">
                                        <div className="absolute w-full h-full bg-black opacity-20 rounded-lg"/>
                    <Image src="/clef.jpg" alt="pic" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
                </div>

                <div className="w-64 h-72 rounded-lg shadow-xl bg-pink-600 relative">
                    <div className="absolute w-full h-full bg-black opacity-50 rounded-lg"/>
                    <Image src="/tool.jpg" alt="pic" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
                </div>

                {/* <div className="w-64 h-72 rounded-lg shadow-xl bg-green-600">

                </div> */}
            </div>

            <div className="one flex flex-col space-y-3 -mt-10  -mb-2">
                <div className="w-64 h-40 rounded-lg shadow-xl bg-[#F39200] relative">
                     
                </div>

                <div className="w-64 h-80 rounded-lg shadow-xl bg-pink-600 relative">
                                            <div className="absolute w-full h-full bg-black opacity-50 rounded-lg"/>
                    <Image src="/house.jpg" alt="pic" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
                </div>

                <div className="w-64 h-32 rounded-lg shadow-xl relative">
                                <div className="absolute w-full h-full bg-black opacity-20 rounded-lg"/>
                    <Image src="/logo.png" alt="pic" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
                </div>
            </div>

            
        </div>

        
    </div>
  )
};

export default Horo;