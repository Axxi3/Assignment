import React from 'react'
import Custominput from './Custominput'

export default function OffersSignup() {
  return (
    <div className='flex p-9 md:flex-row flex-col justify-between'>
        <div className="heading md:w-[48%] w-[100%]">

        <h1 className='text-[32px]'>Sign up and get exclusive special deals</h1>
        </div>
        <div className=" md:w-[48%] w-[100%] flex sm:flex-row flex-col sm:gap-0 gap-3">  
        <Custominput/>

        <button type='button' className='h-10 bg-[#1B88F4] rounded-[12px] sm:rounded-r-lg px-5'>Signup</button>
        </div>
    </div>
  )
}
