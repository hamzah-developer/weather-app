import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function inputs() {
  return (
    <section className='Inputs'>
      <div className='container flex items-center'>
        <div className='flex items-center space-x-10 w-10/12'>
          <input 
            type="text"
            className='copy-sm capitalize placeholder:lowercase px-20 py-10 focus:outline-none text-black xl:min-w-[70%]'
            placeholder='search for cities....'
          />

          <UilLocationPoint 
            size={25}
          />
          <UilSearch
            size={25}
          />
        </div>
        <div className='w-2/12 copy-sm'> 
          <button className=''>°C</button>
          <span>|</span>
          <button clas>°F</button>
        </div>
      </div>
    </section>
  )
}

export default inputs