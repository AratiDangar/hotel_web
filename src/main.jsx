import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';

import Facilities from './components/Facilities';
import About from './components/About'
import Contact from './components/Contact';
import Service from './components/Service';
import Reserv from './components/Reserv';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <BrowserRouter>
  <Routes>
 
  
<Route path='/' element={<Layout/>} >
<Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Service' element={<Service/>}/>
  <Route path='/Reservation' element={<Reserv/>}/>
  <Route index element={<Home/>}></Route>
  <Route path='/Facilities' element={<Facilities/>}/>
  <Route path='/Footer' element={<Footer/>}></Route>
  <Route path='/Header' element={<Header/>}></Route>

 
 
</Route>

  </Routes>
  
  </BrowserRouter>
  
)
