import { proof } from '@/app/constant'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

function Proof() {
    return (
        <div className='grid sm:grid-cols-3 sm:gap-0 gap-22 items-center justify-center  sm:py-10 pb-10 pt-7'>

            <div className="absolute blur-2xl bg-blue-400 rounded-full h-[440px] w-[440px] opacity-10  -mt-40 "/>
            {
                proof.map((pro)=>(
                    <div key={pro.id} className='sm:flex  items-center sm:ml-0 ml-18 justify-center sm:space-x-3 space-y-4 z-50 '>
                        <div className='flex items-center space-x-2'>
                            <FaPlus className="font-semibold text-lg "/>  <h1 className="text-6xl font-bold"> {pro.number} </h1>
                        </div>

                        <p className="font-sans font-semibold sm:ml-0 -ml-5 text-xl flex text-wrap italic text-gray-600"> {pro.title} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Proof
