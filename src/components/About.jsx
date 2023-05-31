import React from 'react'
import {HiUserGroup} from 'react-icons/hi'
import {BsNewspaper} from 'react-icons/bs'
import {GiSupersonicArrow} from 'react-icons/gi'
import{MdFoodBank} from 'react-icons/md'
function About() {
  return (
    <div  

    style={{backgroundImage: "url('/src/assets/f2.jpg')" }} className=' h-screen bg-cover  container px-4 mx-auto  drop-shadow-2xl'>
<p className='flex text-white items-center border-b-4 py-12 sm:relative sm:top-[32px] justify-center text-3xl font-extrabold hover:text-green-600'> GET TO KNOW US</p>
      <div className=' text-white fixed sm:relative sm:top-[11rem] container drop-shadow-xl h-auto mx-auto py-12  px-4  justify-center items-center flex flex-col md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 sm:text-xl gap-4'>
        
        <div className='flex justify-center flex-col items-center hover:scale-95'>
        <p><HiUserGroup size={80} /></p>
        <p className='text-2xl'>PARTNERSHIPS</p>
        <p>From research, to events, to platform partnerships, we work with thought leaders to provide more actionable services.</p>
        </div>
        <div className='flex justify-center flex-col items-center hover:scale-95 '>
        <p><BsNewspaper size={80}/></p>
        <p className='text-2xl'>PRESS</p>
        <p>We are at the forefront of the market's conversations and serve as the most trusted, global source.</p>
        </div>
        <div className='flex justify-center flex-col items-center hover:scale-95'>
        <p><GiSupersonicArrow size={80}/></p>
        <p className='text-2xl'>Goals</p>
        <p>We will want to achive a best commity, and make people trusted for our hotel services</p>
        </div>
        <div className='flex justify-center flex-col items-center hover:scale-95'>
        <p><MdFoodBank size={80}/></p>
        <p className='text-2xl'>FOOD</p>
        <p>We used best chef for good and healthy food</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
