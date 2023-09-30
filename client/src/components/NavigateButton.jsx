import React from 'react'
import { Link } from 'react-router-dom'

const NavigateButton = ({to,label}) => {
  return (
      <Link to={to} className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center  ">
          <svg className="w-3.5 h-3.5 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>
          {label}
      </Link>
  )
}

export default NavigateButton