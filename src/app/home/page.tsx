'use client';

import { useState } from 'react';
import Image from 'next/image'
import { Input } from '@/components/ui/input'

import { useToast } from '@/hooks/use-toast';

const HomePage = () => {

    const isDone = localStorage.getItem('done') === 'true';

    const { toast } = useToast()

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        const res = await fetch('/api/email', {
          method: 'POST',
          body: JSON.stringify({ message }),
        });
    
        await res.json();
        setLoading(false);
    
        if (res.ok) {
            localStorage.setItem('done', 'true');
        toast({
            title: "Your Message is nasa bebe mo na",
            description: "I love you!!"
        })
        } else {
        toast({
            title: "Hala nag ka error baby",
            description: "pero I love you pa rin!!"
        })
        }
      };

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-white p-5 rounded-md max-w-[1000px] w-full border-[1px] border-[#8464b8] shadow-lg sm:items-start items-center sm:justify-between flex flex-col-reverse sm:flex-row'>
            <div className='flex flex-col gap-5 bg-white sm:w-2/3'>
            <h1 className='bg-white'>Hi Baby,</h1>

            <p className='bg-white text-sm indent-10'>Happy Birthday Ganda, sana magustuhan mo tong ginawa ko for you. I just want to let you know sobrang mahal na mahal kita, patawarin mo ko sa mga hindi naten pag kakaunawaan at sa mga away naten, wag ka sumuko saken baby ahhh. Today is your birthday love, 67 kana kung ano man yung wish mo, sinasabi ko kay universe na sana pag bigyan nya yung sweet girl ko na matupad yung hiling nya, mahal na mahalkita baby, thank you sa pag stay saken, papangako kung mas better pa dto yung ibibigay ko sayo sa susunod, right now sana ma appreciate mo to, again happy birthday, more birthdays to come, and i love you always 😘</p>

            <form onSubmit={handleSubmit} className='bg-white'>
            <div className='flex rounded-full bg-white border'>
                {isDone ? (
                    <div className='bg-[#8464b8] w-full h-10 rounded-full flex justify-center items-center'>
                        <h1 className='text-white'>I love you!! :))</h1>
                    </div>
                ) : (
                    <>
                    <Input className='focus-visible:ring-0 text-sm rounded-full bg-white border-none' placeholder='Anong Message mo sakin? :('
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}/>
                    <button className='bg-[#8464b8] z-10 px-5 text-white rounded-e-full' disabled={loading}>{loading ? 'Wait' : 'Send'}</button>
                </>
                )}
            </div>
            </form>
            </div>
            <div className='bg-[#f4f4f5] sm:mb-0 mb-10 shadow-lg w-fit h-fit px-5 pt-5 pb-10 rotate-6 relative overflow-hidden'>
                <Image src={'/Me.png'} width={130} height={130} alt="photo" className="bg-transparent"/>

                <Image src={'/Butterfly.png'} width={30} height={30} alt="photo" className="bg-transparent absolute right-0 rotate-12"/>
                <Image src={'/Butterfly.png'} width={30} height={30} alt="photo" className="bg-transparent absolute bottom-0 rotate-12"/>
                <Image src={'/Butterfly.png'} width={30} height={30} alt="photo" className="bg-transparent absolute bottom-0 right-10 -rotate-12"/>
            </div>
        </div>
    </div>
  )
}

export default HomePage