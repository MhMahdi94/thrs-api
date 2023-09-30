import React, { useState } from 'react'
import Input from '../components/Input'
import LoadingSpinner from '../components/LoadingSpinner';
import FormButton from '../components/FormButton';
import { useStateContext } from '../context/ContextProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';

const UserAdd = () => {
    const {user,setNotification}=useStateContext();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigation = useNavigate();
    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'mobileNo': '',
        'companyName':'',
        'password': '',
        'role': 'admin',
        'password_confirmation': ''
    });
    console.log(formData);
    const handleAddUser = (e) => {
        setLoading(true);
        e.preventDefault();
        axiosClient.post(`/users`, formData)
            .then(({ data }) => {
                
                setLoading(false);
                setNotification('User was successfully created.')
                // return <Navigate to='/users'/>
                 navigation('../users');
            })
            .catch((err) => {
                setLoading(false);
                setErrors(err.response);
                console.log(errors);
            })
    }
  return (
    <div>
            <div className="relative p-4 w-full max-w-12xl  h-full  md:h-full">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                            Add User
                        </h3>
                        <button type="button" onClick={() => navigation('../users')} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close Form</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    
                    <form onSubmit={handleAddUser}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            {/* <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type Admin Name" required=""/>
                    </div> */}
                            <Input
                                label='Name'
                                placeholder='Type Owner Name'
                                name='name'
                                type='text'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                            />
                            <Input
                                label='Company Name'
                                placeholder='Type Company Name'
                                name='companyName'
                                type='text'
                                value={formData.companyName}
                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}

                            />
                            <Input
                                label='Mobile No'
                                placeholder='+9xx xxxxxxx'
                                name='mobileNo'
                                type='text'
                                value={formData.mobileNo}
                                onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}

                            />
                            <Input
                                label='Email'
                                placeholder='test@example.com'
                                name='email'
                                type='email'
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                            />
                            <Input
                                label='Password'
                                name='password'
                                placeholder='************************'
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                type='password'
                                required={true}
                            />
                            <Input
                                label='Confirm Password'
                                name='confirm_password'
                                placeholder='************************'
                                value={formData.password_confirmation}
                                onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                                type='password'
                                required={true}
                            />

                        </div>
                        {/* <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add New Admin
                </button> */}
                        {loading ? <LoadingSpinner /> : <FormButton label='Submit' />}
                    </form>
                </div>
            </div>


        </div>
  )
}

export default UserAdd