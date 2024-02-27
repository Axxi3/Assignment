import React from 'react'
import DealsCard from './DealsCard'

export default function DealsContainer() {
  return (
    <div className="deals flex md:flex-row flex-col items-center justify-between">
    <DealsCard/>
    <DealsCard/>
    <DealsCard/>
  </div>
  )
}
