import Image from "next/image";

function Nettoyage() {
  return (
    <div className="sm:flex  justify-center pl-20 pr-3 sm:py-22 py-10 bg-[#f5f5f5] w-full sm:space-x-8 space-y-5">
       <div className="flex  flex-col space-y-7 pr-10 mt-14">
            {/* <h1 className="flex text-2xl font-semibold items-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus ipsum iure fugit alias incidunt quas quidem sunt fuga ea. 
            </h1> */}

            <p className="text-xl text-gray-500">
               Que vous soyez un particulier, une entreprise ou un syndic de copropriété,
                nous vous accompagnons au quotidien. Nous assurons le nettoyage de vos locaux,
                 la vitrerie, la gestion de vos déchets et l'entretien de vos espaces 
               verts avec un savoir-faire rigoureux et une équipe qualifiée .
            </p>
       </div>

       <div className="sm:flex sm:space-x-4 space-y-4 ">
            <div className="sm:h-80 sm:w-64 ml-20 sm:ml-0 rounded-lg shadow-2xl relative ">
              <div className="absolute w-full h-full bg-black opacity-50 rounded-lg"/>
               <Image src="/tool.jpg" alt="pic" width={500} height={500} className="w-full h-full object-cover rounded-lg z-20"/>
            </div>

            <div className="sm:h-80 sm:w-64 mr-20 sm:mr-0 rounded-lg shadow-2xl relative ">
              <div className="absolute w-full h-full bg-black opacity-50 rounded-lg"/>
               <Image src="/vert.jpg" alt="pic" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
            </div>

            <div className="sm:h-80 sm:w-64 -ml-16 mr-44 sm:ml-4 sm:mr-0 rounded-lg shadow-2xl relative">
              <div className="absolute w-full h-full bg-black opacity-50 rounded-lg"/>
               <Image src="/renovation.jpg" alt="pic" width={400} height={400} className="w-full h-full object-cover rounded-lg z-20"/>
            </div>
       </div>
    </div>
  )
};

export default Nettoyage;