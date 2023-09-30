import React from 'react'

const StatCard = ({label, icon, value}) => {
  return (
    <div>
        <div className="p-5 bg-white rounded shadow-sm">
                <div className="flex items-center space-x-4">
                    <div>
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-gray-400">
                            {/* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3333 9.33334H28M28 9.33334V20M28 9.33334L17.3333 20L12 14.6667L4 22.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg> */}
                            {icon}
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-400">{label}</div>
                        <div className="text-2xl font-bold text-gray-900">{value}</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default StatCard