import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/ContextProvider';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';
import LoadingSpinner from '../components/LoadingSpinner';
import LoadingOverlay from '../components/LoadingOverlay';

const AttendenceDetails = () => {
    const [loading, setLoading] = useState(false);
    const [attendences, setAttendences] = useState([]);
    const [meta, setMeta] = useState();
    const [links, setLinks] = useState();
    const { setNotification } = useStateContext();
    const navigate = useNavigate();
    const { id } = useParams();
    const getAttendences = () => {
        setLoading(true);
        axiosClient.post(`/attendence-employee`,{user_id:id})
            .then(({ data }) => {
                console.log(data);
                
                setAttendences(data.data);
               // setLinks(data.links);
               // setMeta(data.meta);
                setLoading(false);
            })
            .catch(({ error }) => {
                console.log(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        getAttendences();
    }, []);

    return (
        <div>
            {/* <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"> */}
           {<div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                {/* <!-- Start coding here --> */}
                <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">

                            <div class="flex items-center space-x-4">

                                <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                                    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                </div>

                                {loading?null:<div class="font-medium ">
                                    {/* <div>{attendences[0].user[0].name}</div> */}
                                    <div className="">Mohammed Mahdy</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">{/*attendences[0].user[0].email*/}mohdmahdy94@gmail.com</div>
                                </div>}
                            </div>

                            {/* <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 " placeholder="Search" required="" />
                    </div>
                  </form> */}
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            {loading && <LoadingSpinner />}
                            <button type="button" onClick={() => navigate('../attendence')} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close Form</span>
                            </button>
                            {/* <NavigateButton to='/new-employee' label='Add Employee'/> */}
                        </div>

                    </div>
                   <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      {/* <th scope="col" className="px-4 py-3">Id</th> */}
                      <th scope="col" className="px-4 py-3">Date</th>
                      <th scope="col" className="px-4 py-3">Check In</th>
                      <th scope="col" className="px-4 py-3">Check Out</th>
                      
                      
                    </tr>
                  </thead>
                   {loading? null:<tbody>
                    {attendences.map(attendence=>{
                      return <tr className="border-b " key={attendence.id}>
                      {/* <td className="px-4 py-3">{attendence.id}</td> */}
                      <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{attendence.date}</td>
                      <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{attendence.check_in}</td>
                      <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{attendence.check_out}</td>
                      
                      
                      
                    </tr>
                    })}
                    
                   
                   
                  </tbody>}
                </table>
              </div> 

                </div>
            </div>}
        </div>
    )
}

export default AttendenceDetails