import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SideBarItem = ({icon,label,to,iconPath, activeIndex}) => {
    
    return (
        <li>
            <Link to={to}  className="flex items-center p-2 text-white hover:text-red-700 rounded-lg  hover:bg-white  group">
                {icon}
                {/* <svg className="w-5 h-5 text-white transition duration-75  group-hover:text-red-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    {iconPath}
                </svg> */}
                <span className="ml-3">{label}</span>
                
            </Link>
        </li>
    )
}

export default SideBarItem