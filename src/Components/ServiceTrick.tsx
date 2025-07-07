import Image from 'next/image';

function ServiceTrick() {

    return (
         <div className='sm:flex w-full pt-5 pb-10 items-center  relative sm:px-14 bg-[#fcfcfc] shadow'>
                <div className='shadow-xl'>
                    <Image src="/house.jpg" alt="pic" width={400} height={400} className="object-cover w-full h-full sm:rounded-lg" />
                </div>

                 <div className='absolute w-64 sm:h-72 sm:left-120 -mt-22 sm:mt-0 sm:mt-40 shadow-xl rounded-xl'>
                    <Image src="/h.jpg" alt="pic" width={400} height={400} className="object-cover w-full h-full rounded-xl" />
                </div>

                <div className='flex flex-col sm:w-[45%] h-[500px]'>
                  <div className="flex flex-col space-y-6 items-center  sm:px-0 px-10  sm:mt-22 mt-32 sm:ml-32">
                    <h1 className='sm:text-2xl text-xl font-semibold flex '>
                        Que vous ayez besoin d'un service ponctuel ou d'un accompagnement à long terme, notre équipe GCIG BENIN est là pour vous accompagner. 
                        Chaque projet est unique, c'est pourquoi nous proposons des solutions sur-mesure adaptées à vos besoins spécifiques et votre budget.  
                    </h1>

                    <p className='text-lg text-gray-500 font-serif '>Obtenez votre devis personnalisé en moins de 24h  et découvrez
                         comment nous pouvons simplifier la gestion de vos espaces et biens immobiliers.</p> 
                  </div>
                </div>
            </div>
    )
}

export default ServiceTrick