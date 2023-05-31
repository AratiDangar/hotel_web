import React from 'react'
import food from '/src/assets/gf.png'
import pet from '/src/assets/pet.png'
import parking from '/src/assets/fp.png'
import fit from '/src/assets/fit.png'
import wifi from '/src/assets/wifi.png'
function Service() {
  return (
    <div className='container mx-auto relative top-8  pb-9 h-auto bg-gradient-to-t from-slate-400 to-green-200 drop-shadow-2xl'>
          <p className='text-3xl font-extrabold py-9 text-center'>Do You Know? </p>
      <div className='flex flex-col sm:grid sm:grid-cols-2  sm:px-4 gap-2 sm:gap-9 justify-center items-center'>
      
      <div className='border-b-2 '>
        <img className='h-[227px] px-10 hover:scale-95' src={food}></img>
        <p className='text-2xl px-[4.5rem] py-2'>Free breakfast</p>
      </div>
      <div  className='border-b-2'>
      <img className='h-[227px] hover:scale-95' src={parking}></img>
      <p className='text-2xl px-[4.5rem] py-2'>Free Parking</p>
      </div>
      <div  className='border-b-2'>
      <img className='h-[227px] hover:scale-95' src={wifi}></img>
      <p className='text-2xl px-[4.5rem] py-2'>Free internet</p>
      </div>
      <div  className='border-b-2'>
      <img className='h-[227px] hover:scale-95' src={fit}></img>
      <p className='text-2xl px-[6.5rem] py-2'>Fitness</p>
      </div>
      <div  className='border-b-2'>
      <img className='h-[227px] hover:scale-95' src={pet}></img>
        <p className='text-2xl px-[4.5rem] py-2'>Pet friendly</p></div>

      </div>
    </div>
  )
}

export default Service
