import { footerLink } from '@/app/constant';
import Image from 'next/image';
import Link from 'next/link';
import {FaFacebook , FaWhatsapp , FaLinkedin , FaPhone ,  FaInstagram, FaEnvelope , FaMapMarkerAlt, FaHamburger} from 'react-icons/fa';

function Footer() {

    return (
        <div className="flex flex-col py-5 sticky  sm:px-20  bg-black text-white">
           <div className="sm:flex items-center justify-between ">
                <Image src="/logo.png" width={400} height={400} alt="pic" className="w-32 h-32 object-cover"/>

                <div className="sm:flex items-center sm:space-x-10 space-y-8 ml-6 sm:mt-0 mt-10">

                    <div className="flex sm:hidden space-x-4 items-center ml-3 text-lg sm:ml-0">
                        <FaMapMarkerAlt className="  font-bold animate-bounce text-[#F39200]"/> 
                        <p className="sm:text-xl  font-medium ">localisation</p>
                    </div>

                    <div className="flex items-center sm:mt-7 sm:text-xl text-lg font-medium space-x-6"> 
                        <FaPhone className="rotate-90 text-2xl font-bold animate-bounce text-[#F39200]"/>
                         <div className="flex space-x-3"> <i>01 9797 7303 </i> <i className="text-[#F39200]">/</i> <i>01 4646 4679</i> </div>
                     </div>

                    <div className="flex space-x-4 items-center ml-3 text-lg sm:ml-0">
                        <FaEnvelope className="  font-bold animate-bounce text-[#F39200]"/> 
                        <p className="sm:text-xl  font-medium ">gcigbenin@gmail.com</p>
                    </div>
                </div>

                <ul className="flex mt-10 sm:mt-0 sm:ml-0 ml-10 space-x-8 sm:text-3xl text-xl font-medium  ">
                    <li> <Link href="https://www.facebook.com/profile.php?id=61576113031036&mibextid=rS40aB7S9Ucbxw6v" target="_blank"><FaFacebook className='text-[#1877F2]'/> </Link> </li>
                    {/* <li> <FaWhatsapp className="text-green-500"/> </li> */}
                    <li> <Link href="http://www.linkedin.com/in/gcig-benin-9b0207365" target="_blank"><FaLinkedin className="text-[#0077B5]"/> </Link> </li>
                    <li> <Link href="https://www.instagram.com/gcig_benin/"  target="_blank"> <FaInstagram className="text-[#E4405F]"/></Link>  </li>
                    

                </ul>

            </div>

            <div className="grid grid-cols-3 mt-18 gap-5 my-6 ml-4">
                {
                    footerLink.map((foot)=>(
                        <Link key={foot.id} href={foot.path}
                         className='font-serif font-semibold sm:text-lg text-md text-pretty text-white/70'>
                            {foot.title}
                        </Link>
                    ))
                }
            </div>

            <hr className="opacity-40 mt-5"/>
            <div className="flex items-center justify-center space-x-1 font-semibold text-md text-white mt-5"> <i>gcigbenin@</i><p>2025</p> </div> 
        </div>
    )
}

export default Footer
