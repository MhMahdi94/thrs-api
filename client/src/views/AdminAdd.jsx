import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormButton from '../components/FormButton';
import Input from '../components/Input';
import axiosClient from '../axiosClient';
import LoadingSpinner from '../components/LoadingSpinner';
import { useStateContext } from '../context/ContextProvider';

const AdminAdd = () => {
    const [user, setUser] = useState({
        'name': '',
        'companyName':'Admin',
        'email': '',
        'mobileNo': '',
        'password': '',
        'role': 'super',
        'password_confirmation': ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigation = useNavigate();
    const { setNotification } = useStateContext();

    const handleAddAdmin = (e) => {
        setLoading(true);
        e.preventDefault();
        axiosClient.post(`/users`, user)
            .then(({ data }) => {
                setLoading(false);
                setNotification('User was successfully created.')
                navigation('../users');
            })
            .catch((err) => {
                setLoading(false);
                setErrors(err.response);
                console.log(errors);
            })
    }

    const getRoles=()=>{
        axiosClient.get('/roles').then(({data})=>{
            console.log(data);
        }).catch((err)=>{});
    }
    useEffect(() => {
        getRoles();
    }, []);
    
    return (
        <div>
            <div className="relative p-4 w-full max-w-12xl  h-full  md:h-full">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                            Add Admin
                        </h3>
                        <button type="button" onClick={() => navigation('../users')} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close Form</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <form onSubmit={handleAddAdmin}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <Input
                                label='Name'
                                placeholder='Type Admin Name'
                                name='name'
                                type='text'
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}

                            />
                            {/* <Input
                                label='Company Name'
                                placeholder='Type Company Name'
                                name='company'
                                type='text'
                                value={user.companyName}
                                onChange={(e) => setUser({ ...user, companyName: e.target.value })}

                            /> */}
                            <Input
                                label='Mobile No'
                                placeholder='+9xx xxxxxxx'
                                name='mobileNo'
                                type='text'
                                value={user.mobileNo}
                                onChange={(e) => setUser({ ...user, mobileNo: e.target.value })}

                            />
                            <Input
                                label='Email'
                                placeholder='test@example.com'
                                name='email'
                                type='email'
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}

                            />
                            <Input
                                label='Password'
                                name='password'
                                placeholder='************************'
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                type='password'
                                required={true}
                            />
                            <Input
                                label='Confirm Password'
                                name='confirm_password'
                                placeholder='************************'
                                value={user.password_confirmation}
                                onChange={(e) => setUser({ ...user, password_confirmation: e.target.value })}
                                type='password'
                                required={true}
                            />

                        </div>
                        {/* <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add New Admin
                </button> */}
                        {loading ? <LoadingSpinner /> : <FormButton label='Add Admin' />}
                    </form>
                </div>
            </div>


        </div>
    )
}

export default AdminAdd