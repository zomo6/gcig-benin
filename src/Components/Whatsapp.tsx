"use client"

import { FaWhatsapp } from "react-icons/fa";
import Head from 'next/head';

function Whatsapp() {

  // Configuration (à personnaliser)
  const businessPhone = '229 0197977303'; // Votre numéro professionnel avec indicatif (sans +)
  const welcomeMessage = "Bonjour, comment puis-je vous aider ?"; // Message qui apparaîtra côté entreprise

  const startChat = () => {
    const encodedMessage = encodeURIComponent(welcomeMessage);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Lien avec le message préinstallé côté BUSINESS (nécessite un compte WhatsApp Business)
    const whatsappUrl = isMobile
      ? `https://wa.me/${businessPhone}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${businessPhone}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };


  return (
    <div onClick={startChat} className="fixed bottom-4 animate-bounce ring-4 right-4 z-50  sm:px-6 sm:py-2 p-2 rounded-full shadow-lg flex bg-green-400 text-White sm:ring-2 ring-white
     items-center justify-center cursor-pointer hover:bg-[#F39200] transition-colors duration-300 group">
         
        <div  className="flex items-center justify-center gap-4" >
             <FaWhatsapp className="sm:text-3xl text-4xl font-bold sm:animate-bounce text-white " />
            <p className="sm:flex hidden text-lg font-semibold text-white group-hover:flex">Ecrivez-Nous !</p>
        </div>

    </div>
  )
};

export default Whatsapp;