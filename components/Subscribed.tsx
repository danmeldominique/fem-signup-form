import React from 'react'
import CheckMark from '@/public/icon-list.svg'
import Image from 'next/image';
import { useNewsletterContext } from '@/context/NewsletterContext';

export default function Subscribed() {
    const {email, setSuccess, setEmail} = useNewsletterContext()
    function dismissMessage() {
        setSuccess(null)
        setEmail('')
    }
  return (
    <div className='bg-white md:w-[24rem] md:h-[24rem] flex flex-col justify-around px-6 py-6 md:shadow-lg md:drop-shadow-lg rounded-[1rem] h-full'>
        <Image src={CheckMark} alt="Check mark" width={48} className='mb-8 md:mb-2  mt-12 md:mt-2' />
        <div>
        <h1 className='text-4xl font-bold mb-6 md:mb-8 md:mt-2'>Thanks for subscribing!</h1>
        <p className='text-base md:text-sm'>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button to confirm your subscription.</p>
        </div>
        <button  className='text-sm font-semibold text-white rounded-md px-4 py-3 bg-charcoalGray active:bg-gradient-to-r from-[#ff527a] to-[#fe6a3b] mt-auto'
        onClick={() => dismissMessage()}>Dismiss message</button>
    </div>
  )
}
