import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import NavbarGuest from './NavbarGuest';
import backgroundImg from '../assets/18959.jpg';
const GuestLayout = () => {
    const {token}=useStateContext();
    if(token){
      return  <Navigate to='/'/> 
    }
  return (
    <div > 
    
    <NavbarGuest/>
    {/* <div  className="p-4 h-max bg-gray-200" style={{objectFit:'cover',backgroundSize:'100%', backgroundRepeat:'no-repeat', width:'100%' ,backgroundImage: `url(${backgroundImg})` }}>
        <div className="mt-0">
        
        <section>
        <div 
          className='w-full h-96   bg-cover bg-no-repeat duration-500 relative'>
        
          <div className="absolute px-4   bg-opacity-60 top-20 left-20 right-0 m-auto text-left flex flex-col gap-5">
            <span className='text-4xl font-bold text-white'>
              tHONTHRON
            </span>
            <span className='text-4xl font-bold text-white'>
              HR Managment System
            </span>
            

          </div>
        </div>

      </section>
        </div> 
        
      </div> */}
      <div className="flex flex-row mt-2 justify-center">
        <div className="div flex-initial w-full flex flex-col content-around px-20 py-36">
        <span className='text-6xl font-bold text-red-700 text-start'>
              HR Solutions <br/>for your business
            </span>
            <span className='text-2xl font-bold text-gray-400 mt-10 text-start'>
            Experience seamless HR management with our integrated platform. From recruitment to retirement, we've got your workforce covered. Dive into a system designed for efficiency, transparency, and growth.
            </span>
        </div>
        <div className="div flex-initial w-full">
          <img src={backgroundImg} style={{ width:'100%',  }} alt="" />
        </div>
      </div>
         
        
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default GuestLayout