import React from 'react'
import { LocalTime } from './Service';
import { useSearch } from '../hooks/useSearch';


function Geolocation() {
  const { query } = useSearch();
  const { dt, name, country, timezone } = query;


  return (
    <>

      <div className='flex justify-center my-6 items-center text-white'>
        <p className='font-extralight cursor-default'>
          {LocalTime(Number(dt), timezone)}
        </p>
      </div>

      <div className='flex justify-center my-6 items-center text-white'>
        <p className='font-extralight cursor-default'>
          {name}, {country}

        </p>
      </div>
    </>
  )
}

export default Geolocation
