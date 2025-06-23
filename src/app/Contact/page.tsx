
function Page() {
    return (
         <div className='sm:flex w-full sm:py-4 pt-16 pb-5  space-x-10  relative sm:px-20 bg-[#f5f5f5]'>

                <div className='flex flex-col sm:w-[50%] sm:h-[500px] pl-12 sm:px-0 '>
                  <div className="flex flex-col space-y-10 items-center  font-serif  sm:mt-28 ">
                    <h1 className='sm:text-2xl text-2xl font-medium'>
                       Chez GCIG BENIN, chaque demande est unique et mérite une attention particulière. 
                       Que vous souhaitiez un devis pour nos services d'entretien,
                        des conseils en gestion immobilière ou des informations sur nos prestations,
                        notre équipe d'experts est à votre écoute.  
                    </h1>

                    <p className='text-xl text-gray-500 hidden sm:flex'>Suivez-nous sur nos réseaux sociaux pour rester informé de nos actualités et conseils d'experts.</p> 
                  </div>
                </div>

                <form className='bg-black text-white  items-center space-y-8 flex flex-col sm:w-[50%] px-20 py-12'>
                    <div className="flex flex-col space-y-3 w-full">
                         <label className='text-xl font-semibold'>Nom</label>
                         <input type="text" placeholder="Entrez votre nom" className="py-3 border outline-none rounded placeholder: pl-4" required/>
                     </div>

                     <div className="flex flex-col space-y-3 w-full">
                         <label className='text-xl font-semibold'>Email</label>
                         <input type="email" placeholder="Entrez votre email" className="py-3 border outline-none rounded placeholder: pl-4" required/>
                     </div>

                      <div className="flex flex-col space-y-3 w-full">
                         <label className='text-xl font-semibold'>Message</label>
                         <textarea type="text" placeholder="Quelle est votre préocupation ?" className="py-3 border outline-none rounded placeholder: pl-4" required/>
                     </div>

                     <button type="submit" className="text-xl font-semibold bg-[#F39200] w-full py-3 rounded-md"> Envoyer </button>
                </form>
         </div>
    )
}

export default Page
