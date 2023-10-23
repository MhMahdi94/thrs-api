import React from 'react'
import { Link } from 'react-router-dom';
import appLogo from "../assets/thrs.jpg";
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../axiosClient';

const NavbarGuest = () => {
  const { token, user, setUser, setToken } = useStateContext();
  const handleLogout = (e) => {
    e.preventDefault();
    axiosClient.post('/logout').then(() => {
      console.log('first');
      setUser({});
      setToken(null);
    })
  }

  return (

    <div>

      {/* <nav className="bg-transparent w-full">
        <div className=" flex flex-wrap items-center justify-between px-10 py-2">
          <a href="/" className="flex items-center">
            <img src={appLogo} className="h-16 mr-3 rounded-full" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">tHONTHRON HR System</span>
          </a>
          {user && <span className='text-gray-700'>Welcome, {user.name}</span>}
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className=" flex " id="navbar-default">

            <div>

                <div className='  flex ml-3 mr-0'>
                  <Link to='/login' type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-red-200 hover:bg-red-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200" aria-expanded="false" >
                    Login
                  </Link>
                  
                </div>
            </div>
          </div>
        </div>
      </nav> */}


      <nav className="bg-white border-gray-200 dark:bg-red-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
              <img src={appLogo} className="h-8 mr-3  rounded-full" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">tHONTHRON HRMS</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              {/* <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>*/}
              <Link to='/login' type="button" className="block py-2 pl-3 pr-4 text-white rounded bg-red-700  md:border-0 md:hover:text-red-200 md:p-0 " aria-expanded="false" >
                    Login
                  </Link>
              {/* <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li> 
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default NavbarGuest