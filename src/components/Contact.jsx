import React, { useState } from 'react'
import contact from '../assets/contact.webp'
import axios from 'axios'

function Contact() {
  let [name,setName]=useState('')
  let [email,setEmail]=useState('')
  let [Messege,setMessege]=useState('')

  const handleSubmit=(e)=>{

    if(name.length===0){
      alert('Name has a left blank!');
    }
    else if(email.length===0){
      alert('Email has a left blank!');
    }
    else if(Messege.length===0){
      alert('Messege has a left blank!');
    }
    else{
      const url='http://localhost/php/hotel.php';
      let fData= new FormData();
      fData.append('fname',name);
      fData.append('femail',email);
      fData.append('fMessege',Messege);

      axios.post(url,fData)
      .then(response=>alert(response.data))
      .catch(error=>alert(error));
      setEmail("");
      setMessege("");
      setName("");
    }
  }
  return (
    
    <div className=' container px-4 mx-auto h-screen bg-gradient-to-tr from-slate-400 to-indigo-300 grid-cols-1 grid md:grid-cols-2 justify-center items-center '>
      <img className='sm:h-[550px] ' src={contact}></img>
      <div className='form flex  top-[-216px] sm:top-[-35px] drop-shadow-2xl border-2 border-1  relative flex-col justify-center items-center '>
        <p className='text-black font-extrabold text-4xl flex items-center justify-center py-4'>CONTACT US</p>
        
        <div className='sm:text-3xl rounded-full'>
       <div className='py-2'> <label for="fname" >Name</label><br/>
       <input onChange={(e)=>{
        setName(e.target.value);
       }}className='rounded-full h-[50px] w-[300px] text-2xl sm:h-[65px] sm:w-[345px] px-4'  value={name} type="text" id="fname" name="fname"/><br/>
       </div>
  <div className='py-2'><label for="">Email</label><br/>
  <input onChange={(e)=>{
        setEmail(e.target.value);
      
        }} className='rounded-full h-[50px] w-[300px] sm:w-[345px] sm:h-[65px] px-4 text-2xl' value={email}type="email" id="lname" name="femail" on/></div>
  <div className='py-2'>
  <label className='p' for="lname">Messege</label><br/>
  <textarea onChange={(e)=>{
        setMessege(e.target.value);}} name='fmessege' value={Messege} className='text-2xl rounded-full h-[50px] w-[300px] sm:w-[345px] sm:h-[80px] px-4 py-2'type="text"></textarea></div>
  
        </div>
        <div className='py-2 '>

  <button onClick={handleSubmit}  className=' w-[200px] h-[80px] text-2xl  rounded-full bg-slate-900 hover:scale-95 text-white'>send</button>
        </div></div>
  </div>
  

  )
}

export default Contact
