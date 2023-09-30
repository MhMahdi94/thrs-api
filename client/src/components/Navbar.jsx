import React from 'react'
import { Link } from 'react-router-dom';
import appLogo from "../assets/thrs.jpg";
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../axiosClient';

const Navbar = () => {
  const { token, user ,setUser,setToken} = useStateContext();
  const handleLogout = (e) => {
    e.preventDefault();
    axiosClient.post('/logout').then(()=>{
      console.log('first');
      setUser({});
      setToken(null);
    })
  }

  return (

    <div className='px-5 mt-2 mb-4 bg-gray-100'>
      
<nav class=" shadow-lg shadow-gray-300 border  w-full " >
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between px-10 py-5">
    {/* <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a> */}
     {user && <span className='text-gray-700'>Welcome, {user.name}</span>}
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:flex md:w-auto" id="navbar-default">
   
                <div>

                  {token ? 
                  <button onClick={handleLogout} type="button" className="flex text-gray-700 text-sm rounded-full ml-3" aria-expanded="false" >
                    Sign Out
                  </button>
                   :
                    <div className='  flex ml-3 mr-4'>
                      <Link to='/login' type="button" className="mr-3 flex text-md rounded-full text-white hover:text-red-500" aria-expanded="false" >
                        Login
                      </Link>
                      <Link to='/signup' type="button" className="flex text-md rounded-full text-white hover:text-red-500" aria-expanded="false" >
                        Register
                      </Link>
                    </div>}
                    </div>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar