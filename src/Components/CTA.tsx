import Link from "next/link";

function CTA() {

    return (
        <div className='sm:flex  items-center sm:justify-between justify-center relative sm:py-24 pt-10 pb-20 sm:px-12 px-10 my-10 shadow-2xl bg-white/10  border-white/30 backdrop-blur-md z-10 text-black/80 '>
                <div className="flex flex-col space-y-18 sm:justify-start text-center">
                   <div className="flex flex-col space-y-14 mr-5"> 
                     <div className="flex flex-col sm:space-y-4 space-y-14">
                         <h1 className="sm:text-3xl text-4xl font-bold">Simplifiez la gestion de votre patrimoine immobilier. </h1> 
                         <h1 className="sm:text-3xl text-xl  font-bold">Confiez-nous vos biens et concentrez-vous sur l'essentiel</h1>
                    </div>
                     <h1 className="text-lg sm:flex hidden space-x-2 font-semibold ml-10 items-center text-black/70 italic z-20">
                      <i className="text-[#F39200] text-2xl font-bold">GCIG BENIN</i> <p> est à votre disposition. </p>
                     <p>Faîtes-nous le savoir juste en un click !</p>
                     </h1> 

                     <div className="absolute blur-2xl bg-blue-400 rounded-full h-96 w-[500px] bg-blend-lighten right-0 -mt-28  opacity-20"/>
                   </div>
                    
                </div>

                <Link href="/Contact" 
                className="text-center sm:-ml-40 ml-26 px-8 text-lg text-pretty py-5 text-white bg-[#304C9C]
                 rounded-xl font-semibold ring-2 ring-white z-20">Contactez-Nous</Link>

        </div>
    )
}

export default CTA
