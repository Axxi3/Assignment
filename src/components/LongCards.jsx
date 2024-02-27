import { ChevronDown, Trophy } from 'lucide-react'
import React, { useState } from 'react'
import image from "../assets/image.png"
import RatingCard from './RatingCard'
import { Check } from 'lucide-react';

export default function LongCards(props) {


   



    const [shoemoreDetails, setshowmoredetails] = useState(true)
    const [Tag,setTag]=useState(props.useTag || false)

        const showmore=()=>{ 
            if(shoemoreDetails){
                setshowmoredetails(false)
            } else {
                setshowmoredetails(true)
            }
        }

  return (
    <div className='flex md:flex-row flex-col  gap-3 md:items-center items-start justify-center'>
        <div className="left-section flex flex-col gap-4">
            {
                props.data["Tag Name"]?(
                    <div className="flex gap-2 bg-[#FF7724] rounded-r-lg p-2 bestchoice">
                 <img src={props.data["Tag Logo"]} alt="" />
                    <p> {props.data["Tag Name"]}</p> 
                 </div> 
                ):null
            }
     
            
    <div className="left-section flex gap-4">
        <p className=' h-fit'>{props.index+1}</p> 
        <div className="flex items-center flex-col bestchoice">
        <img src={image} alt="" className='w-[200px] h-[150px] rounded-full' />
        <p>Bundler 1</p>
        </div>
      
    </div>
        </div>
   

    <div className="right-section flex flex-col gap-5 p-9 "> 
    <div className="right-Top_section">
    <span className='font-bold'>{props.data["Product Name"]}</span>
<span>- Comprehensive Digital 
    Platform Creation Tool, Streamlined Design Interface for Professional
     Websites and Online Stores (Black/Blue)</span>
    </div>


    {
        shoemoreDetails?(
            <div className="Right-bottonsection">
            <p className="font-bold">
                 Main Highlight
              </p> 
              <p className='p-5'>{props.data["Product Description"]}</p>
                 <div className="flex items-center">
             <a href="#" className='text-blue-400' onClick={showmore}>Show more </a>
             <ChevronDown width={20} height={20} color='blue'/>
             </div>
            </div>
        ):   <div className="Right-bottonsection">
        <p className="font-bold">
             Main Highlight
          </p> 
          <div className="bg-[#FFF4ED] p-5 m-4 rounded-[22px]">
            <ul className='flex flex-col gap-4'>
                <li className='gap-2 flex items-center'>
                <span className='border-black rounded-lg border-[2px] p-2 text-blue-500 bg-[#FFFFFF]'>9.9</span>
            <span>Building responsive</span>
                </li>
                <li className='gap-2 flex items-center'>
                <span className='border-black rounded-lg border-[2px] p-2 text-blue-500 bg-[#FFFFFF]'>8.9</span>
            <span>Cool</span>
                </li>
                <li className='gap-2 flex items-center'>
                <span className='border-black rounded-lg border-[2px] p-2 text-blue-500 bg-[#FFFFFF]'>8.9</span>
            <span>Docs</span>
                </li>
            </ul>
           
          </div>

          <div className="">
          <p className="font-bold">
          Why we love it
          </p>
            <ul className='flex flex-col gap-1 p-4'>
                <li className='flex gap-3 items-center'>
                    <Check width={20} height={20} color='green'/>
                    <span>Documentation</span>
                </li>
                <li className='flex gap-3 items-center'>
                    <Check width={20} height={20} color='green'/>
                    <span>Easy Use</span>
                </li>
                <li className='flex gap-3 items-center'>
                    <Check width={20} height={20} color='green'/>
                    <span>Out of box</span>
                </li>
            </ul>
          </div>
             <div className="flex items-center">
         <a href="#" className='text-blue-400' onClick={showmore}>Show Less </a>
         <ChevronDown width={20} height={20} color='blue'/>
         </div>
        </div>
    }
  

 
 
     
    </div>
    <div className="RatingSEction w-[20%] flex flex-col gap-4 md:visible hidden">
<RatingCard data={props.data}/>
<button type="button" className='w-[100%] bg-blue-500 h-[40px] rounded-lg'>View</button>
   </div>
   
    </div>
  )
}
