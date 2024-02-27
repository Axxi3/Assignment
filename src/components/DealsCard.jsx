import React from 'react'
import image from "../assets/image.png"
import DealTags from './DealTags'

export default function DealsCard() {
  return (
    <div className='p-6 md:w-[30%] w-[70%] flex flex-col gap-3  justify-center'>
      <div className="image h-[40%] p-[20px]">
      <img src={image} alt="" className='w-[170px] h-[140px] mx-auto ' />
      </div>

      
        <div className="flex gap-3 ">
            <DealTags deal={"20% off"}/>
            <DealTags deal={"Limited time "}/>
        </div>
        <p className='font-bold text-[#626E79]'>Webbuilder 1</p> 
        <p>Computer  Modern clasic with wix support</p>
        <div className="prices flex items-end gap-3">
          <p className="text-[20px] ">
          $39.96
          </p>
          <div className="other text-[#9FA9B3] flex gap-2">
            <p>$49.96</p>
            <p className='text-red-400'>(20% Off)</p>
          </div>
        </div>
        <button type="button" className='w-[100%] bg-[#1B88F4] h-[45px] rounded-[11px] mt-3'>View Deal</button>
    </div>
  )
}
