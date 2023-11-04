import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';
import LoadingSpinner from '../components/LoadingSpinner';
import ActionButton from '../components/ActionButton';

const Leave = () => {
  const url = window.location.pathname;
  const [loading, setLoading] = useState(false);
  const [attendences, setAttendences] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [meta, setMeta] = useState();
  const [links, setLinks] = useState();
  const {setNotification}=useStateContext();
  const navigate =useNavigate();

  const getLeaves = () => {
    setLoading(true);
    axiosClient.get('/admin/leave-request')
      .then(({ data }) => {
        console.log(data);
         setLoading(false);
        // setLinks(data.links);
        // setMeta(data.meta);
        setLeaves(data.data);
        
        
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        // setLoading(false);
      })
  }

  useEffect(() => {
    getLeaves();
  }, [])


  return (
    <div>
    {/* <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"> */}
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        {/* <!-- Start coding here --> */}
        <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            {/* <div className="w-full md:w-1/2">
              <form className="flex items-center" >
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input onChange={searchTable} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2 " placeholder="Search" required="" />
                </div>
              </form>
            </div> */}
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              {loading && <LoadingSpinner/>}
              {/* <NavigateButton to='/new-leave' label='Add leave'/> */}
            </div>
            
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  {/* <th scope="col" className="px-4 py-3">Id</th> */}
                  <th scope="col" className="px-4 py-3">Name</th>
                  <th scope="col" className="px-4 py-3">From</th>
                  <th scope="col" className="px-4 py-3">To</th>
                  <th scope="col" className="px-4 py-3">Reason</th>
                  <th scope="col" className="px-4 py-3"> </th>
                  
                </tr>
              </thead>
              <tbody>
                {leaves.map(leave=>{
                  return <tr className="border-b " key={leave.id}>
                  {/* <td className="px-4 py-3">{leave.id}</td> */}
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{leave.user.name}</th>
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{leave.startLeave}</th>
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{leave.endLeave}</th>
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{leave.reason}</th>
                  <td className="px-4 py-3 flex items-center justify-start">
                     
                       <ActionButton 
                          onClick={()=>navigate(`/attendence-details/${leave.id}`)} 
                          icon={
                            <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                         
                          }
                        
                        />
                        <ActionButton 
                          onClick={()=>navigate(`/attendence-details/${leave.id}`)} 
                          icon={
                            <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                         
                          }
                        
                        />
                  </td>
                </tr>
                })}
                
               
               
              </tbody>
            </table>
          </div>
          {/* <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 ">
                        Showing
                        <span className="font-semibold text-gray-900 ">{meta.from}-{meta.to}</span>
                        of
                        <span className="font-semibold text-gray-900 ">{meta.total}</span>
                    </span>
                    {meta.last_page==1?null:<ul className="inline-flex items-stretch -space-x-px mr-6">
                        {links.prev==null?null:<li>
                            <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">
                                <span className="sr-only">Previous</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>}
                         {loading?null:meta.links.slice(1,-1).map(link=>
                            link.url?
                            <li>
                                <a onClick={()=>handlePagination(link)} className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${link.active?'font-semibold':null}`}>{link.label}</a>
                            </li>:null
                        ) }
                       
                       
                    </ul>}
                </nav> */}
        </div>
        {/* {showModal?<DeleteModal onClose={()=>setShowModal(false)}/>:null} */}
      </div>
    {/* </section> */}
    </div>
  )
}

export default Leave