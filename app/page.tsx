'use client';

import EmailForm from "@/components/EmailForm";
import ListItem from "@/components/ListItem";
import Subscribed from "@/components/Subscribed";
import { useNewsletterContext } from "@/context/NewsletterContext";
import DesktopImage from "@/public/illustration-sign-up-desktop.svg";
import MobileImage from "@/public/illustration-sign-up-mobile.svg";
import clsx from "clsx";
import Image from 'next/image';

export default function Home() {

  const {success} = useNewsletterContext()
  
  return (
    <main className="h-screen md:bg-charcoalGray text-charcoalGray md:flex md:justify-center md:items-center">
      {/* container */}
      <section className={clsx('flex flex-col md:flex-row relative h-full md:w-fit md:mx-auto md:h-2/3 md:bg-white md:justify-center md:rounded-[1rem] md:p-[1rem] md:shadow-lg md:drop-shadow-lg', {'hidden':success == 'true'})}>
        {/* Image */}
      <div className="h-48 md:h-full overflow-hidden rounded-b-[1rem] md:rounded-[1rem]">
        <Image src={MobileImage} alt="Sign up" className='md:hidden object-cover min-w-full' />
        <Image src={DesktopImage} alt="Sign up" className='hidden md:block object-cover min-w-full min-h-full' />
      </div>
      {/* Main content */}
      <div className="flex flex-col h-full px-6 md:order-first">
        <h1 className="font-bold text-4xl mt-8">Stay updated!</h1>
        <div className="my-auto text-[1rem]">
          <p className="my-4"> Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="space-y-4">
            <ListItem text="Product discovery and building what matters" />
            <ListItem text="Measuring to ensure updates are a success" />
            <ListItem text="And much more!" />
          </ul>
        </div>
        {/* Email form */}
        <EmailForm className="mt-auto" />
      </div>
      </section>
      {/* Success message */}
      {success === 'true' && <Subscribed />}
    </main>
  );
}
