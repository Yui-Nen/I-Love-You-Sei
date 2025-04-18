import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen relative overflow-hidden">

      <Image src={'/Flower.png'} width={200} height={200} alt="photo" className="sm:w-[200px] w-[100px] bg-transparent rotate-[150deg]"/>

      <h1 className="text-[#442A6E] text-5xl font-extrabold overflow-hidden mb-3 text-center z-10">Happy Birthday Baby</h1>
      <h1 className="text-[#442A6E] text-2xl font-semibold z-10">Hi Sei! :)</h1>

      <h1 className="text-[#442A6E] text-2xl font-semibold mt-10 z-10">Click mo to Dali!!!! 😡</h1>
      <Link href={'/home'} className="overflow-hidden">
        <button className="px-10 py-5 rounded-full text-white bg-[#442A6E] hover:bg-[#2d1a4b] z-10 w-fit relative overflow-hidden">Click Me
        <Image src={'/Envelop.png'} width={50} height={50} alt="photo" className="absolute right-0 -rotate-45 bg-transparent"/>
        </button>
      </Link>

      <Image src={'/Flower.png'} width={200} height={200} alt="photo" className="sm:w-[200px] w-[100px] bg-transparent -rotate-[40deg]"/>


      <Image src={'/Heart.png'} width={200} height={200} alt="photo" className="bottom-0 absolute left-0 rotate-45 bg-transparent"/>
      <Image src={'/Heart.png'} width={200} height={200} alt="photo" className="top-0 absolute right-0 -rotate-[140deg] bg-transparent"/>

      <Image src={'/Balloon.png'} width={120} height={120} alt="photo" className="bottom-0 sm:w-[120px] w-[80px] absolute right-0 -rotate-[10deg] bg-transparent"/>
      <Image src={'/Balloon.png'} width={120} height={120} alt="photo" className="bottom-0 sm:w-[120px] w-[80px] absolute right-10 -rotate-[20deg] bg-transparent"/>
    </div>
  );
}
