import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from '../components/Select';
import Input from '../components/Input';
import axiosClient from '../axiosClient';
import LoadingSpinner from '../components/LoadingSpinner';
import FormButton from '../components/FormButton';
import { useStateContext } from '../context/ContextProvider';

const DepartmentAdd = () => {
    const navigation= useNavigate();
    const [loading, setLoading] = useState(false);
    const [employees, setEmployees] = useState([]);
    const {user}=useStateContext();
    const [authCheck, setAuthCheck]=useState(false);
    const [formData, setFormData] = useState({
        'name': '',
        'head': 0,
        'auth':{'attendence':0},
        'company_id':user.id
    });
    const getEmployees=()=>{
        setLoading(true);
        axiosClient.get('/employees')
          .then(({data})=>{
         
            console.log(data.data);
            setEmployees(data.data);
            setLoading(false);
          })
          .catch((error)=>{
            console.log(error);
            setLoading(false);
            // setLoading(false);
          })
        }
    useEffect(() => {
        getEmployees();
    }, [])
    const handleAddDeparment=(e)=>{
        e.preventDefault();
        console.log(formData);
       // return;
        setLoading(true);
        
        axiosClient.post('/departments',formData)
        .then(({data})=>{
            setLoading(false);
            console.log(data);
            navigation('../departments');
        })
        .catch(
            (error)=>{
                setLoading(false);
                console.log(error);
            }
        )
    }

    const attendenceCheck=(e)=>{
        //e.preventDefault();
        console.log(e.target.checked);
        setFormData({...formData,auth:{attendence:e.target.checked}})
        setAuthCheck(e.target.checked);
    };
  return (
    <div>
        <div className="relative p-4 w-full max-w-12xl  h-full  md:h-full">
        {/* <!-- Modal content --> */}
        <div className="relative p-4 bg-white rounded-lg shadow  sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
                <h3 className="text-lg font-semibold text-gray-900 ">
                    Add Deparment
                </h3>
                <button type="button" onClick={()=>navigation('../departments')} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  " data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close Form</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={handleAddDeparment}>
                <div className="grid gap-4 mb-4 sm:grid-cols-1">
                    
                          <Input
                              label='Deparment Name'
                              placeholder='ex: HR Department'
                              name='name'
                              type='text'
                              value={formData.name}
                              onChange={(e) => setFormData({...formData,name:e.target.value})}

                          />
                          <Select
                              values={employees}
                              label='Select Department Head'
                              name='head'
                              value={formData.user_id}
                              onChange={(e) => setFormData({...formData,head:e.target.value}) }
                          />
                    {/* <div>
                        <label for="head" className="block mb-2 text-sm font-medium text-gray-900 ">Head</label>
                        <select id="head" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                            <option value="">Select Head</option>
                            <option value="1">Mohammed Mahdy</option>
                            <option value="2">Braa Difallah</option>
                            
                        </select>
                    </div> */}
                    <div className="flex items-center">
                        <input id="default-checkbox" onChange={attendenceCheck} type="checkbox"  checked={authCheck} className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500  focus:ring-2"/>
                        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">Attendence Authority</label>
                    </div>
                    
                </div>
                {loading ? <LoadingSpinner /> : <FormButton label='Next' />}
            </form>
        </div>
    </div>

       
    </div>
  )
}

export default DepartmentAdd