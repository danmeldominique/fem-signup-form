'use client';

import { createContext, useContext, useState } from 'react';

type NewsletterProviderProps = {
  children: React.ReactNode
}

type SuccessState = 'true' | 'false' | null

type NewsletterContext = {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  success: SuccessState
  setSuccess: React.Dispatch<React.SetStateAction<SuccessState>>
}

export const NewsletterContext = createContext<NewsletterContext | null>(null);

export default function NewsletterContextProvider({children}: NewsletterProviderProps ) {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState<SuccessState>(null)

  return (
    <NewsletterContext.Provider value={{email, setEmail, success, setSuccess}}>
    {children}
    </NewsletterContext.Provider>
  )
}

export function useNewsletterContext() {
  const context = useContext(NewsletterContext)
  if (!context) {
    throw new Error(
      'useNewsletterContext must be used within a NewsletterContextProvider'
    )
  }
  return context
}