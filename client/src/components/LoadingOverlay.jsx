

import React from 'react'

const LoadingOverlay = () => {
    const size=100;
  return (
    <div className="w-full  flex flex-col justify-center items-center h-full bg-white mx-auto my-auto">
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className="animate-spin">
      <div className="h-full w-full border-4 border-t-red-500
       border-b-red-700 rounded-[50%]">
      </div>

      
    </div>
    <div className='animate-pulse text-4xl font-semibold text-gray-900 mt-4'>Loading ...</div>
  </div>
  )
}

export default LoadingOverlay