import EmailForm from "@/components/EmailForm";
import ListItem from "@/components/ListItem";
import DesktopImage from "@/public/illustration-sign-up-desktop.svg";
import MobileImage from "@/public/illustration-sign-up-mobile.svg";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen md:bg-charcoalGray text-charcoalGray">
      {/* container */}
      <section className="flex flex-col relative h-full">
        {/* Image */}
      <div className="h-48 overflow-hidden rounded-b-[1rem] ">
        <Image src={MobileImage} alt="Sign up" className='md:hidden object-cover min-w-full' />
      </div>
      {/* Main content */}
      <div className="flex flex-col h-full px-6">
        <h1 className="font-bold text-4xl mt-8">Stay updated!</h1>
        <div className="my-auto text-sm">
          <p className="my-4"> Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="space-y-4">
            <ListItem text="Product discovery and building what matters" />
            <ListItem text="Measuring to ensure updates are a success" />
            <ListItem text="And much more!" />
          </ul>
        </div>
        <EmailForm className="mt-auto" />
      </div>

      </section>
    </main>
  );
}
