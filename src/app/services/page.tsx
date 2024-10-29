import Image from "next/image";
import image1 from "../image/image1.jpeg"
import img2 from "../image/img2.jpeg"
import img3 from "../image/img3.jpeg"
import img4 from "../image/img4.jpeg"
import img5 from "../image/img5.jpeg"

export default function Services(){
    return(
        <div className="bg-slate-300">
           <h1 className="text-2xl font-bold text-zinc-800 text-center">Our Best Services</h1>
           <p>Stylish Winter Dresses Collection 2024<br/>
           Welcome to our Winter Collection 2024 As the temperature drops, its time to update your wardrobe with the latest in winter fashion. Our collection features an array of stylish and fashionable dresses designed to keep you warm and chic. Explore unstitched and stitched options, including embroidered shawls, woolen suits, velvet dresses, and much more.</p>
         
         
           <div className="flex space-x-5">
            
                <Image className="h-80 w-50" src={image1} alt="imag1"  
                />
            
                <Image className="h-80 w-50" src={img2} alt="imag2"  
                />
                </div>
                <br/>
               <div className="flex justify-center space-x-5">
                <Image className="h-72 w-50" src={img3} alt="img3"
                />

                <Image className="h-72 w-50" src={img4} alt="img4"
                />

                 <Image className="h-72 w-50" src={img5} alt="img5"
                />
                </div>
            
           
        </div>
    )
}