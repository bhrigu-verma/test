// import './styles.css'; // Assuming you have Inter font defined in styles.css
// import { GoogleGeminiEffectDemo } from "./landingpage";
// const inter = 'Inter'; // Assuming Inter is a CSS class for the font
// export default function Home() {
//   return (

//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter}`}
//     >
//       <GoogleGeminiEffectDemo />
//       <div className="text-2xl ">hi there how are you broo</div>
//     </main>
//   );
// }
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { GoogleGeminiEffectDemo } from "./ptanikya";
import { BackgroundBeamsDemo } from "./bgbeamsac";

export default function Home() {
  return (
    <><main className="w-full  ">
           <BackgroundBeamsDemo/>
          
          </main>
          </>
  );
}