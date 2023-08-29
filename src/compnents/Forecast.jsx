import React from 'react'
import {TbCircleFilled} from 'react-icons/tb'

function Forecast({title}) {
  return (
    <div>
      <div className='flex justify-start items-center mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2'/>

      <div className='flex justify-between text-white items-center'>

      <div className='flex flex-col justify-center items-center gap-1'>
        <p className='text-sm font-light'>04:30 AM</p>
        <TbCircleFilled/>
        <p className='text-sm font-light'>12°</p>
        </div>

        <div className='flex flex-col justify-center items-center gap-1'>
        <p className='text-sm font-light'>04:30 AM</p>
        <TbCircleFilled/>
        <p className='text-sm font-light'>12°</p>
        </div>

        <div className='flex flex-col justify-center items-center gap-1'>
        <p className='text-sm font-light'>04:30 AM</p>
        <TbCircleFilled/>
        <p className='text-sm font-light'>12°</p>
        </div>

        <div className='flex flex-col justify-center items-center gap-1'>
        <p className='text-sm font-light'>04:30 AM</p>
        <TbCircleFilled/>
        <p className='text-sm font-light'>12*</p>
        </div>

        <div className='flex flex-col justify-center items-center gap-1'>
        <p className='text-sm font-light'>04:30 AM</p>
        <TbCircleFilled/>
        <p className='text-sm font-light'>12*</p>
        </div>

      </div>
    </div>
  )
}

export default Forecast
