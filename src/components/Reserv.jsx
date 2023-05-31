import React, { useState } from 'react'
import axios from 'axios';
function Reserv() {

 const [fname,setFname]=useState("");
 const [lname,setLname]=useState("");
 const [add1,setAdd1]=useState("");
 const [add2,setAdd2]=useState("");
 const [fstate,setFstate]=useState("");
 const [fcity,setFcity]=useState("");
 const [fzip,setFzip]=useState("");
 const [fno,setFno]=useState("");
 const [femail,setFemail]=useState("");
 const [farrival,setFarrival]=useState("");
 const [fdept,setFdept]=useState("");
 const [fad,setFad]=useState("");
 const [fch,setFch]=useState("");
 const [ftext,setFtext]=useState("");
 

 const handleSubmit=(e)=>{
  if(fname.length===0){
    alert('Name has a left blank!');
  }
  else if(lname.length===0){
    alert('Name has a left blank!');
  }
  else if(add1.length===0){
    alert('Name has a left blank!');
  }
  else if(add2.length===0){
    alert('Name has a left blank!');
  }
  else if(fstate.length===0){
    alert('Name has a left blank!');
  }
  else if(fcity.length===0){
    alert('Name has a left blank!');
  }
  else if(fzip.length===0){
    alert('Name has a left blank!');
  }
  else if(fno.length===0){
    alert('Name has a left blank!');
  }
  else if(femail.length===0){
    alert('Name has a left blank!');
  }
  else if(farrival.length===0){
    alert('Name has a left blank!');
  }
  else if(fdept.length===0){
    alert('Name has a left blank!');
  }
  else if(fad.length===0){
    alert('Name has a left blank!');
  }
  else if(fch.length===0){
    alert('Name has a left blank!');
  }
  else if(ftext.length===0){
    alert('Name has a left blank!');
  }

  else{
    const url='http://localhost/php/reservation.php';
    let fData= new FormData();
    fData.append('fname',fname);
    fData.append('lname',femail);
    fData.append('add1',add1);
    fData.append('add2',add2);
    fData.append('fstate',fstate);
    fData.append('fcity',fcity);
    fData.append('fzip',fzip);
    fData.append('fno',fno);
    fData.append('femail',femail);
    fData.append('farrival',farrival);
    fData.append('fdept',fdept);
    fData.append('fad',fad);
    fData.append('fch',fch);
    fData.append('ftext',ftext);
    
    

    axios.post(url,fData)
    .then(response=>alert(response.data))
    .catch(error=>alert(error));
     setAdd1("");
     setAdd2("");
     setFad("");
     setFarrival("");
     setFch("");
     setFdept("");
     setFemail("");
     setFname("");
     setFno("");
     setFstate("");
     setFtext("");
     setFzip("");
     setLname("");
     
  }

 }


  return (
    <div  style={{backgroundImage: "url('/src/assets/bg.jpg')",backgroundRepeat:"no-repeat" ,backgroundSize:"100% 100%" }} className='container  sm:relative flex flex-col gap-4 justify-center items-center px-4 mx-auto  drop-shadow-2xl  bg-'>
      <div><p className='text-center  sm:pb-0 relative top-5 text-4xl font-semibold text-slate-900'>Reservation !</p>
      <p className='py-7 text-lg font-semibold '>Please complete the form below.</p>
      </div>

    
      <p className="font-bold text-2xl ">your registration will be varified prior to your arrival</p>
      
        <div className=' flex flex-col gap-5 '>
        <lable className="pl-12 font-semibold">FULL NAME</lable>
        <span className='flex sm:gap-9 gap-4 px-12'>
        <input className='sm:w-[208px] w-[111px] px-4  rounded-xl'type='text'name='fname' value={fname} onChange={(e)=>{

              setFname(e.target.value);}} 
              placeholder='first name'/>
        <input  className='sm:w-[208px] px-4 w-[111px] rounded-xl' type='text' name='lname' value={lname}   onChange={(e)=>{

setLname(e.target.value);}} placeholder='last name'/></span>
      </div>
      <div className='flex flex-col gap-5'>
        <label className='font-semibold'>ADDRESS</label>
        <input className='sm:w-[467px] rounded-xl px-4'type='text' name='add1' value={add1}  onChange={(e)=>{

setAdd1(e.target.value);}}  placeholder='Street Address'/>
        <input type='text 'className='rounded-xl px-4'name='add2' value={add2}   onChange={(e)=>{

setAdd2(e.target.value);}} placeholder='Street Address2'/>
       <span className='gap-4 grid grid-cols-2 rounded-xl'> <input className='rounded-xl px-4'type='text' onChange={(e)=>{

setFcity(e.target.value);}}  name='fcity' value={fcity}  placeholder='City'/>
        <input className='rounded-xl px-4' type='text'  onChange={(e)=>{

setFstate(e.target.value);}} name='fstate' value={fstate}  placeholder='State'/></span>
        <input className='rounded-xl px-4' type='text' onChange={(e)=>{

setFzip(e.target.value);}}  name='fzip' value={fzip} placeholder='Postal/Zipcode'/>
      </div>
      <div className='grid grid-cols-2 gap-[14rem] '>
        <lable className='font-semibold'>PHONE NUMBER</lable> 
        <lable className='font-semibold'>EMAIL ADDRESS</lable></div><div className='grid grid-cols-2 gap-4 '>
        <input className='sm:w-[229px] rounded-xl px-4' type='number'id="fname" name="fno" value={fno}  onChange={(e)=>{

setFno(e.target.value);}}   placeholder='(000) 000-0000'/>
       
        <input className='sm:w-[229px] rounded-xl px-4' type='email' name='femail'  onChange={(e)=>{

setFemail(e.target.value);}}  value={femail} placeholder='ex:myname@gmail.com'/>
      </div>
      <div className='flex gap-7'><span className='flex flex-col gap-9 sm:flex-row py-4'>
      <lable className="font-semibold"> Arrival - Date & Time</lable>
        <input className='rounded-xl px-4' type='date'  name='farrival'  onChange={(e)=>{

setFarrival(e.target.value);}}  value={farrival} placeholder='MM-DD-YY'/>
      
        </span>
        
      </div>
      <div ><span className='flex flex-col sm:flex-row gap-9 py-2'>
      <lable className='font-semibold'>Depture - Date & Time</lable>
        <input className=' rounded-xl px-4'type='date'  name='fdept'  onChange={(e)=>{

setFdept(e.target.value);}}  value={fdept} placeholder='MM-DD-YY'/>
      
        </span>
        
      </div>
      <div>
      <span className='grid grid-cols-2 gap-[14rem] py-4'>
      <lable className='font-semibold'>No. of Adults</lable>
      <lable className='font-semibold'>No. of Child</lable>
       </span>
        <span className=' grid grid-cols-2 gap-4'>
    
      
        <input className='sm:w-[229px] px-4 rounded-xl' type='number' name='fad' value={fad}  onChange={(e)=>{

setFad(e.target.value);}}  placeholder='ex:3'/>
        <input  className='sm:w-[229px] px-4 rounded-xl' type='number' name='fch' value={fch}  onChange={(e)=>{

setFch(e.target.value);}}   placeholder='ex:12'/></span>
      </div>
     
      <div className='grid gap-0'>
        <lable className='py-2 font-semibold'>Do you have any special request?</lable>
        <textarea className='sm:w-[439px] sm:h-[125px] rounded-xl px-4'name='ftext' value={ftext}  onChange={(e)=>{

setFtext(e.target.value);}}  placeholder='type here...'></textarea>
      </div>
      <div className='pb-2'>
        <button onClick={handleSubmit} className='rounded-full w-[7.25rem] font-semibold h-12 bg-slate-300 hover:scale-95'>Submit</button>
      </div>
    </div>
  )
}

export default Reserv
