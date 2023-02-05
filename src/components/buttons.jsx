import React from 'react'

function buttons() {
  const cities = [
      {
        id:1,
        title: 'London',
      },
      {
        id:2,
        title: 'Islamabad',
      },
      {
        id:3,
        title: 'Mumbai',
      },
      {
        id:4,
        title: 'Makkah',
      },
      {
        id:5,
        title: 'Medina',
      }
  ]
  return (
    <section className='Buttons'>
      <div className='container'>
        <ul className='flex justify-between items-center'>
          {cities.map((city) => (
            <li key={city.id}><a href='' className='copy-sm hover:underline underline-offset-[2px]'>{city.title}</a></li>
          ))}
        </ul>
      </div>      
      
    </section>
    
  )
}

export default buttons