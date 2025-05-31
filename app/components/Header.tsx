import React from 'react'

export default function Header() {
  return (
    <div className='h-20 bg-blue-100 text-blue-950 mt-0.5 flex justify-around font-bold top-0'>
      <div>
        <h1 className='flex justify-center font-extrabold text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>WeCoach Cricket Academy</h1>
        <p className='flex justify-center md:text-2xl font-bold'>Where Passion Meets Excellence</p>
      </div>
    </div>
  )
}