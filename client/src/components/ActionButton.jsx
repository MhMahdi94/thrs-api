import React from 'react'

const ActionButton = ({icon, onClick}) => {
  return (
      <button onClick={onClick} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2  ">
          {icon}
          {/* <span className="sr-only">Icon description</span> */}
      </button>
  )
}

export default ActionButton