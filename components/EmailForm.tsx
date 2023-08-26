'use client';
import React from 'react'
import clsx from 'clsx';
import { useNewsletterContext } from '@/context/NewsletterContext';

export default function EmailForm({className}: {className?: string}) {

    const {email, setEmail, success, setSuccess} = useNewsletterContext()

    function ValidateEmail(e: any): void {
        e.preventDefault();
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
            setSuccess('true');
      
        } else {            
            setSuccess('false');
            document.querySelector('.error')?.classList.remove('hidden');
        } 
    }

  return (
    <form className={clsx('input-group flex flex-col mb-6', className)} onSubmit={(event) => ValidateEmail(event)}>
        <div className='flex justify-between'>
            <label
            htmlFor="email"
            className='text-[0.8rem] font-bold'>Email address</label>
            {(success == 'false' || null) && <span className={clsx(`text-[0.8rem] font-bold text-tomato`)}>Valid email required</span>}
        </div>
        <input 
        type="text" 
        name="email" 
        id="email" 
        placeholder="email@company.com" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className={clsx('my-2 py-3 px-2 rounded-lg border border-grey/[0.3] focus:border-grey focus:outline-none', {'error':success == 'false'} )}/>
        
        <button className='text-sm font-semibold text-white rounded-md px-4 py-3 bg-charcoalGray active:bg-gradient-to-r from-[#ff527a] to-[#fe6a3b] mt-4'>
            Subscribe to monthly newsletter
        </button>
    </form>
  )
}
