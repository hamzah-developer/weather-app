import React from 'react'
// import {UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons"

function TempratureAndDetails() {
  return 
  <section className='TempratureAndDetails'>
    <div className='container text-center'>
      <h4 className='heading-sm'>Clear</h4>
    </div>


    <div className='flex items-center justify-between text-white py-20'>
      <img className='w-50' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fandroid-arsenal.com%2Fdetails%2F1%2F5251&psig=AOvVaw2T8dY040sKAkbWqh3yD86l&ust=1676410002958000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMizzIe4k_0CFQAAAAAdAAAAABAJ' />

      <p className='heading'>34°</p>

      <div className='flex flex-col space-y-5 text-white'>
        <div className='flex font-light text-sm items-center justify-center'>
          
          reacl fell: 
          <span>32°</span>
        </div>
      </div>
    </div>

  </section>
}

export default TempratureAndDetails