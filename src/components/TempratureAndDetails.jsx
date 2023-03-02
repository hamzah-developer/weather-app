import React from 'react'
import {UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons"

function TempratureAndDetails() {
  return <div className="">
    <div className="flex items-center justify-center py-30">
      <p className='text-white heading-sm'>Cloudy Bruv</p>
    </div>


    <div className="flex items-center justify-between py-15 container mx-auto">
      <p className='heading-sm'>34°</p>
      
      <img src="https://cdn-icons-png.flaticon.com/512/169/169367.png" alt="" className='w-50' />
      

      <div className='flex flex-col space-y-10'>
        <div className="flex copy items-center justify-center">
          <UilTemperature size={18} className="mr-[3px]"/>
            Real fell:  
          <span className='copy-sm'>32°</span>
        </div>

        <div className="flex copy items-center justify-center">
          <UilTear size={18} className="mr-[3px]"/>
            Humidity
          <span className='copy-sm'>32°</span>
        </div>

        <div className="flex copy items-center justify-center">
          <UilWind size={18} className="mr-[3px]"/>
            Wind:
          <span className='copy-sm'>32°</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center space-x-10 py-15 copy-sm">
      <UilSun/>
      <p className='copy'>Rise: <span className='font-medium ml-[1px]'>06:45 AM</span></p>

      <p className='font-light'>|</p>

      <UilSunset/>
      <p className='copy'>Set: <span className='font-medium ml-[1px]'>07:45 pm</span></p>

      <p className='font-light'>|</p>

      <UilSun/>
      <p className='copy'>High: <span className='font-medium ml-[1px]'>45°</span></p>

      <p className='font-light'>|</p>
      <UilSun/>
      <p className='copy'>Low: <span className='font-medium ml-[1px]'>40°</span></p>
    </div>
  </div>

}

export default TempratureAndDetails