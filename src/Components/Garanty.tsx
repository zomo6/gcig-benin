import { Waranty } from '@/app/constant';
import { FaBell } from 'react-icons/fa';

function Garanty() {
    return (
        <div className="flex flex-col sm:space-y-12 space-y-8 pt-5" id="Why">
                <h1 className="text-center font-semibold sm:text-3xl text-xl"> Pourquoi nous choisir ? </h1>
            <div className="grid sm:grid-cols-4 gap-7 sm:px-20 px-10 py-3 sm:py-6 mb-20">
            {
                Waranty.map((war)=>(
                    <div key={war.id} className="flex flex-col bg-white rounded-md shadow-md p-10 space-y-3">
                       
                        <FaBell className="text-[#F39200] font-bold text-3xl font-serif"/>
                        <div className='flex flex-col sm:space-y-3 space-y-4'>
                            <h1 className="text-xl font-bold text-pretty font-sans"> {war.title} </h1>
                            <p className="text-gray-600 text-md font-serif"> {war.text} </p>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Garanty


                    // <div className="flex flex-col space-y-4 h-full w-[70%] bg-green-600">
                    //         <h1 className='text-xl text-pretty font-bold flex-wrap '> {war.title}  </h1>

                    //         <p className="text-lg font-medium flex text-gray-500"> {war.text} </p>
                    //     </div>

                    //      <div className="flex rounded-lg text-center p-6 h-full w-[30%] bg-blue-600 text-white">
                    //         <i className='text-center mx-auto flex font-extrabold text-3xl'> <FaBell/>  </i>
                    //     </div>