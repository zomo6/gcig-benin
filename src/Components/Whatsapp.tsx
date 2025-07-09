import { FaWhatsapp } from "react-icons/fa";
import Head from 'next/head';

function Whatsapp() {

   // Numéro de téléphone avec l'indicatif international (sans le +)
  const phoneNumber = '0152810482'; // Remplacez par votre numéro

   const defaultMessage = encodeURIComponent('Comment puis-je vous aider ?');
  
  // Génère le lien WhatsApp (fonctionne sur mobile et desktop)
  const openWhatsApp = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `whatsapp://send?phone=${phoneNumber}&text=${defaultMessage}`
      : `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 animate-bounce ring-4 right-4 z-50  sm:px-6 sm:py-2 p-2 rounded-full shadow-lg flex bg-green-400 text-White sm:ring-2 ring-white
     items-center justify-center cursor-pointer hover:bg-[#F39200] transition-colors duration-300 group">
          <Head>
            {/* Meta pour le référencement */}
            <meta name="whatsapp:contact" content={`+${phoneNumber}`} />
          </Head>

        <div className="flex items-center justify-center gap-4" >
             <FaWhatsapp className="sm:text-3xl text-4xl font-bold sm:animate-bounce text-white " />
            <p className="sm:flex hidden text-lg font-semibold text-white group-hover:flex">Ecrivez-Nous !</p>
        </div>

    </div>
  )
};

export default Whatsapp;