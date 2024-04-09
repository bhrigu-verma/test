import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { GoogleGeminiEffectDemo } from "./ptanikya";
import { BackgroundBeamsDemo } from "./bgbeamsac";
import { Dashboard } from "./hjj";

export default function Home() {
  return (
    <><main className="w-full  ">
           <Dashboard/>
          
          </main>
          </>
  );
}