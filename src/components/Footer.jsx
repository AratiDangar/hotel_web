
import {GrInstagram} from 'react-icons/gr'
import{BsFacebook} from 'react-icons/bs'
import{AiFillTwitterCircle} from 'react-icons/ai'
function Footer (){


    return(<>
    <div className="container flex flex-col sm:flex-row gap-x-12 justify-center items-center mx-auto h-[600px] drop-shadow-xl relative top-[4.75rem] bg-gradient-to-r from-slate-600  via-blue-900 to-slate-600 px-4 ">
       <div>
       <p className='py-1 text-lg sm:text-3xl font-bold sm:font-semibold'>OUR LOCATION</p>
       <p className='py-1 text-2xl'>Adventure Hotel</p>
       <p className='py-1 text-2xl '>shiv Colony,22-B</p>
       <p className='py-1 text-2xl'> Gujrat,Bilakh</p>
        <p className='pt-6 text-lg sm:text-3xl font-bold sm:font-semibold'>FIND US</p>
        <div className='flex gap-2 pb-4 pt-4' >
            
        <a href="#" className="py-2 hover:scale-95"><GrInstagram color='red ' size={'45px'}/></a>
        <a href="#" className="py-2 hover:scale-95"><BsFacebook color='blue' size={'45px'}/></a>
        <a href="#" className="py-2 hover:scale-95"><AiFillTwitterCircle color='blue' size={'45px'}/></a>
        </div>
       </div>
       <div className='sm:relative sm:top-[-80px]'>
        <p className='text-lg sm:text-3xl font-bold sm:font-semibold pl-9 sm:pl-0'>CONTACT CENTER</p>
        <p className='pt-1 text-2xl'>+91 6353178264</p>
        <p className='text-2xl'>resv@adventure.com</p>
        <p className='text-2xl'>info@adventurehotel.com</p>
       </div>
    </div>
    
    </>)
}

export default Footer;