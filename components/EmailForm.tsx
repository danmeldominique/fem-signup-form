'use client';
import React, { useState } from 'react'
import clsx from 'clsx';

export default function EmailForm({className}: {className?: string}) {

const [email, setEmail] = useState<string>('')

  return (
    <form className={clsx('input-group flex flex-col mb-6', className)}>
        <label
        htmlFor="email"
        className='text-[0.8rem] font-bold'>Email address</label>
        <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder="email@company.com" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className='my-2 py-2 px-2 rounded-lg border border-grey/[0.3] focus:border-grey focus:outline-none'/>
        
        <button className='text-sm font-semibold text-white rounded-md px-4 py-3 bg-charcoalGray active:bg-gradient-to-r from-[#ff527a] to-[#fe6a3b] mt-4'>
            Subscribe to monthly newsletter
        </button>
    </form>
  )
}
