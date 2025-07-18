"use client"

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hamburger from "@/Components/Hamburger";
import {FaFacebook , FaWhatsapp , FaTimes ,  FaLinkedin , FaPhone , FaMapMarkerAlt , FaEnvelope , FaInstagram, FaTelegram , FaTwitter, FaHamburger, FaBars} from 'react-icons/fa';

function Navbar() {
    
    const pathname = usePathname();
    const [open , setOpen] = useState(false);

    return (
        <div onClick={()=>(open ? setOpen(!open) : setOpen(true))} className="flex h-auto w-full items-center sticky top-0 left-0 z-80 justify-between  sm:pr-3  font-serif  bg-white shadow-md ">

          <Link href="/" className='logo cursor-pointer flex items-center justify-center'>
                <Image src="/logo.png" alt='logo_GCIG' width={110} height={140} />
                <h1 className='orange flex mt-2 sm:m-0  text-2xl font-bold'>GCIG BENIN</h1>
          </Link>

          
            <ul className='link sm:flex space-x-12 hidden text-xl font-semibold text-pretty text-black/90  ml-6'>
                <li className={`hover:text-[#F39200] ${pathname ==="/" && "text-[#F39200]"}`}> <Link href="/">  Acceuil  </Link> </li>
                <li className={`hover:text-[#F39200] ${pathname ==="/Services" && "text-[#F39200]"}`}> <Link href="/Services">  Services  </Link> </li>
                <li className={`hover:text-[#F39200] ${pathname ==="/About" && "text-[#F39200]"}`}> <Link href="/About">  About Us  </Link> </li>
                <li className={`hover:text-[#F39200] ${pathname ==="/Contact" && "text-[#F39200]"}`}> <Link href="/Contact">  Contact  </Link> </li>
            </ul>


            <div className='social_medias hidden sm:flex items-center gap-5'>
                <ul className="flex space-x-4 text-2xl font-medium  sm:border-r-2  sm:border-orange-400 sm:pr-7">
                    <li> <Link href="https://www.facebook.com/profile.php?id=61576113031036&mibextid=rS40aB7S9Ucbxw6v" target="_blank"><FaFacebook className='text-[#1877F2]'/> </Link> </li>
                    {/* <li> <FaWhatsapp className="text-green-500"/> </li> */}
                    <li> <Link href="http://www.linkedin.com/in/gcig-benin-9b0207365" target="_blank"><FaLinkedin className="text-[#0077B5]"/> </Link> </li>
                    <li> <Link href="https://www.instagram.com/gcig_benin/"  target="_blank"> <FaInstagram className="text-[#E4405F]"/></Link>  </li>
                    {/* <li> <FaTelegram/> </li> */}
                    {/* <li> <FaTwitter className="text-[#1DA1F2]"/> </li> */}

                </ul>

                <Link href="/Contact" className="sm:flex hidden rounded-full px-5 py-2 text-center text-lg font-semibold bg-[#304C9C] text-white">Contactez-Nous</Link>
            </div>

            <FaBars onClick={()=>setOpen(!open)} className='sm:hidden flex size-9 mr-2 cursor-pointer'/>

            {
                open && (
                     <div className="w-full h-[100vh] backdrop-blur-2xl bg-black opacity-95
                     z-90 flex flex-col py-5 pl-8 absolute top-0 right-0 sm:hidden">
            
                    <FaTimes onClick={()=>setOpen(!open)} className="cursor-pointer fixed top-6 right-6 text-3xl z-50 font-bold text-white"/>

             <ul className='link flex flex-col space-y-6  mt-10 text-3xl font-semibold text-pretty text-white '>
                <li onClick={()=>setOpen(!open)} className={`hover:text-[#F39200] ${pathname ==="/" && "text-[#F39200]"}`}> <Link href="/">  Acceuil  </Link> </li>
                <li onClick={()=>setOpen(!open)} className={`hover:text-[#F39200] ${pathname ==="/Services" && "text-[#F39200]"}`}> <Link href="/Services">  Services  </Link> </li>
                <li onClick={()=>setOpen(!open)} className={`hover:text-[#F39200] ${pathname ==="/About" && "text-[#F39200]"}`}> <Link href="/About">  About Us  </Link> </li>
                <li onClick={()=>setOpen(!open)} className={`hover:text-[#F39200] ${pathname ==="/Contact" && "text-[#F39200]"}`}> <Link href="/Contact">  Contact  </Link> </li>
            </ul>


<hr className='text-white mt-12' />

                                 <ul className="flex mt-14  space-x-8  text-2xl font-medium  ">
                                    <li> <Link href="https://www.facebook.com/profile.php?id=61576113031036&mibextid=rS40aB7S9Ucbxw6v" target="_blank"><FaFacebook className='text-[#1877F2]'/> </Link> </li>
                                    {/* <li> <FaWhatsapp className="text-green-500"/> </li> */}
                                    <li> <Link href="http://www.linkedin.com/in/gcig-benin-9b0207365" target="_blank"><FaLinkedin className="text-[#0077B5]"/> </Link> </li>
                                    <li> <Link href="https://www.instagram.com/gcig_benin/"  target="_blank"> <FaInstagram className="text-[#E4405F]"/></Link>  </li>
                    
                                </ul>


                                <div className='social_medias flex flex-col  text-white space-y-8 mt-10 mr-4'>

                                    <div className="flex items-center   font-medium space-x-6"> 
                                        <FaPhone className="rotate-90 text-2xl font-bold animate-bounce text-[#F39200]"/>
                                         <div className="flex space-x-3 text-xl"> <i>01 9797 7303 </i> <i className="text-[#F39200]">/</i> <i>01 4646 4679</i> </div>
                                     </div>
                
                                    <div className="flex space-x-8 items-center   ">
                                        <FaEnvelope className="text-2xl  font-bold animate-bounce text-[#F39200]"/> 
                                        <p className="text-xl  font-medium ">gcigbenin@gmail.com</p>
                                    </div>

                                    <div className="flex  space-x-6 items-center  ">
                                        <FaMapMarkerAlt className="text-2xl  font-bold animate-bounce text-[#F39200]"/> 
                                        <p className="text-xl  font-medium ">Abomey-Calavi, à 600m de la Fececam BENIN</p>
                                    </div>
                                </div>
                
                               
             
        </div>
                )
            }
 
        </div>
    )
}

export default Navbar
