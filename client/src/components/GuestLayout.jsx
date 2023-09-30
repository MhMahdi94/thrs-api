import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import NavbarGuest from './NavbarGuest';
import backgroundImg from '../assets/bg.jpg';
const GuestLayout = () => {
    const {token}=useStateContext();
    if(token){
      return  <Navigate to='/'/> 
    }
  return (
    <div > 
    
        
        <div  className="p-4 h-max bg-gray-200" style={{objectFit:'contain',backgroundSize:'100%', backgroundRepeat:'no-repeat', width:'100%' ,backgroundImage: `url(${backgroundImg})` }}>
        <div className="mt-0">
        <NavbarGuest/>
        <section>
        <div 
          className='w-full h-96   bg-cover bg-no-repeat duration-500 relative'>
          {/* <img class="h-auto w-full object-contain" src={appLogo} alt="image description">
          
        </img>*/}
          <div className="absolute px-4   bg-opacity-60 top-20 left-20 right-0 m-auto text-left flex flex-col gap-5">
            <span className='text-4xl font-bold text-white'>
              tHONTHRON
            </span>
            <span className='text-4xl font-bold text-white'>
              HR Managment System
            </span>
            {/* <p className='text-lg text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec orci laoreet, facilisis quam vel, vulputate odio. Sed sit amet lectus justo. Sed tempor, enim eu pulvinar blandit, nisl nibh pharetra quam, at malesuada leo augue sit amet libero. Vestibulum ipsum libero, sagittis eu orci a, porttitor aliquet erat. Suspendisse potenti. Pellentesque sit amet lectus orci. Nulla placerat leo quis ipsum mollis ultricies. Vivamus in nisl eros. Ut non sapien tempor, maximus est ultrices, egestas tortor.
            </p> */}

          </div>
        </div>

      </section>
        </div> 
        
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default GuestLayout