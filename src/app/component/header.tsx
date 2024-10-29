import Link from "next/link"
import Image from "next/image"
import logo from "../image/logo2.jpeg"

export default function Header(){
    return(
        <header>
            <nav className="flex justify-around w-3/8 bg-black text-orange-500 hover:text-sky-700 pt-3 sticky w-full top-o left-0">
                <Image className="h-18 w-16 rounded-full" src={logo} alt="logo"
                />
                
                <h1 className="text-2xl font-bold italic">Winter Collection</h1>
            <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          </nav>
          </header>
    )
}