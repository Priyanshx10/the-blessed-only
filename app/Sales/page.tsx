import React from 'react'
import Image from 'next/image'

const SalesPage = () => {
  return (
    <div className="w-screen"> 
     <Image
        src="/P-1.png"
        alt="Main"
        width={2500}
        height={1000}
        className="rounded shadow-md "
      />
      <Image
        src="/merch.png"
        alt="Main"
        width={2500}
        height={1000}
        className="rounded shadow-md "
      />
       
        <Image
        src="/P-2.png"
        alt="Main"
        width={2500}
        height={1000}
        className="rounded shadow-md "
      />
  </div>
  )
}

export default SalesPage