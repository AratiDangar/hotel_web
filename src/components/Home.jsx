import Facilities from "./Facilities";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

function Home(){

  let nvigate=useNavigate();
    return(<>
    <Facilities/>
       <div className="container mx-auto px-4 drop-shadow-xl bg-gradient-to-r from-slate-200 to-indigo-800 top-[-112px] md:top-0 relative z-[-1] h-[820px] sm:h-auto">
        

            <p className="px-6 pt-6 text-lg font-mono grid grid-rows-2 justify-center sm:flex sm:text-3xl md:text-4xl "><span className="px-4">WELCOME TO</span><span> ADVENTURE HOTEL</span></p>
            <p className="text-sm font-mono  sm:flex  grid grid-rows-2 sm:text-lg md:text-xl justify-center pt-[12px] italic md:pt-[14px]"><span className="px-4 justify-center flex"> BEST BOUTIQUE</span> <span className="">ACCOMMODATION IN GUJRAT</span></p>
            
             <hr className="py-4"></hr>
            <p className="px-10 md:px-6 flex md:justify-center pb-11 sm:text-2xl">Adventure Hotel provides you with quality accommodation ideal for leisure and business travelers. </p>
            <p className="px-6 pb-7 sm:text-2xl">Adventure Hotel a captivating leisure destination in itself, offering a myriad of services and facilities to experience our truly enriching surroundings. Adventure Hotel is one of the best budget homestay in Gujrat.If you are planning a visit to the Girnar Hill then it is one of the most prominent accommodation for your comfortable stay.</p>
            <p className="px-6 pb-7 sm:text-2xl">To pamper the guests with ultimate comfort, luxury and pleasure, We offer multifarious amenities, rooftop restaurant & services. Adventure HOtel is one of the best budget homestay in Gujrat having all modern amenities.</p>
           
            
            
        </div>
        
    
       <div className="flex justify-center pb-2 py-4"><button onClick={()=>{
        nvigate('/Reservation');
    }}className="rounded-full scale hover:bg-slate-600 hover:cursor-pointer  bg-slate-200 px-4 py-4">BOOK NOW</button>
       </div>
    </>)
}

export default Home;