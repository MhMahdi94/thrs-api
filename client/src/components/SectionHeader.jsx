import React from 'react'

const SectionHeader = ({title}) => {
  return (
    <div class="inline-flex items-center justify-center w-full">
          <hr class="w-96 h-px my-8 bg-gray-400 border-0"/>
          <span class="absolute px-3 text-4xl font-medium text-gray-500 -translate-x-1/2 bg-gray-50 left-1/2">{title}</span>
      </div>
  )
}

export default SectionHeader