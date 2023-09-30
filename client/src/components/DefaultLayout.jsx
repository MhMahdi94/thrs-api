import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Body from './Body';
import axiosClient from '../axiosClient';
import Toast from './Toast';
import LoadingOverlay from './LoadingOverlay';

const DefaultLayout = () => {
  const{currentUser,token, setUser,notification}=useStateContext();
const [loading, setLoading] = useState(true)
  if(!token){
    return <Navigate to='/startup'/>
  }


  useEffect(() => {
    setLoading(true);
    axiosClient.get('/user')
    .then(({data})=>{
      setLoading(false);
      setUser(data);
    })
  }, [])
  

  return (
    <div style={{ height:'100vh' }}>
      {/* <Navbar/> */}
      {
        loading?<LoadingOverlay/>:
        <>
          <Sidebar/>
          <Body/>
        </>
      }
      
     
    </div>
  )
}

export default DefaultLayout