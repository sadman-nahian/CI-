import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Pricing = () => {
  return (
    <div className="mt-20 flex flex-col items-center text-center max-w-2xl  m-auto">
      <h2 className="text-2xl font-semibold">Choose your plan</h2>
      <div className="mt-10 flex mr-4 space-x-4 w-full">
        <PricingTable  />
      </div>
    </div>
  )
}

export default Pricing
