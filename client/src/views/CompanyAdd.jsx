import React, { useState } from 'react'
import { useStateContext } from '../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import FormButton from '../components/FormButton';
import LoadingSpinner from '../components/LoadingSpinner';

const CompanyAdd = () => {
    //id:1,name:'Company Name',owner:'Company Owner',email:'mahdy@email.com',subscriptionStart:'1-1-2023',subscriptionEnd:'1-1-2024',status:'Active',createdAt:'1-1-2023'
    const [company, setCompany] = useState({
        'id':null,
        'name': '',
        'email': '',
        'owner': '',
        'noOfDept':0,
        'noOfEmployee':0,
        'subscriptionStart':null,
        'subscriptionEnd':null,
        'status':null,
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigation = useNavigate();
    const { setNotification } = useStateContext();
  
    const handleAddCompany = (e) => {
        setLoading(true);
        e.preventDefault();
        axiosClient.post(`/companies`, company)
            .then(({ data }) => {
                setLoading(false);
                setNotification('Company was successfully created.')
                navigation('../companies');
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
                        Add Company
                    </h3>
                    <button type="button" onClick={() => navigation('../companies')} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close Form</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <form onSubmit={handleAddCompany}>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2">
                        <Input
                            label='Name'
                            placeholder='Type Company Name'
                            name='name'
                            type='text'
                            value={company.name}
                            onChange={(e) => setCompany({ ...company, name: e.target.value })}

                        />
                        <Input
                            label='Owner'
                            placeholder='eg: John doe'
                            name='owner'
                            type='text'
                            value={company.owner}
                            onChange={(e) => setCompany({ ...company, owner: e.target.value })}

                        />
                        <Input
                            label='Email'
                            placeholder='test@example.com'
                            name='email'
                            type='email'
                            value={company.email}
                            onChange={(e) => setCompany({ ...company, email: e.target.value })}

                        />
                        <Input
                            label='Departments No'
                            placeholder='eg: 5'
                            name='departmentNo'
                            type='number'
                            value={company.noOfDept}
                            onChange={(e) => setCompany({ ...company, noOfDept: e.target.value })}

                        />
                        <Input
                            label='Employee No'
                            placeholder='eg: 5'
                            name='employeeNo'
                            type='number'
                            value={company.noOfEmployee}
                            onChange={(e) => setCompany({ ...company, noOfEmployee: e.target.value })}

                        />
                      <Input
                            label='Subscription Date'
                            name='subscriptionDate'
                            placeholder='************************'
                            value={company.subscriptionStart}
                            onChange={(e) => setCompany({ ...company, subscriptionStart: e.target.value })}
                            type='date'
                            required={true}
                        />
                        <Input
                            label='Password'
                            name='password'
                            placeholder='************************'
                            value={company.password}
                            onChange={(e) => setCompany({ ...company, password: e.target.value })}
                            type='password'
                            required={true}
                        />
                        <Input
                            label='Confirm Password'
                            name='confirm_password'
                            placeholder='************************'
                            value={company.password_confirmation}
                            onChange={(e) => setCompany({ ...company, password_confirmation: e.target.value })}
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

export default CompanyAdd