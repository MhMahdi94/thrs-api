import React from 'react'

const SectionCard = ({icon,title,subTitle}) => {
  return (
    
        <div className='flex flex-col justify-center items-center h-64 max-w-sm p-6 bg-red-50 border  border-gray-200 rounded-lg shadow hover:bg-gray-100'>
            {icon}
            <a href="#" class="block  text-center ">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600">{title}</h5>
                <p class="font-normal text-gray-500">{subTitle}</p>
            </a>
        </div>
    
  )
}

export default SectionCard