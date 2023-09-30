import React from 'react'

const Alert = ({errors}) => {
  return (
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
        {Object.keys(errors).map(key=>(
            <p key={key}>{errors[key][0]}</p>
        ))}
        
    </div>
  )
}

export default Alert