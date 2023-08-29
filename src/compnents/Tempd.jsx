import React from 'react'
import { MdWaterDrop } from 'react-icons/md'
import { TbTemperature, TbWindmill, TbSunHigh, TbSunset2, TbArrowUp, TbArrowDown } from 'react-icons/tb'
import { LocalTime, iconUrl } from './Service'
import { useSearch } from '../hooks/useSearch'


function Tempd() {
  const { query } = useSearch();
  const { humidity, temp, speed, icon, detail, sunrise, sunset, temp_min, temp_max,feels_like,timezone } = query

  return (
    <>
      <div className='flex justify-center items-center py-6'>
        <p className='text-cyan-400 text-xl'>{detail}</p>
      </div>
      <div className='flex justify-between items-center'>

        <p className='text-white text-4xl'> <img src={iconUrl(icon)} className=''/></p>
        <span className='text-white text-4xl'>{`${temp}°`}</span>
        <div className='flex flex-col'>

          <div className='grid text-white font-normal '>

            <h1 className='flex justify-center items-center'><TbTemperature />Temp:<span className='ml-2 font-semibold'>{feels_like}°</span></h1>
            <h1 className='flex justify-center items-center'><MdWaterDrop />Humid:<span className='ml-2 font-semibold'>{humidity}</span></h1>
            <h1 className='flex justify-center items-center'><TbWindmill />Wind:<span className='ml-2 font-semibold'>{speed}km/h</span></h1>

          </div>

        </div>
      </div>
      <div className='flex justify-center  my-6 text-white font-extralight gap-1 text-base'>

        <p className='flex items-center gap-1'><TbSunHigh /><span>Rise:</span> <span>{LocalTime(Number(sunrise),timezone,"hh:mm a")}</span></p>|
        <p className='flex items-center gap-1'><TbSunset2 /><span>Set:</span><span>{LocalTime(Number(sunset),timezone,"hh:mm a")}</span> </p>|
        <p className='flex items-center gap-1'><TbArrowUp /><span>High: </span><span>{temp_max}°</span> </p>|
        <p className='flex items-center gap-1'><TbArrowDown /><span>Low: </span><span>{temp_min}°</span> </p>


      </div>
    </>

  )
}

export default Tempd
