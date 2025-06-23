"use client"

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
        </div>
    )
}

export default Hamburger
