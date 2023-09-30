import React from 'react'

const PackageCard = ({title,items}) => {
  return (
    
    <div class="w-full max-w-sm p-4 bg-red-50 hover:bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8">
        <h5 class="mb-4 text-2xl text-center font-medium text-gray-500 ">{title}</h5>
        {/* <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">49</span>
            <span class="ml-1 text-xl font-normal text-gray-500 ">/month</span>
        </div> */}
        <ul role="list" class="space-y-5 my-7">
            {items.map(item=>(
                <li class="flex space-x-3 items-center">
                    <svg class="flex-shrink-0 w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-base font-normal leading-tight text-gray-500 ">{item.title}</span>
                </li>
            ))}
         
        </ul>
    </div>

  )
}

export default PackageCard