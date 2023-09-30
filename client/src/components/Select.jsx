import React from 'react'

const Select = ({label,values,onChange,name,value}) => {
  return (
    <div>
        
<label for={name} class="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
<select onChange={onChange} id={name} value={value} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5">
  <option selected>Choose</option>
    {values.map(value=><option key={value.id} value={value.id}>{value.name}</option>)}
  {/* <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option> */}
</select>

    </div>
  )
}

export default Select