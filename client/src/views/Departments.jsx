import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DeleteModal from '../components/DeleteModal';
import LoadingSpinner from '../components/LoadingSpinner';
import NavigateButton from '../components/NavigateButton';
import axiosClient from '../axiosClient';
import { useStateContext } from '../context/ContextProvider';
import ActionButton from '../components/ActionButton';
import SearchBar from '../components/SearchBar';


const Departments = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [meta, setMeta] = useState();
    const [links, setLinks] = useState();
    const {setNotification}=useStateContext();
    const navigate =useNavigate();
    // const departments=[
    //     {id:1,name:'Department Name',head:'Mohammed Mahdy',email:'mahdy@email.com',start:'1-1-2023',createdAt:'1-1-2023'},
    //     {id:2,name:'Department Name',head:'Mohammed Mahdy',email:'mahdy@email.com',start:'1-1-2023',createdAt:'1-1-2023'},
    //     {id:3,name:'Department Name',head:'Mohammed Mahdy',email:'mahdy@email.com',start:'1-1-2023',createdAt:'1-1-2023'},
    //     {id:4,name:'Department Name',head:'Mohammed Mahdy',email:'mahdy@email.com',start:'1-1-2023',createdAt:'1-1-2023'},
    //     {id:5,name:'Department Name',head:'Mohammed Mahdy',email:'mahdy@email.com',start:'1-1-2023',createdAt:'1-1-2023'},
    //     {id:6,name:'Department Name',head:'Mohammed Mahdy',email:'mahdy@email.com',start:'1-1-2023',createdAt:'1-1-2023'},
    //   ];

  const getDepartments = () => {
    setLoading(true);
    axiosClient.get('/departments')
      .then(({ data }) => {

        console.log(data);
        setDepartments(data.data);
        setMeta(data.meta);
        setLinks(data.links);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        // setLoading(false);
      })
  }
  const onDelete = (department) => {
    console.log(department);
    //  setShowModal(true);
    if (!window.confirm('Are you want to delete this department?')) {
      return;
    }

    axiosClient.delete(`departments/${department.id}`)
      .then(() => {
        setNotification('Department was successfully deleted.')

        getDepartments();
      })
  }

  const searchTable=(e)=>{
    e.preventDefault();
    console.log(e.target.value);
    //return;
     if(e.target.value.length >2){
    setLoading(true);
    axiosClient.post('/departments-search',{search:e.target.value})
      .then(({ data }) => {

        console.log(data);
        setLoading(false);
        
        setLinks(data.links);
        setMeta(data.meta);
        setDepartments(data.data);
        
        
        
        
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        // setLoading(false);
      })
     }else{
      getDepartments();
     }
  
  }


  useEffect(() => {
    getDepartments();
  }, [])
        
  return (
    <div>
    {/* <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"> */}
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        {/* <!-- Start coding here --> */}
        <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
            <h4 className='text-xl font-medium text-gray-900'>Departments</h4>
              {/* <form className="flex items-center" >
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input onChange={searchTable} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2 " placeholder="Search" required="" />
                </div>
              </form> */}
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              {loading && <LoadingSpinner/>}
              <NavigateButton to='/new-department' label='Add Department'/>
            
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-4 py-3">Name</th>
                  {/* <th scope="col" className="px-4 py-3">Head</th> */}
                  
                  {/* <th scope="col" className="px-4 py-3">Created At</th> */}
                  
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {departments.map(department=>{
                  return <tr className="border-b " key={department.id}>
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{department.name}</th>
                  {/* <td className="px-4 py-3">{department.headName}</td> */}
                  
                  {/* <td className="px-4 py-3">{department.created_at}</td> */}
                  
                  <td className="px-4 py-3 flex items-center justify-end">
                      
                      <ActionButton 
                          onClick={()=>navigate(`/edit-department/${department.id}`)} 
                          icon={
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z" />
                          </svg>
                          }
                        
                        />
                        <ActionButton 
                          onClick={()=>onDelete(department)} 
                          icon={
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
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
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">
                  <span className="sr-only">Previous</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              {loading?null:meta.links.slice(1,-1).map(link=>
                            link.url?
                            <li>
                                <a onClick={()=>handlePagination(link)} className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${link.active?'font-semibold':null}`}>{link.label}</a>
                            </li>:null
                        ) }
              <li>
                <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">
                  <span className="sr-only">Next</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    {showModal?  (
    <DeleteModal onClose={()=>setShowModal(false)}/>
    ):null}
    {/* </section> */}
    </div>
  )
}

export default Departments