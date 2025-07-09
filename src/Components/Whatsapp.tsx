import { FaWhatsapp } from "react-icons/fa";


function Whatsapp() {
  return (
    <div className="fixed bottom-4 animate-bounce ring-4 right-4 z-50 gap-4 sm:px-6 sm:py-2 p-2 rounded-full shadow-lg flex bg-green-400 text-White sm:ring-2 ring-white items-center justify-center cursor-pointer hover:bg-[#F39200] transition-colors duration-300">
         <FaWhatsapp className="sm:text-3xl text-4xl font-bold sm:animate-bounce text-white " />
            <p className="sm:flex hidden text-lg font-semibold text-white">Ecrivez-Nous !</p>
    </div>
  )
};

export default Whatsapp;