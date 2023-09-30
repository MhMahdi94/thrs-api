import React from 'react'
import StatCard from '../components/StatCard'
import Stats from '../components/Stats'
import { useStateContext } from '../context/ContextProvider';
import Indicator from '../components/Indicator';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useStateContext();
  const navigate=useNavigate();
  return (
    <div className='bg-gray-100 '>
      <Stats />

      {
        user.role == 'super' ?
          <div className="px-10 flex flex-wrap justify-between justify-items-center">
            <div className="flex-1">


              <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 ">Latest Companies</h5>
                  {/* <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a> */}
                </div>
                <div class="flow-root">
                  <ul role="list" class="divide-y divide-gray-200 ">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Company 1
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">

                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Company 2
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">

                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Compnay 3
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">

                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>


            </div>
            <div className="flex-1">
              <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 ">Latest Companies</h5>
                  {/* <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a> */}
                </div>
                <div class="flow-root">
                  <ul role="list" class="divide-y divide-gray-200 ">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Company 1
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">

                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Company 2
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">

                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Compnay 3
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">

                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          : <div className="px-10 ml-10 flex flex-wrap justify-between justify-items-center">
            <div className="flex-1">

              <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 ">Latest Employees</h5>
                  <button onClick={()=>(navigate('/employees'))} className=" px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center ">
                      {/* <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> */}
                      View all
                  </button>
                  {/* <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                      
                  </a> */}
                </div>
                <div class="flow-root">
                  <ul role="list" class="divide-y divide-gray-200">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Neil Sims
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                          <Indicator isActive={true} label='Active'/>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Bonnie Green
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        <Indicator isActive={false} label='Not Active'/>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Michael Gough
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        <Indicator isActive={true} label='Active'/>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Lana Byrd
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        <Indicator isActive={true} label='Active'/>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Thomes Lean
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        <Indicator isActive={false} label='Not Active'/>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="flex-1 mb-10">
            <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 ">Latest Employees</h5>
                  <button onClick={()=>(navigate('/employees'))} className=" px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center ">
                      {/* <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> */}
                      View all
                  </button>
                  {/* <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                      
                  </a> */}
                </div>
                <div class="flow-root">
                  <ul role="list" class="divide-y divide-gray-200">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Neil Sims
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                          <Indicator isActive={true} label='Active'/>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Bonnie Green
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        <Indicator isActive={false} label='Not Active'/>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Michael Gough
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        <Indicator isActive={true} label='Active'/>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Lana Byrd
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        <Indicator isActive={true} label='Active'/>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center space-x-4">

                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                            Thomes Lean
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        <Indicator isActive={false} label='Not Active'/>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Dashboard