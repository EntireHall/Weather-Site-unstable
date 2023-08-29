import React, { useState } from 'react'
import { BiSearchAlt, BiLocationPlus } from "react-icons/Bi"
import { useSearch } from '../hooks/useSearch';

function Search() {
const [vari,setVari] = useState("metric")
const [varia,setVaria] = useState("imperial")

  const { search,units,setUnits, setSearch, fetchWeather } = useSearch();

  async function handleSearch(e) {
    e.preventDefault();
    await fetchWeather();
    setSearch("")
  }
  return (
    <div className='flex justify-center my-6 '>
      <form autoComplete='off' onSubmit={handleSearch} className='flex justify-center items-center  w-3/4 space-x-4'>
        <input type='text'
          name='name'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='search city here.....  '
          className='pr-20 capitalize shadow-xl p-1.5 focus:outline-none rounded placeholder:lowercase placeholder:text-base' />

        <button>
          <BiSearchAlt size={20} className='text-white mt-2 transition ease-out hover:scale-125 ' />
        </button>
        <button>
        <BiLocationPlus size={20} className='text-white mt-2 transition ease-out hover:scale-125 ' />
      </button>
      <div className='flex text-white justify-center items-center gap-1 mt-2'>

        <button onClick={()=> setUnits(vari)} className='transition ease-out hover:scale-150'>
          °C
        </button>
        <p className='mb-1'>|</p>
        <button onClick={()=> setUnits(varia)} className='transition ease-out hover:scale-150'>
        °F
        </button></div>
        </form>
      </div>
    

  )
}

export default Search
