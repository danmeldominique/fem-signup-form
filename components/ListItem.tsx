import React from 'react'
import Image from 'next/image';
import CheckListImage from '@/public/icon-list.svg'

export default function ListItem({text}: {text: string}) {
  return (
    <div className='flex flex-row gap-x-4 items-start'>
        <Image src={CheckListImage} alt={text} width={20} />
        <span>{text}</span>
    </div>
  )
}
