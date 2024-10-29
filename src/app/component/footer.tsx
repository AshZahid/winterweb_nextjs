import Image from "next/image";
import instaimg from "../image/instaimg.png";
import fbimg from "../image/fbimg.jpeg";
import whatsappimg from "../image/whatsappimg.png";

export default function Footer(){
    return(
       
            <footer>
            <div className="w-full bg-slate-300 text-white">
                <h3 className="text-sm font-bold text-zinc-800 text-center">Follow Us On</h3>
                <div className="bg-zinc-500">

                     <Image src={instaimg} alt="instagram" className="h-9 w-9 my-5" />

                     <Image src={fbimg} alt="fb" className="h-9 w-9" />

                     <h2>You can join our whatsapp group</h2>
                     <Image src={whatsappimg} alt="whatsapp" className="h-9 w-9" />
                </div>
                <hr></hr>
                <h3>California:Your privacy right | email us:WinColl56@gmail.com | Ph:034567032</h3>
            </div>
            </footer>
        
    )
}