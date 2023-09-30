import React, { useEffect, useState } from 'react'
import axiosClient from '../axiosClient';
import LoadingSpinner from '../components/LoadingSpinner';
import ActionButton from '../components/ActionButton';
import { useStateContext } from '../context/ContextProvider';
import Indicator from '../components/Indicator';

const NewRequests = () => {
    const [requests,setNewRequests]=useState([]);
    const [meta,setMeta]=useState([]);
    const [links,setLinks]=useState([]);
    const [loading, setLoading]=useState([]);
    const {setNotification}=useStateContext();
    const headers=['ID','Name','Owner','Address','Email','Mobile No','Employees','Depatments','Created At', 'status', 'Actions'];
    const getRequest=()=>{
        setLoading(true);
        axiosClient.get('/new-request')
            .then(({data})=>{
                setLoading(false);
                setNewRequests(data.data);
                setMeta(data.meta);
                setLinks(data.links);
                console.log(data);
            })
            .catch((error)=>{
                setLoading(false);
                console.log(error);
            })
    }
    useEffect(() => {
      getRequest();
    
    }, [])
    const onDelete=(request)=>{
         console.log(request);
        //  setShowModal(true);
        if(!window.confirm('Complete Request Process?')){
          return;
        }
  
        axiosClient.put(`new-request/${request.id}`,request)
          .then(()=>{
            setNotification('Successfully')
  
            getRequest();
          })
      }
  return (
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          {/* <!-- Start coding here --> */}
          <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">

                  <div className="w-full md:w-1/2">
                      {/* Search */}
                      <form className="flex items-center">
                          <label for="simple-search" className="sr-only">Search</label>
                          <div className="relative w-full">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                  </svg>
                              </div>
                              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2    " placeholder="Search" required="" />
                          </div>
                      </form>
                  </div>

                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                      {loading ? <LoadingSpinner /> : null}
                      {/* <NavigateButton to={actionTo} label={actionTitle} /> */}
                  </div>
              </div>
              <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                          <tr>
                              {headers.map(header => <th scope="col" className="px-4 py-3">{header}</th>)}
                          </tr>
                      </thead>
                      <tbody>

                          {loading ? null :
                              requests.map((request) => {
                                  return (

                                      <tr key={request.id} >
                                          <td className="px-4 py-3">{request.id}</td>
                                          <td className="px-4 py-3">{request.name}</td>
                                          <td className="px-4 py-3">{request.owner}</td>
                                          <td className="px-4 py-3">{request.address}</td>
                                          <td className="px-4 py-3">{request.email}</td>
                                          <td className="px-4 py-3">{request.mobileNo}</td>
                                          <td className="px-4 py-3">{request.noOfEmployee}</td>
                                          <td className="px-4 py-3">{request.noOfDepts}</td>
                                          <td className="px-4 py-3">{request.created_at}</td>
                                          <td className="px-4 py-3"><Indicator isActive={request.status} label={request.status ? 'completed' : 'waiting'} /> </td>
                                          <td>
                                              <ActionButton
                                                  icon={
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                      </svg>


                                                  }
                                                  onClick={() => onDelete(request)}

                                              />

                                          </td>


                                      </tr>)
                              })
                          }




                      </tbody>
                  </table>
              </div>
              <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                  <span className="text-sm font-normal text-gray-500 ">
                      Showing
                      <span className="font-semibold text-gray-900 ">{meta.from}-{meta.to}</span>
                      of
                      <span className="font-semibold text-gray-900 ">{meta.total}</span>
                  </span>
                  {meta.last_page == 1 ? null : <ul className="inline-flex items-stretch -space-x-px mr-6">
                      {links.prev == null ? null : <li>
                          <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">
                              <span className="sr-only">Previous</span>
                              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                              </svg>
                          </a>
                      </li>}
                      {loading ? null : meta.links.slice(1, -1).map(link =>
                          link.url ?
                              <li>
                                  <a onClick={() => handlePagination(link)} className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${link.active ? 'font-semibold' : null}`}>{link.label}</a>
                              </li> : null
                      )}
                      {/* <li>
                            <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700   ">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">...</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">100</a>
                        </li> */}
                      {/* {links.last==null?null:<li>
                            <a onClick={()=>console.log(links.last)} className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>} */}
                  </ul>}
              </nav>
          </div>
      </div>
  )
}

export default NewRequests