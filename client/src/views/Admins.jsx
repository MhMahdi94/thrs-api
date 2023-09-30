import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import DeleteModal from '../components/DeleteModal';
import axiosClient from '../axiosClient';
import LoadingSpinner from '../components/LoadingSpinner';
import NavigateButton from '../components/NavigateButton';
import ActionButton from '../components/ActionButton';
import Toast from '../components/Toast';
import { useStateContext } from '../context/ContextProvider';

const Admins = () => {
  const navigate=useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [users,setUsers]=useState([]);
  const [meta,setMeta]=useState([]);
  const [links,setLinks]=useState([]);
  const [loading, setLoading]=useState(false);
  const {setNotification}=useStateContext();


  const admins=[
    {id:1,name:'Mohammed Mahdy',email:'mahdy@email.com',mobileNo:'09123123123',createdAt:'1-1-2023'},
    {id:2,name:'Mohammed Mahdy',email:'mahdy@email.com',mobileNo:'09123123123',createdAt:'1-1-2023'},
    {id:3,name:'Mohammed Mahdy',email:'mahdy@email.com',mobileNo:'09123123123',createdAt:'1-1-2023'},
    {id:4,name:'Mohammed Mahdy',email:'mahdy@email.com',mobileNo:'09123123123',createdAt:'1-1-2023'},
    {id:5,name:'Mohammed Mahdy',email:'mahdy@email.com',mobileNo:'09123123123',createdAt:'1-1-2023'},
    {id:6,name:'Mohammed Mahdy',email:'mahdy@email.com',mobileNo:'09123123123',createdAt:'1-1-2023'},
  ];
  const getUsers=()=>{
    setLoading(true);
    axiosClient.get('/users')
      .then(({data})=>{
        setLoading(false);
        console.log(data.links);
        console.log(data.meta);
        setUsers(data.data);
        setLinks(data.links);
        setMeta(data.meta);
      })
      .catch((error)=>{
        setLoading(false);
      })
    }
    

    useEffect(() => {
      getUsers();
    }, [])
 
    const onDelete=(admin)=>{
      console.log(admin);
       setShowModal(true);
      if(!window.confirm('Are you want to delete this admin?')){
        return;
      }

      axiosClient.delete(`users/${admin.id}`)
        .then(()=>{
          setNotification('User was successfully deleted.')

          getUsers();
        })
    }
    return (
    <div className=''>
        <div className=" max-w-screen-xl px-4 lg:px-12">
          {/* <!-- Start coding here --> */}
          <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2 " placeholder="Search" required="" />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                {loading && <LoadingSpinner/>}
                {/* <Link to='/new-admin' className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center  ">
                  <svg className="w-3.5 h-3.5 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                  </svg>
                  Add Admin
                </Link> */}
                <NavigateButton to='/new-admin' label='Add Admin'/>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <tr>
                  <th scope="col" className="px-4 py-3">ID</th>
                    <th scope="col" className="px-4 py-3">Name</th>
                    <th scope="col" className="px-4 py-3">Email</th>
                    <th scope="col" className="px-4 py-3">Mobile No</th>
                    <th scope="col" className="px-4 py-3">Created At</th>
                    
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(admin=>{
                    return <tr className="border-b " key={admin.id}>
                    <td className="px-4 py-3">{admin.uid}</td>
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{admin.name}</th>
                    <td className="px-4 py-3">{admin.email}</td>
                    <td className="px-4 py-3">{admin.mobileNo}</td>
                    <td className="px-4 py-3">{admin.created_at}</td>
                    
                    <td className="px-4 py-3 flex items-center justify-end">
                        
                        <ActionButton 
                          onClick={()=>navigate(`/edit-admin/${admin.id}`)} 
                          icon={
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z" />
                          </svg>
                          }
                        
                        />
                        <ActionButton 
                          onClick={()=>onDelete(admin)} 
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
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
              <span className="text-sm font-normal text-gray-500 ">
                Showing
                <span className="font-semibold text-gray-900 ">{meta.from}-{meta.to}</span>
                of
                <span className="font-semibold text-gray-900 ">{meta.total}</span>
              </span>
              {meta.last_page==1?null:<ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700    ">
                    <span className="sr-only">Previous</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700    ">1</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700    ">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700   ">3</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700    ">...</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700    ">100</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700    ">
                    <span className="sr-only">Next</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>}
            </nav>
          </div>
        </div>
        {/* {showModal?<DeleteModal onClose={()=>setShowModal(false)}/>:null} */}
                
    </div>
  )
}

export default Admins