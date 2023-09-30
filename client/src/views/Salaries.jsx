import React, { useEffect, useState } from 'react'
import axiosClient from '../axiosClient'
import ActionButton from '../components/ActionButton';
import NavigateButton from '../components/NavigateButton';
import Select from '../components/Select';
import LoadingSpinner from '../components/LoadingSpinner';

const Salaries = () => {
  const [salaries, setSalaries] = useState([]);
  const [loading, setLoading]=useState(false);
  const headers=['ID','Name','Salary','Allowences','Deduction'];//,'Created At'];
  const months=[
    {'id':1,'name':'January'}, 
    {'id':2,'name':'February'},
    {'id':3,'name':'March'} ,
    {'id':4,'name':'April'} ,
    {'id':5,'name':'May'} ,
    {'id':6,'name':'June'} ,
    {'id':7,'name':'July'} ,
    {'id':8,'name':'August'} ,
    {'id':9,'name':'September'} ,
    {'id':10,'name':'October'} ,
    {'id':11,'name':'November'} ,
    {'id':12,'name':'December'}];
  const getSalaries=()=>{
    setLoading(true);
    axiosClient.get('salaries')
      .then(({data})=>{
        console.log(data);
        setLoading(false);
        setSalaries(data.data);
      })
      .catch((error)=>{
        setLoading(false);
        console.log(error);
      });
  }
  useEffect(() => {
    getSalaries();
  }, []);
  
  return (
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
    {/* <!-- Start coding here --> */}
    <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">

            <div className="w-full md:w-1/2">
                {/* Search */}
                
                    <Select
                                        values={months}
                                        label='Select Month'
                                        name='month'
                                        onChange={(e) => {getSalaries() }}
                                    />
                
            </div>

            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                {loading ? <LoadingSpinner /> : null}
                {/* <NavigateButton to='/new-package' label='Add Package' /> */}
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

                    {loading ? null:
                        salaries.map((salary) => {
                            return (

                                <tr key={salary.id} >
                                    <td className="px-4 py-3">{salary.id}</td>
                                    <td className="px-4 py-3">{salary.user[0].name}</td>
                                    <td className="px-4 py-3">{salary.salary}</td>
                                    <td className="px-4 py-3">{salary.allowences}</td>
                                    <td className="px-4 py-3">{salary.deductions}</td>
                                    
                                    {/* <td className="px-4 py-3">{salary.created_at}</td> */}
                                    <td>
                                    
                                    </td>


                                </tr>)
                        })
                    }




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
                
                {links.last==null?null:<li>
                      <a onClick={()=>console.log(links.last)} className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ">
                          <span className="sr-only">Next</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                      </a>
                  </li>}
            </ul>}
        </nav> */}
    </div>
</div>
  )
}

export default Salaries