import React from 'react'

const Indicator = ({ isActive, label }) => {
  return (
    <span class={`w-max inline-flex items-center ${isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}  text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
      <span class={`w-2 h-2 mr-1 ${isActive ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></span>
      {label}
    </span>
  )
}

export default Indicator