import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../axiosClient';
import Input from '../components/Input';
import FormButton from '../components/FormButton';
import LoadingSpinner from '../components/LoadingSpinner';

const UserEdit = () => {
    const { id } = useParams();
    const [user, setUser] = useState({
        'name': '',
        'email': '',
        'mobileNo': '',
        'password': '',
        'password_confirmation': ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigation = useNavigate();
    const { setNotification } = useStateContext();

    const handleEditAdmin = (e) => {
        setLoading(true);
        e.preventDefault();
        axiosClient.put(`users/${id}`, user)
            .then(({ data }) => {
                setLoading(false);
                setNotification('User was successfully updated.');
                navigation('../users');
            })
            .catch((err) => {
                setLoading(false);
                setErrors(err.response);
                console.log(errors);
            })
    }


    useEffect(() => {
        setLoading(true);
        axiosClient.get(`/users/${id}`)
            .then(({ data }) => {
                console.log(data);
                setLoading(false);
                setUser(data);

            })
            .catch((errors) => {
                setLoading(false);
                setErrors(errors.response);
                console.log(errors);
            })
    }, [])
    return (
        <div>
            <div className="relative p-4 w-full max-w-12xl  h-full  md:h-full">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                            Edit User: {user.name}
                        </h3>
                        <button type="button" onClick={() => navigation('../admins')} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close Form</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <form onSubmit={handleEditAdmin}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <Input
                                label='Name'
                                placeholder='Type Admin Name'
                                name='name'
                                type='text'
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                            />
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

                        </div>
                        {/* <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">
                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Edit Admin
                </button> */}
                        {loading ? <LoadingSpinner /> : <FormButton label='Update'/>}
                    </form>
                </div>
            </div>


        </div>
    )
}

export default UserEdit