export default function About(){
    return(
       <div className="bg-slate-300">
          <h1 className="text-2xl text-bold text-orange-500 text-center">Visit Here for More Knowledge</h1><br/>
          <div className="flex justify-center space-x-5 item-center h-48 w-800 text-center text-black">

            <div className="bg-red-300">Hello Winter<br/>Here is our new Winter collection <br/>visit and buy<br/>
            <button className="bg-orange-500 text-white">Order Now</button>
             </div>
            <div className="bg-blue-400">Hello Winter<br></br>Here is our new Winter collection <br/>visit and buy<br/>
            <button className="bg-orange-500 text-white">Order Now</button>
             </div>
            <div className="bg-orange-300">Hello Winter<br/>Here is our new Winter collection <br/>visit and buy<br/>
            <button className="bg-orange-500 text-white">Order Now</button>
            </div>

          </div>
       </div> 
    )
}