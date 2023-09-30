import React from 'react'

const Input = ({label,onChange, placeholder, type,name,inputRef,value, required}) => {
  return (
      <div className='mb-4 w-full mr-5'>
          <div>
              <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
              <input onChange={onChange} value={value} ref={inputRef} type={type} name={name} id={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5" placeholder={placeholder} /*required={ required }*/ />
          </div>
      </div>
  )
}

export default Input