import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function inputs() {
  return (
    <section className='Inputs'>
      <div className='container flex items-center'>
        <div className='flex items-center space-x-10 w-6/12'>
          <input 
            type="text"
            className='copy-sm capitalize placeholder:lowercase px-20 py-10 focus:outline-none text-black xl:min-w-[350px]'
            placeholder='search for cities....'
          />

          <UilLocationPoint 
            size={25}
          />
          <UilSearch
            size={25}
          />
        </div>
        <div className='w-6/12'> 
          test
        </div>
      </div>
    </section>
  )
}

export default inputs