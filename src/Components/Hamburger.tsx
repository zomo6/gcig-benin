"use client"


import {FaFacebook , FaWhatsapp , FaLinkedin , FaInstagram, FaTelegram , FaTwitter, FaHamburger} from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Hamburger() {

        const pathname = usePathname();

    return (
        <div className="w-[70%] h-[100vh] backdrop-blur-lg bg-black opacity-90
         z-90 flex flex-col py-5 pl-8 absolute top-0 right-0">
            

             <ul className='link flex flex-col space-y-6  mt-10 text-3xl font-semibold text-pretty text-white '>
                <li className={`hover:text-[#F39200] ${pathname ==="/" && "text-[#F39200]"}`}> <Link href="/">  Acceuil  </Link> </li>
                <li className={`hover:text-[#F39200] ${pathname ==="/Services" && "text-[#F39200]"}`}> <Link href="/Services">  Services  </Link> </li>
                <li className={`hover:text-[#F39200] ${pathname ==="/About" && "text-[#F39200]"}`}> <Link href="/About">  About Us  </Link> </li>
                <li className={`hover:text-[#F39200] ${pathname ==="/Contact" && "text-[#F39200]"}`}> <Link href="/Contact">  Contact  </Link> </li>
            </ul>


               <ul className="flex mt-10  space-x-8  text-xl font-medium  ">
                    <li> <Link href="https://www.facebook.com/profile.php?id=61576113031036&mibextid=rS40aB7S9Ucbxw6v" target="_blank"><FaFacebook className='text-[#1877F2]'/> </Link> </li>
                    {/* <li> <FaWhatsapp className="text-green-500"/> </li> */}
                    <li> <Link href="http://www.linkedin.com/in/gcig-benin-9b0207365" target="_blank"><FaLinkedin className="text-[#0077B5]"/> </Link> </li>
                    <li> <Link href="https://www.instagram.com/gcig_benin/"  target="_blank"> <FaInstagram className="text-[#E4405F]"/></Link>  </li>
                    
                </ul>
        </div>
    )
}

export default Hamburger
