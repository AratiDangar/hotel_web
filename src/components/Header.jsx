import home from "/src/assets/home.jpg";
import logo from "../assets/a.gif";
import logo1 from '/src/assets/logo.png'
import f1 from '/src/assets/f1.webp'
import { ImMenu } from "react-icons/im";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let [open, setOpen] = useState(false);


  return (
    <>
      <div className="  ">
        
        <div > <div
           onClick={()=>setOpen(!open)
            
            }
            className="absolute z-[1] right-8 top-4 curser-pointer md:hidden">  
            
              
            {open? <GiCancel  />  : <ImMenu />}
          </div>

          <ul onClick={()=>setOpen(!open)
            
          } className= {`md:bg-red relative p-2 md:pr-4 flex flex-col justify-center items-center gap-6 uppercase md:pb-1 md:flex-row md:justify-end  pb-12  md:z-auto  left-0 md:w-auto w-full md:pl-0 pl-9 transition-all md:translate-y-0  duration-400 ease-in bg-gradient-to-r from-blue-600 to-slate-600 ${open?'translate-y-0':'translate-y-[-490px]'}`}>
          
            <li
                    
            >
              {" "}
              <Link  className="hover:text-white" to="./">Home</Link>
            </li>
            <li className="">
              {" "}
              <Link className="hover:text-white" to="../About">About Us</Link>
            </li>
            <li className="">
              {" "}
              <Link className="hover:text-white" to="./Service">Facilities</Link>
            </li>
            <li className="">
              {" "}
              <Link className="hover:text-white" to="./Contact">Contact Us</Link>
            </li>
            <li className="">
              {" "}
              <Link className="hover:text-white" to="./Reservation">Reservation</Link>
            </li>
            
            
          </ul>
        </div>
        <div className="flex relative h-[12px] top-[-188px] md:top-0 md:z-auto gap-0 z-[-1] md:h-full justify-center  flex-col items-center ">
        
          <img className="static p-[48px] h-[19rem] md:h-[30rem]" src={logo} />
          
          
           
         
        </div>
      </div>
    </>
  );
}

export default Header;

// <img  className=' absolute  w-screen min-h-fit opacity-[0.8]' src={home}/>
//<li> </li>
// <div  className='hidden'></div>
//absolute md:static bg-slate-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
