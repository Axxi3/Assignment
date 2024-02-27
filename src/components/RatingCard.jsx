import React, { useEffect, useState } from 'react'
import { Star } from 'lucide-react';
import { data } from 'autoprefixer';
export default function RatingCard(props) {
    const [starts, setstarts] = useState([])

    useEffect(()=>{  
        const stararray=[]
        for (let index = 0; index < props.data["stars"]; index++) {
            stararray.push(index) 
        }
        setstarts(stararray)
    },[])
  return (
    <div className='bg-[#F3F9FF] flex flex-col items-center justify-center p-5 rounded-b-[30px]'>
        <h1 className='text-[35px]'>{props.data["Rating"]}</h1>
        <p>{props.data["Rating tag"]}</p>

        <div className="stars flex">

     
        


        {
          starts.map((item,index)=>{
            return <Star key={index} className='text-[#FFBF00] text-[20px]'/>
          })
        }
        
          
        
        </div>
       
        </div>
  )
}
