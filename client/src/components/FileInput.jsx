import React from 'react'

const FileInput = ({name, label,onChange}) => {
  return (
    <div>
        
<label class="block mb-2 text-sm font-medium text-gray-900" for={name}>{label}</label>
<input onChange={onChange} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id={name} type="file"/>

    </div>
  )
}

export default FileInput