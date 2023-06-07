import React ,{lazy,Suspense}from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import Header from './components/Header';

// import Facilities from './components/Facilities';
// import About from './components/About'
// import Contact from './components/Contact';
// import Service from './components/Service';
// import Reserv from './components/Reserv';
const root=ReactDOM.createRoot(document.getElementById('root'));

const Layout=lazy(()=> import("./components/Layout"));
const Footer=lazy(()=> import("./components/Footer"));
const Header=lazy(()=> import("./components/Header"));
const Facilities=lazy(()=> import("./components/Facilities"));
const About=lazy(()=> import("./components/About"));
const Contact=lazy(()=> import("./components/Contact"));
const Service=lazy(()=> import("./components/Service"));
const Reserv=lazy(()=> import("./components/Reserv"));
const Home=lazy(()=> import("./components/Home"));


root.render(
  
  <BrowserRouter><Suspense fallback={<h1>Loading....</h1>}>
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

  </Routes></Suspense>
  
  </BrowserRouter>
  
)
