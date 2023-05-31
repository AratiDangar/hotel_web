import React from 'react'
import resort from '/src/assets/resort1.jpg'
import room from '/src/assets/room.jpg'
import food from '/src/assets/food.jpg'
function Facilities() {
  return (<><p className='relative  flex items-center justify-center  text-3xl text-blue-950 md:pt-[9rem] md:pb-[2rem] flex-col sm:flex-row  px-4  top-[-50px]'><span className='sm:pr-[8px]'>Services Of </span><span className=''>Adventure Hotel</span></p>
    <div className='container relative flex flex-col gap-4 px-4 pb-[5.75rem] mx-auto bg-slate-100 h-auto drop-shadow-xl sm:h-auto '>
        <div className='container active:scale-75 mx-auto bg-white h-auto rounded-md  sm:w-[598px] border-2 border-black relative top-[43px]'>
          <img className=''src={resort}></img>
          <div className='flex justify-center items-center py-4'>
          <p className='text-3xl font-bold '> Resort</p>
        </div></div>
        <div className='container  active:scale-75 mx-auto bg-white h-auto rounded-md  sm:w-[598px] border-2 border-black relative top-[43px]'>
          <img className=''src={room}></img>
          <div className='flex justify-center items-center py-4'>
          <p className='text-3xl font-bold '> Rooms</p>
        </div></div>
        <div className='container active:scale-75 mx-auto bg-white h-auto rounded-md  sm:w-[598px] border-2 border-black relative top-[43px]'>
          <img className=''src={food}></img>
          <div className='flex justify-center items-center py-4'>
          <p className='text-3xl font-bold '> Food</p>
        </div></div>

      
    </div></>
  )
}

export default Facilities
