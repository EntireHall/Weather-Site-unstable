import React from 'react'
import Records from "./Records.json"
import { useSearch } from '../../hooks/useSearch'


function Notice() {

  const {setSearch, fetchWeather } = useSearch();


  return (
    <div className='flex gap-10 justify-center'>
      {
        Records.map((data, id) => (
          <div className='text-white' key={id}>

            <button className='transition ease-out duration-300 delay-200 hover:scale-110'
              onClick={async (e) => {
                e.preventDefault();
                setSearch(data.title)
              await fetchWeather()
              }}>{data.title}</button>

          </div>



        ))

      }</div>

  )
}




export default Notice
