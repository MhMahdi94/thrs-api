import React, { useState } from 'react'
import { useStateContext } from '../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import FormButton from '../components/FormButton';
import FileInput from '../components/FileInput';
import axiosClient from '../axiosClient';

const PackageAdd = () => {
    const { user, setNotification } = useStateContext();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigation = useNavigate();
    const [formData, setFormData] = useState({
        'name': '',
        'img': '',
        'options': [],
    });
    const [options, setOptions] = useState([{ optionName: "" }]);
    const handleAddPackage = (e) => {
        // setLoading(true);
        e.preventDefault();
        console.log(formData);
        axiosClient.post(`/packages`, formData)
            .then(({ data }) => {

                setLoading(false);
                setNotification('User was successfully created.')
                // return <Navigate to='/users'/>
                 navigation('../packages');
            })
            .catch((err) => {
                setLoading(false);
                setErrors(err.response);
                console.log(errors);
            })
    }
    const handleChangeOptions=(e,index)=>{
        e.preventDefault();
        const {name,value}=e.target;
         const list=[...options];
         list[index][name]=value;
         setOptions(list);
         setFormData({...formData,options:list});
    }
    const handleAddOptions = (e) => {
        e.preventDefault();
        setOptions([...options,{optionName:""}])
    }
    const handleDeleteOptions = (e,index) => {
        e.preventDefault();
        console.log(index);
        const list=[...options];
        list.splice(index,1);
        setOptions(list);
        setFormData({...formData,options:list});
        // setAllowances([...allowances,{allowance:""}])
    }
    return (
        <div>
            <div className="relative p-4 w-full max-w-12xl  h-full  md:h-full">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                            Add Package
                        </h3>
                        <button type="button" onClick={() => navigation('../packages')} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close Form</span>
                        </button>
                    </div>
                    <form onSubmit={handleAddPackage}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-1">
                           
                            <Input
                                label='Name'
                                placeholder='Type Package Name'
                                name='name'
                                type='text'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                            />
                            <FileInput
                                label={'Image'}
                                name={'img'}
                                onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                            />



                        </div>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 items-center">
                            {options.map((option, index) => (

                                <>
                                    <Input
                                        label={'Option'}
                                        name='optionName'
                                        type='text'
                                        value={option.optionName}
                                        onChange={(e) => handleChangeOptions(e, index)}

                                    />
                                    <div className="flex gap-4">
                                        <button onClick={(e) => handleDeleteOptions(e, index)} className="w-24 mt-2 h-10 px-7 py-2.5 text-sm font-medium text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center ">
                                            Delete
                                        </button>
                                        <button onClick={(e) => handleAddOptions(e, index)} className="w-24 mt-2 h-10 px-7 py-2.5 text-sm font-medium text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center ">
                                            Add
                                        </button>

                                    </div>
                                </>
                            ))}

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

export default PackageAdd