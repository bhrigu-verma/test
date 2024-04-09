"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useRouter } from 'next/router';

export function TypewriterEffectSmoothDemo() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signup');
  };
  const handleeClick = () => {
    router.push('/pricing');
  };
  const words = [
    {
      text: "Integrate",
    },
    {
      text: "AI",
    },
    {
      text: "with",
    },
    {
      text: "your",
    },
    {
        text: "business",
      },
      {
        text: "through",
      },
    {
      text: "OMNIAI",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to growth and success starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Try now →
        </button>
       
        
        <button
        onClick={handleClick}
        className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
      >
        Signup
      </button>
      <button
        onClick={handleeClick}
        className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
      >
        Pricing
      </button>
      </div>
   
    </div>
  );
}
