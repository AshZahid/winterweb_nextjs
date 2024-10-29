import Image from "next/image";
import winimg from "../app/image/winimg.jpeg"

export default function Home() {
  return (
    
    <div >
      <Image src={winimg} alt="winter collection" className="h-100 w-full" 
      />
    </div>
 
  );
}
