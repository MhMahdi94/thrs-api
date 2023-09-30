import React, { useRef, useState } from 'react'
import appLogo from '../assets/thrs.jpg';
import Input from '../components/Input';
import axiosClient from '../axiosClient';
import { useStateContext } from '../context/ContextProvider';
import Alert from '../components/Alert';
const Signup = () => {
  const nameRef=useRef();
  const emailRef=useRef();
  const mobileRef=useRef();
  
  const passwordRef=useRef();
  const passwordConfirmationRef=useRef();
  const [errors, setErrors] = useState(null);
  const{setUser,setToken}=useStateContext();
  
  const handleSignUp=(e)=>{
    e.preventDefault();
    const payload={
      name:nameRef.current.value,
      email:emailRef.current.value,
      mobileNo:mobileRef.current.value,
      role:'admin',
      password:passwordRef.current.value,
      password_confirmation:passwordConfirmationRef.current.value,
    }
    console.log(payload);
    debugger;
    axiosClient.post('/signup',payload)
      .then(({data})=>{
        setUser(data.user);
        setToken(data.token);
        setErrors(null);
      })
      .catch((error)=>{
        console.log(error);
        const respone=error.response;
        console.log(respone.data.message);
        if(respone && respone.status===422){
          console.log(respone.data.errors);
          setErrors(respone.data.errors);
        }
      });
  }
  
  
  return (
    <div className="h-screen md:flex ">
      <div
        className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-red-900 to-red-300 i justify-around items-center hidden">
        <div>
          <img src={appLogo} className='h-48 w-48' />
          <h1 className="text-white font-bold text-4xl font-sans">thonThrone</h1>
          <p className="text-white mt-1">All In One</p>
          {/* <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button> */}
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
       
        <form className="bg-white  w-96" onSubmit={handleSignUp}>
          {/* <img src={appLogo} className='h-48 w-48'/> */}
          {errors && <Alert errors={errors}/>}
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Register</h1>

          <Input
            label='Name'
            name='name'
            placeholder='Type Your Name Please'
            inputRef={nameRef}
            type='text'
            required={true}
          />
          <Input
            label='Mobile No'
            name='mobileNo'
            placeholder='+xx xxx xxx xxx'
            inputRef={mobileRef}
            type='text'
            required={true}
          />
          <Input
            label='Email'
            name='email'
            placeholder='user@example.com'
            inputRef={emailRef}
            type='email'
            required={true}
          />
          <Input
            label='Password'
            name='password'
            placeholder='************************'
            inputRef={passwordRef}
            type='password'
            required={true}
          />
          <Input
            label='Confirm Password'
            name='confirm_password'
            placeholder='************************'
            inputRef={passwordConfirmationRef}
            type='password'
            required={true}
          />

          <button className="block w-full bg-red-900 mt-8 py-2 rounded-2xl text-white font-semibold mb-2">Signup</button>
          {/* <span className="text-sm ml-2 hover:text-red-500 cursor-pointer">Forgot Password ?</span> */}
        </form>
      </div>
    </div>
  )
}

export default Signup