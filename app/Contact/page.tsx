import { Contact } from '@/components/component/Contact'
import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
        <Image
        src="/bill.png"
        alt="Main"
        width={2500}
        height={1000}
        className="rounded shadow-md "
      />
      <Contact />
    </div>
  )
}

export default ContactPage