import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import Toast from './Toast';
import Navbar from './Navbar';

const Body = () => {
  const{notification}=useStateContext();

    return(
        
      <div className="p-0 sm:ml-64 bg-gray-50">
        <div className="mt-1">
          <Navbar/>
        {notification && <Toast message={notification}/>}
          {/* <h1 className="mb-6 text-lg font-normal text-gray-500">Hello</h1> */}
        
        <Outlet/>

        </div>
      </div>
    

    );
  
}

export default Body