import React from 'react'
import NavigateButton from '../NavigateButton'
import LoadingSpinner from '../LoadingSpinner'
import ActionButton from '../ActionButton'
import { useNavigate } from 'react-router-dom'
import Indicator from '../Indicator'
import axiosClient from '../../axiosClient'

const Table = ({ actionTitle, actionTo, headers,handlePagination, fields, data,meta,links, loading,onDelete,onUpdate,activate=false }) => {
    const navigation = useNavigate();

    
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
                        <NavigateButton to='/new-admin' label='Add Admin'/>
                        <NavigateButton to={actionTo} label={actionTitle} />
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

                            {loading ? null : data.map((d) => {
                                return (<tr className={`"border-b "`} key={d.id}>
                                    {fields.map(field => <td className="px-4 py-3">{d[field]}</td>)}
                                    <td className="px-4 py-3"><Indicator isActive={d.status==='1'} label={d.status==='1'?'Active':'Not Active'}/></td>
                                    <td>
                                        <ActionButton
                                            icon={
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            }
                                            onClick={() => navigation(`/edit-user/${d.id}`)}

                                        />
                                        <ActionButton
                                            onClick={()=>onDelete(d)}
                                            icon={
                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                                </svg>
                                            }

                                        />
                                        {activate?<ActionButton
                                            onClick={()=>onUpdate(d)}
                                            icon={
                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 2 3 5-5M9 19A18.55 18.55 0 0 1 1 4l8-3 8 3a18.549 18.549 0 0 1-8 15Z"/>
                                                </svg>
                                              }

                                        />:null}
                                    </td>

                                    
                                </tr>)
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

export default Table