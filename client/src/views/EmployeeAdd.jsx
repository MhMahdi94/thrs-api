import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input';
import FormButton from '../components/FormButton';
import LoadingSpinner from '../components/LoadingSpinner';
import axiosClient from '../axiosClient';
import Select from '../components/Select';
import FileInput from '../components/FileInput';
import { useStateContext } from '../context/ContextProvider';

const EmployeeAdd = () => {
    const navigation = useNavigate();
    const [step, setStep] = useState(0);
    const [userId, setUserId] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const { user, setNotification } = useStateContext();
    const handleAddEmployee = (e) => {
        e.preventDefault();
        
        setFormData({...formData,allInfo:allInfo,allowances:allowances,infoData:infoData});
       console.log(formData);
       console.log(allInfo);
       console.log(allowances);
         setLoading(true);
       // if (step == 0) {
        // console.log(formData);
            axiosClient.post(`/employees`, formData)
                .then(({ data }) => {
console.log(data);
                    setLoading(false);
                   // setStep(1);
                   setNotification('Employee was successfully created.')
                    
                   // setinfoData({ ...infoData, user_id: data.id });
                  //  setUserId(data.id);
                    // return <Navigate to='/users'/>
                     navigation('../employees');
                })
                .catch((err) => {
                    setLoading(false);
                    setErrors(err.response);
                    // setNotification('Error Occured')
                    console.log(errors);
                })
        // }
        // else if (step == 1) {
        //     // console.log(infoData);    // setStep(2);
        //     // setAllInfo(allInfo);
        //     // console.log(allowances);
        //     // console.log(allInfo);
           
                     
        //     axiosClient.post(`/employees`, infoData)
        //         .then(({ data }) => {
        //             console.log(data.user_id)
        //             setAllInfo({...allInfo,user_id:data.user_id});
        //             console.log(allInfo);
        //             axiosClient.post('/allowences',allInfo)
        //             .then(({data})=>{
        //                 console.log(data);
        //                 setLoading(false);
        //                 // setStep(2);
        //                 setNotification('Employee was successfully created.');
        //                 navigation('../employees');
        //             })
        //             .catch((error)=>{
        //                 console.log(error);
                    
        //             })
        //             })
        //         .catch((err) => {
        //             setLoading(false);
        //             setErrors(err.response);
        //             // setNotification('Error Occured')
        //             console.log(errors);
        //         })
        // }
        // else if (step == 2) { }
        console.log(step)
    }
    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'user_id':user.id,
        'mobileNo': '',
        'companyName': 'N/A',
        'password': '',
        'role': 'employee',
        'password_confirmation': '',
        'allowances':[],
        'allInfo':'',
        'infoData':{},
    });

    const [infoData, setinfoData] = useState({
        'jobTitle': '',
        'jobType': '',
        'company_id': user.id,
        'user_id': '',
        'dept_id': '',
        'salary': 'employee',
        'status': false,//''
    });

    const jobTypeSelect = [
        { 'id': 1, 'name': 'Full Time' },
        { 'id': 2, 'name': 'Part Time' },
        { 'id': 3, 'name': 'Hybrid' },
        { 'id': 4, 'name': 'Remotly' },
    ];
    const departments = [
        { 'id': 1, 'name': 'Department 1' },
        { 'id': 2, 'name': 'Department 2' },
        { 'id': 3, 'name': 'Department 3' },
        { 'id': 4, 'name': 'Department 4' },
    ];

    const [allowances, setAllowances] = useState([{allName:"",allVal:0}]);
    // console.log(allowances);
    const handleAllownces = (e) => {
        e.preventDefault();
        setAllowances([...allowances,{allName:"",allVal:0}])
    }
    const handleDeleteAllownces = (e,index) => {
        e.preventDefault();
        console.log(index);
        const list=[...allowances];
        list.splice(index,1);
        setAllowances(list);
        // setAllowances([...allowances,{allowance:""}])
    }

    const [allInfo, setAllInfo] = useState({
        'user_id':0,
        'allowances':[],
    });
    const handleChangeAllowance=(e,index)=>{
        e.preventDefault();
        const {name,value}=e.target;
         const list=[...allowances];
         list[index][name]=value;
         setAllowances(list);
         setFormData({...formData,allowances:list});
         setAllInfo({...allInfo,allowances:list,user_id:userId});
    }
    return (
        <div>
            <div className="relative p-4 w-full max-w-12xl  h-full  md:h-full">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                            Add Employee
                        </h3>
                        <button type="button" onClick={() => navigation('../employees')} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close Form</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}

                    {/* <ol className="flex items-center w-full p-3 mb-4 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  sm:p-4 sm:space-x-4">
                        <li className={`flex items-center ${step == 0 ? 'text-red-700' : null} `}>
                            <span className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border ${step == 0 ? 'border-red-600' : 'border-gray-400'} rounded-full shrink-0`}>
                                1
                            </span>
                            Personal <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                            <svg className="w-3 h-3 ml-2 sm:ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                            </svg>
                        </li>
                        <li className={`flex items-center ${step == 1 ? 'text-red-700' : null} `}>
                            <span className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border ${step == 1 ? 'border-red-600' : 'border-gray-400'} rounded-full shrink-0`}>
                                2
                            </span>
                            Employment <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                        </li>
                        
                    </ol> */}

                    <form onSubmit={handleAddEmployee}>
                        {/* user info */}
                        {/* {step == 0 ? */}
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <Input
                                    label='Name'
                                    placeholder='Type Employee Name'
                                    name='name'
                                    type='text'
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                                />
                                {/* <Input
                            label='Company Name'
                            placeholder='Type Company Name'
                            name='companyName'
                            type='text'
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}

                        /> */}
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
                             {/* : null}  */}
                        {/* employee info */}
                        {/* {step == 1 ? */}
                            <>
                                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                    <Input
                                        label='Job Title'
                                        placeholder='ex: Sales Engineer'
                                        name='jobTitle'
                                        type='text'
                                        value={infoData.jobTitle}
                                        onChange={(e) => { setinfoData({ ...infoData, jobTitle: e.target.value });setFormData({...formData,infoData:infoData});}}

                                    />


                                    <Select
                                        values={jobTypeSelect}
                                        label='Select Job Type'
                                        name='jobType'
                                        onChange={(e) => { setinfoData({ ...infoData, jobType: e.target.value });setFormData({...formData,infoData:infoData});}}
                                    />
                                    <Select
                                        values={departments}
                                        name='departments'
                                        label='Select Deparment'
                                        onChange={(e) => { setinfoData({ ...infoData, dept_id: e.target.value });setFormData({...formData,infoData:infoData});}}
                                    />

                                    <FileInput
                                        label='Upload ID'
                                        name='idCard'
                                        onChange={(e) => console.log(e.target.value)}
                                    />
                                    <FileInput
                                        label='Upload CV'
                                        name='idCard'
                                        onChange={(e) => console.log(e.target.value)}
                                    />

                                </div>
                                <div className="grid gap-4 mb-4 sm:grid-cols-6 items-center">
                                    <div className="col-span-5">
                                        <Input
                                            label='Salary'
                                            placeholder='ex: 5000 SDG'
                                            name='salary'
                                            type='number'
                                            value={infoData.salary}
                                            onChange={(e) => { setinfoData({ ...infoData, salary: e.target.value });setFormData({...formData,infoData:infoData});}}

                                        />

                                    </div>
                                    <div className="">
                                        <button onClick={handleAllownces} className="mt-2.5 px-2 py-2.5 text-sm font-medium text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center ">
                                            {/* <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> */}
                                            Add Allowance
                                        </button>
                                    
                                    </div>
                                    
                                </div>

                                <div className="grid gap-4 mb-4 sm:grid-cols-3 items-center">
                                    {allowances.map((allowance,index)=>(
                                      
                                      <>
                                      <Input
                                        label={'Allowance'}
                                        placeholder='ex: Transportation'
                                        name='allName'
                                        type='text'
                                         value={allowance.name}
                                        onChange={(e) => handleChangeAllowance(e,index)}

                                    />
                                    <Input
                                        label={'Value'}
                                        placeholder='ex: 500SDG'
                                        name='allVal'
                                        type='number'
                                        value={allowance.value}
                                        onChange={(e) => handleChangeAllowance(e,index)}

                                    />
                                    <button onClick={(e)=>handleDeleteAllownces(e,index)} className="w-24 mt-2 h-10 px-7 py-2.5 text-sm font-medium text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center ">
                                        {/* <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> */}
                                        Delete
                                    </button>
                                    </>
                                    ))}
                                    </div>
                            </> 
                            {/* : null}  */}
                        {/* documents */}
                        {/* {step == 2 ? <div className="grid gap-4 mb-4 sm:grid-cols-1">
                            <Input
                                label='Salary'
                                placeholder='ex: 1000 SDG'
                                name='salary'
                                type='number'
                                value={infoData.salary}
                                onChange={(e) => setinfoData({ ...infoData, salary: e.target.value })}
                            />
                            

                        </div> : null} */}
                        {loading ? <LoadingSpinner /> : <FormButton label='Next' />}
                    </form>
                </div>
            </div>


        </div>
    )
}

export default EmployeeAdd