"use client"
import { useEffect, useState } from "react";
import { AiOutlineApple } from "react-icons/ai";
import { SlSocialSpotify } from "react-icons/sl";
import { LiaYoutube ,LiaInstagram } from "react-icons/lia";
import { InView } from "react-intersection-observer";
import Header from "@/components/Header";

export default function Home() {
  const [shrink ,setShrink] = useState(1);
  const [shrink2 ,setShrink2] = useState(1);
  const [offset, setOffset] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const speed = 10; // Adjust scrolling speed

 
  const [animateBorder, setAnimateBorder] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShrink2((prev) => (prev >= 3 ? 1 : prev + 1));
      
    }, 8000); // Runs every 8 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // Run the animation once on mount
    setTimeout(() => {
      setAnimateBorder(false);
    }, 2000); // Adjust time as per requirement
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > prevScrollY ? 1 : -1;

      setOffset((prev) => {
        const newOffset = prev - direction * speed;
        const limit = -200; // Adjust for smooth looping

        // Reset position when limit is reached (loop effect)
        if (newOffset <= limit) return 0;
        if (newOffset >= 0) return limit;

        return newOffset;
      });

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

const releases = [
  {
    id : 1,
    album : "Dhanji Ruab",
    website : "pitchfork.com",
    article : "Touring the gritty underbelly of Ahmedabad, India to the sounds of swaggering synth and G-funk, the 25-year-old rapper’s debut makes an auteur’s plea for authenticity in a transactional world.",
    img : "https://framerusercontent.com/images/YjSAHfyF5ujMaolCihfD8Buk.png"
  },
  {
    id : 2,
    website : "pitchfork.com",
    album : "Dhanji | Ahmedabad has found its funk",
    article : "Imagine a youthful Bobby DeNiro fused with the lyrical prowess of Shawn Carter, infused with a touch of Thaltej charm, and there you have Dhanji. His debut LP, Ruab, released in 2023 with influences from motown and funk, is arguably one of the most innovative projects of the year, showcasing the talent and foresight of this 25-year-old rapper.",
    img : "https://framerusercontent.com/images/1OG5fjMEigMpcs3FZAag1psISI.png"
  },
  {
    id : 3,
    album : "Dhanji’s New Ablum Brings A Kendrick-Esque Progressive Musicality To Indian Hip-Hop",
    website : "Disha Bijolia",
    article : "Dhanji's highly anticipated debut album, Ruab, has sent ripples of excitement through the Indian hip-hop scene. Hailing from Ahmedabad, an unconventional hub for hip-hop, Dhanji has managed to build a fervent following through a strategic buildup to his album release.",
    img : "https://framerusercontent.com/images/K7SNQYN3Wif3VofwdurT3iMTBk.png"
  },
  {
    id : 4,
    website : "wildcity.com",
    album : "Dhanji Releases His Earnestly Awaited Debut Album 'Ruab'",
    article : "Among avid listeners of Indian hip-hop, Dhanji's 'RUAB' has been as awaited as any work by the long-standing heavyweights of the genre – a feat that's especially impressive for an artist releasing his debut album and one not emerging from the recognised hip-hop hubs like Mumbai or New Delhi. With 7 mixtapes to his name, the Ahmedabad artist and his team have created such levels of anticipation through a series of listening sessions, shows with live bands, 1 single release and enthusiastic word of mouth. The credit for the latter goes to the mix of genres in Dhanji's work that feels starkly refreshing in the often oversaturated world of desi hip-hop.",
    img : "https://framerusercontent.com/images/GSiP4agoDchHHc436xrh5mzwKY.jpg?scale-down-to=2048"
  }
]


  
  return (
    <div className="min-h-screen bg-black p-0 md:p-4">
      <div className="border border-white">
       <Header/>
        <div className="hero flex border border-white justify-center items-center">
          <img className="h-80 md:h-130 w-80 md:w-full  object-contain" alt="hero" src="https://framerusercontent.com/images/BEpEOzAngc7IeCnOVHQ5oGviTE.jpg"/>

        </div>
        
          <div className="bg-red-500 border border-t-1 border-white">
          <div className="w-full overflow-hidden">
      <div className="w-ful py-4">
        <div
          className="flex space-x-4 text-black text-3xl font-sans whitespace-nowrap transition-transform duration-300"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {/* Infinite looping text */}
          {Array(20)
            .fill("STORE")
            .map((text, index) => (
              <span key={index} className="px-4">
                {text}
              </span>
            ))}
        </div>
      </div>
      
    </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="flex flex-col items-center border-1 border-r-gray-500 bg-black">
  <div className="bg-black  rounded-lg text-center pt-16 py-6 px-4">
  
    <img src="https://framerusercontent.com/images/nVbK693OQIVnTpAxx89O3t6Hk.jpg?scale-down-to=512" alt="Ruab CD" className="w-full h-72 object-contain" />

   
   <div className="py-4">
   <h2 className="font-mono text-[24px] font-normal text-white  mt-4">Ruab CD</h2>
    <p className="font-mono text-[18px] font-normal leading-[1.3em] tracking-[-0.04em] text-white">CD</p>

   
    <p className="font-mono text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-white mb-[20px]">₹499 <span className="text-gray-400 text-sm">+ TAX</span></p>
   </div>

   
    <button className="bg-red-500 hover:border-l-4 hover:border-t-4  hover:border-r-white hover:border-b-white hover:border-b-0 hover:border-r-0 hover:bg-white text-black hover:text-red-500 text-md font-mono p-2 py-1 rounded-[10px] border-2 border-b-4 border-r-4 hover:border-red-500 border-white w-full ">
  BUY NOW
</button>
  </div>
</div>
<div className="flex flex-col items-center border-1 border-r-gray-500 bg-black">
  <div className="bg-black  rounded-lg text-center w-full pt-16 py-6 px-4">
  
    <img src="https://framerusercontent.com/images/jiLKAyDYNhEA7tDPXx4VOKuyXAg.jpeg?scale-down-to=512" alt="Ruab CD" className="w-full h-72 object-contain" />

   
   <div className="py-4">
   <h2 className="font-mono text-[24px] font-normal text-white  mt-4">Ruab CD</h2>
    <p className="font-mono text-[18px] font-normal leading-[1.3em] tracking-[-0.04em] text-white">CD</p>

   
    <p className="font-mono text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-white mb-[20px]">₹499 <span className="text-gray-400 text-sm">+ TAX</span></p>
   </div>

   
    <button className="bg-red-500 hover:border-l-4 hover:border-t-4  hover:border-r-white hover:border-b-white hover:border-b-0 hover:border-r-0 hover:bg-white text-black hover:text-red-500 text-md font-mono p-2 py-1 rounded-[10px] border-2 border-b-4 border-r-4 hover:border-red-500 border-white w-full ">
  BUY NOW
</button>
  </div>
</div>
<div className="flex flex-col items-center border-1 border-r-gray-500 bg-black">
  <div className="bg-black  rounded-lg text-center w-full pt-16 py-6 px-4">
  
    <img src="https://framerusercontent.com/images/jiLKAyDYNhEA7tDPXx4VOKuyXAg.jpeg?scale-down-to=512" alt="Ruab CD" className="w-full h-72 object-contain" />

   
   <div className="py-4">
   <h2 className="font-mono text-[24px] font-normal text-white  mt-4">Ruab CD</h2>
    <p className="font-mono text-[18px] font-normal leading-[1.3em] tracking-[-0.04em] text-white">CD</p>

   
    <p className="font-mono text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-white mb-[20px]">₹499 <span className="text-gray-400 text-sm">+ TAX</span></p>
   </div>

   
    <button className="bg-red-500 hover:border-l-4 hover:border-t-4  hover:border-r-white hover:border-b-white hover:border-b-0 hover:border-r-0 hover:bg-white text-black hover:text-red-500 text-md font-mono p-2 py-1 rounded-[10px] border-2 border-b-4 border-r-4 hover:border-red-500 border-white w-full ">
  BUY NOW
</button>
  </div>
</div>
<div className="flex flex-col items-center border-1 border-r-gray-500 bg-black">
  <div className="bg-black  rounded-lg text-center pt-16 py-6 px-4">
  
    <img src="https://framerusercontent.com/images/nVbK693OQIVnTpAxx89O3t6Hk.jpg?scale-down-to=512" alt="Ruab CD" className="w-full h-72 object-contain" />

   
   <div className="py-4">
   <h2 className="font-mono text-[24px] font-normal text-white  mt-4">Ruab CD</h2>
    <p className="font-mono text-[18px] font-normal leading-[1.3em] tracking-[-0.04em] text-white">CD</p>

   
    <p className="font-mono text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-white mb-[20px]">₹499 <span className="text-gray-400 text-sm">+ TAX</span></p>
   </div>

   
    <button className="bg-red-500 hover:border-l-4 hover:border-t-4  hover:border-r-white hover:border-b-white hover:border-b-0 hover:border-r-0 hover:bg-white text-black hover:text-red-500 text-md font-mono p-2 py-1 rounded-[10px] border-2 border-b-4 border-r-4 hover:border-red-500 border-white w-full ">
  BUY NOW
</button>
  </div>
</div>


          </div>
          <div className="h-28 w-full bg-black border border-white">
         

          </div>
          <div className="bg-red-500 border border-t-1 border-white">
          <div className="w-full overflow-hidden">
      <div className="w-ful py-4">
        <div
          className="flex space-x-4 text-black text-3xl font-sans whitespace-nowrap transition-transform duration-300"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {/* Infinite looping text */}
          {Array(20)
            .fill("TOUR")
            .map((text, index) => (
              <span key={index} className="px-4">
                {text}
              </span>
            ))}
        </div>
      </div>
      
    </div>
          </div>
          
            <div className="flex flex-col-reverse md:flex-row justify-start items-start">
              <div className="w-full md:w-[60%]">
              <div  onClick={() => setShrink(1)}  className="relative w-full h-[160px] border border-white bg-black overflow-hidden">
      {/* Left Shrinking Border */}
      <div className={`${shrink === 1 ? "shrinking-border3" : ""}`}></div>

      {/* Content inside */}
      <div className="flex  h-full justify-between items-start">
      <div className="py-6 p-3 md:p-6 flex justify-between flex-col h-full text-white">
      <h2 className=" line-through text-[25px] md:text-[35px] font-light tracking-[-0.01em] leading-[1.1] text-white">Road to Lollapalooza</h2>
      <div className={`${shrink === 1 ? "opacity-100" : "opacity-0"}`}>

      <p className="text-sm line-through  ">15 FEB</p>
        <p className="text-sm line-through">ANTISOCIAL, MUMBAI</p>
        <p className="text-sm line-through">MAHARASHTRA</p>
      </div>
        
      </div>
      <div className="p-2 py-6 md:p-6 flex justify-between flex-col h-full text-white">
      <button className="bg-gray-500 line-through hover:border-l-4 hover:border-t-4  hover:border-r-white hover:border-b-white hover:border-b-0 hover:border-r-0 hover:bg-white text-white hover:text-black text-md font-mono px-2 py-1 text-start  whitespace-nowrap gap-1 flex justify-start items-start rounded-[10px] border-1 border-b-4 border-r-4 hover:border-gray-500 border-white w-30">
  BOOK NOW  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16l4-4-4-4"></path>
    </svg>
</button>
        
     
     
        
      </div>
      </div>
    </div>
    <div  onClick={() => setShrink(2)}  className="relative hidden md:block w-full h-[160px] border border-white bg-black overflow-hidden">
      {/* Left Shrinking Border */}
      <div className={`${shrink === 2 ? "shrinking-border3" : ""}`}></div>

      {/* Content inside */}
      <div className="flex h-full justify-between items-start">
      <div className="p-6 flex justify-between flex-col h-full text-white">
      <p className="font-mono text-[28px] leading-[1.24em] tracking-[-0.02em] text-left text-white">
      Lollapalooza
    </p>
    <div className={`${shrink === 2 ? "opacity-100" : "opacity-0"}`}>
      <p className="text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-start text-white font-[DM_Mono]">8-9 March</p>
      <p className="text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-start text-white font-[DM_Mono]">MUMBAI</p>
      </div>
     
        
      </div>
      <div className="p-6 flex justify-between flex-col h-full text-white">
      <button className="bg-red-500 hover:border-l-4 hover:border-t-4  hover:border-r-white hover:border-b-white hover:border-b-0 hover:border-r-0 hover:bg-white text-white hover:text-red-500 text-md font-mono px-2 py-1 text-start  whitespace-nowrap gap-1 flex justify-start items-start rounded-[10px] border-1 border-b-4 border-r-4 hover:border-red-500 border-white w-30">
  BOOK NOW  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black hover:"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16l4-4-4-4"></path>
    </svg>
</button>
        
     
     
        
      </div>
      </div>
    </div>
              </div>
              <div className="flex-1 w-full overflow-hidden">
  <img 
    className="h-80 w-full object-cover object-center" 
    alt="lolaplaza" 
    src="https://framerusercontent.com/images/kopvgonbUc9njefZeUL7YgdNeI.png?scale-down-to=1024"
  />
</div>

              
            </div>
       
            
            <div className="h-28 w-full bg-black border border-white">
         

         </div>
         <div className="bg-red-500 border border-t-1 border-white">
          <div className="w-full overflow-hidden">
      <div className="w-ful py-4">
        <div
          className="flex space-x-4 text-black text-3xl font-sans whitespace-nowrap transition-transform duration-300"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {/* Infinite looping text */}
          {Array(20)
            .fill("MUSIC")
            .map((text, index) => (
              <span key={index} className="px-4">
                {text}
              </span>
            ))}
        </div>
      </div>
      
    </div>
          </div>
          <div className="flex justify-start flex-col-reverse md:flex-row  border border-white  flex-nowrap h-min overflow-hidden p-0">
          <div className="flex flex-col flex-nowrap h-min justify-start w-full md:w-[50%]">
  {/* First Item */}
  <div className={`border-y border-white relative ${shrink2 !== 1 ? "hidden sm:block" : ""}`}>
    <div className={`${shrink2 === 1 ? "shrinking-border2" : ""}`}></div>
    <div onClick={() => setShrink2(1)} className="flex cursor-pointer justify-start items-start flex-col gap-[50px] h-min p-[24px] overflow-visible">
      <div className="flex items-start justify-between w-full flex-nowrap">
        <div>
          <h3 className="font-mono text-[28px] font-normal italic tracking-[-0.02em] leading-[1.24em] text-left text-white">
            RUAB (DIRECTOR'S CUT)
          </h3>
        </div>
        <button className="bg-red-500 hover:border-l-4 hover:border-t-4 hover:border-r-white hover:border-b-white hover:border-b-0 hover:border-r-0 hover:bg-white text-black hover:text-red-500 text-md font-mono px-2 py-1 text-start whitespace-nowrap gap-1 flex justify-start items-start rounded-[10px] border-1 border-b-4 border-r-4 hover:border-red-500 border-white w-35">
          LISTEN NOW <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black hover:">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16l4-4-4-4"></path>
          </svg>
        </button>
      </div>
      <div className={`flex flex-col text-white justify-start flex-shrink-0 transition-opacity duration-300 ease-in-out ${shrink2 === 1 ? "opacity-100" : "opacity-0"}`}>
        <p className="font-mono text-[14px] tracking-[-0.02em] leading-[1.5em] font-normal text-left">
          ℗ 2024 Thaltej Publishing Company
        </p>
        <p className="font-mono text-[14px] tracking-[-0.02em] leading-[1.5em] font-normal text-left">
          © 2024 Dhanji
        </p>
      </div>
    </div>
  </div>

  {/* Second Item */}
  <div className={`border-y border-white relative ${shrink2 !== 2 ? "hidden sm:block" : ""}`}>
    <div className={`${shrink2 === 2 ? "shrinking-border2" : ""}`}></div>
    <div onClick={() => setShrink2(2)} className="flex cursor-pointer justify-start items-start flex-col gap-[32px] h-min p-[24px] overflow-visible">
      <div className="flex items-start justify-between w-full flex-nowrap">
        <div>
          <h3 className="font-mono text-[28px] font-normal italic tracking-[-0.02em] leading-[1.24em] text-left text-white">
            Amdavad Rap Life: 2 Heavy On ‘Em, Vol. 2
          </h3>
        </div>
        <button className="bg-red-500 hover:border-l-4 hover:border-t-4 hover:border-r-white hover:border-b-white hover:border-b-0 hover:border-r-0 hover:bg-white text-black hover:text-red-500 text-md font-mono px-2 py-1 text-start whitespace-nowrap gap-1 flex justify-start items-start rounded-[10px] border-1 border-b-4 border-r-4 hover:border-red-500 border-white w-35">
          LISTEN NOW <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black hover:">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16l4-4-4-4"></path>
          </svg>
        </button>
      </div>
      <div className={`flex flex-col text-white justify-start flex-shrink-0 transition-opacity duration-300 ease-in-out ${shrink2 === 2 ? "opacity-100" : "opacity-0"}`}>
        <p className="font-mono text-[14px] tracking-[-0.02em] leading-[1.5em] font-normal text-left">
          ℗ 2023 Thaltej Publishing Company
        </p>
        <p className="font-mono text-[14px] tracking-[-0.02em] leading-[1.5em] font-normal text-left">
          © 2024 Dhanji, Siyaahi, Acharya
        </p>
      </div>
    </div>
  </div>

  {/* Third Item */}
  <div className={`border-y border-white relative ${shrink2 !== 3 ? "hidden sm:block" : ""}`}>
    <div className={`${shrink2 === 3 ? "shrinking-border2" : ""}`}></div>
    <div onClick={() => setShrink2(3)} className="flex cursor-pointer justify-start items-start flex-col gap-[32px] h-min p-[24px] overflow-visible">
      <div className="flex items-start justify-between w-full flex-nowrap">
        <div>
          <h3 className="font-mono text-[28px] font-normal italic tracking-[-0.02em] leading-[1.24em] text-left text-white">
            Bagman
          </h3>
        </div>
        <button className="bg-red-500 hover:border-l-4 hover:border-t-4 hover:border-r-white hover:border-b-white hover:border-b-0 hover:border-r-0 hover:bg-white text-black hover:text-red-500 text-md font-mono px-2 py-1 text-start whitespace-nowrap gap-1 flex justify-start items-start rounded-[10px] border-1 border-b-4 border-r-4 hover:border-red-500 border-white w-35">
          LISTEN NOW <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black hover:">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16l4-4-4-4"></path>
          </svg>
        </button>
      </div>
      <div className={`flex flex-col text-white justify-start flex-shrink-0 transition-opacity duration-300 ease-in-out ${shrink2 === 3 ? "opacity-100" : "opacity-0"}`}>
        <p className="font-mono text-[14px] tracking-[-0.02em] leading-[1.5em] font-normal text-left">
          ℗ 2023 Thaltej Publishing Company
        </p>
        <p className="font-mono text-[14px] tracking-[-0.02em] leading-[1.5em] font-normal text-left">
          © 2023 Dhanji & unfuckman
        </p>
      </div>
    </div>
  </div>
</div>
            <div className="flex-1">
            <img
  className="flex-1 h-[530px] w-full"
  alt="album_cover"
  src={
    shrink2 === 1
      ? "https://framerusercontent.com/images/ktLr4tbIGutePfCltAAnYkiWvhE.jpg"
      : shrink2 === 2
      ? "https://framerusercontent.com/images/TmmceXjNpcsJQWyQxFHzcBz2oto.jpg"
      : "https://framerusercontent.com/images/4jxBLjAXrWrNyvW1pn7qtzpfpdY.jpg"
  }
/>

            </div>
      

          </div>
          <div className="h-28 w-full bg-black border border-white">
         

         </div>
         <div className="bg-red-500 border border-t-1 border-white">
          <div className="w-full overflow-hidden">
      <div className="w-ful py-4">
        <div
          className="flex space-x-4 text-black text-3xl font-sans whitespace-nowrap transition-transform duration-300"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {/* Infinite looping text */}
          {Array(20)
            .fill("RELEASES")
            .map((text, index) => (
              <span key={index} className="px-4">
                {text}
              </span>
            ))}
        </div>
      </div>
      
    </div>
          </div>
          <div className="border border-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
      {releases.map((item) => (
        <InView key={item.id} triggerOnce>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`flex cursor-pointer border-white border items-center justify-center flex-nowrap gap-[10px] relative w-[100%] px-[24px] pt-[24px] transition-all duration-1000 ease-in-out ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10" // Hidden initially
              }`}
            >
              <div className="w-full transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className="w-full border border-white">
                  <img
                    className="block w-full h-[200px] rounded-inherit object-cover object-[0%_5%]"
                    alt="w2"
                    src={item.img}
                  />
                </div>
                <div className="flex items-start flex-col justify-between p-[24px] relative w-full flex-nowrap">
                  <div className="flex justify-start flex-col gap-[10px] h-[180px] overflow-hidden items-start flex-nowrap">
                    <h2 className="text-[20px] text-white leading-[1.4em] tracking-normal font-mono font-normal not-italic">
                      {item.album}
                    </h2>
                    <div>
                      <p className="overflow-hidden text-ellipsis text-left text-white text-[12px] font-light tracking-[-0.3px] leading-[1.5] font-mono line-clamp-4">
                        {item.article}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[14px] font-light leading-[1.5] tracking-[-0.02em] text-white text-left">
                      {item.website}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </InView>
      ))}
    </div>
          </div>
          <div className="h-28 w-full bg-black border border-white">
         

         </div>
         <div className="flex flex-nowrap  flex-col md:flex-row justify-center h-[480px] relative items-center w-[100%]">
         <div className="flex text-white border border-white flex-col flex-nowrap gap-6 md:h-full justify-end max-w-[600px] overflow-visible p-[24px] md:p-[96px_24px_40px] relative w-full md:w-[25%]">
         <p className="font-mono text-[36px] font-normal leading-[1.1em] tracking-[-0.04em] text-start text-white">
  Find us on
</p>
</div>
<div className="flex flex-col flex-nowrap items-center justify-center h-[480px] w-full md:w-[75%] gap-0 overflow-hidden p-0 relative">
  {/* First Row */}
  <div className="flex flex-row text-white flex-nowrap justify-center items-center h-1/2 w-full gap-0 overflow-visible p-0 relative">
    {/* Apple Music */}
    <div className="flex flex-row flex-nowrap content-center items-center justify-center gap-2 h-full w-1/2 border border-white overflow-hidden p-0 relative no-underline group hover:w-2/3 transition-all duration-300 ease-in-out">
      <div className=" hidden md:flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-visible whitespace-nowrap relative p-8 border border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
        <AiOutlineApple className="text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        <span>Apple Music</span>
      </div>
      <div className=" md:hidden flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-visible whitespace-nowrap relative p-8 border border-transparent  transition-all duration-300 ease-in-out">
        <AiOutlineApple className="text-2xl md:text-4xl  transition-all duration-300 ease-in-out" />
        <span>Apple Music</span>
      </div>
    </div>

    {/* Spotify */}
    <div className="flex flex-row flex-nowrap content-center items-center justify-center gap-2 h-full w-1/2 border border-white overflow-hidden p-0 relative no-underline group hover:w-2/3 transition-all duration-300 ease-in-out">
    <div className="hidden md:flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-visible whitespace-nowrap relative p-8 border border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
        <SlSocialSpotify className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        <span>Spotify</span>
      </div>
      <div className=" md:hidden flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-visible whitespace-nowrap relative p-8 border border-transparent  transition-all duration-300 ease-in-out">
        <SlSocialSpotify className="text-2xl md:text-4xl  transition-all duration-300 ease-in-out" />
        <span>Spotify</span>
      </div>
    </div>
  </div>

  {/* Second Row */}
  <div className="flex flex-row text-white flex-nowrap justify-center items-center h-1/2 w-full gap-0 overflow-visible p-0 relative">
    {/* YouTube */}
    <div className="flex flex-row flex-nowrap content-center items-center justify-center gap-2 h-full border border-white w-1/2 overflow-hidden p-0 relative no-underline group hover:w-2/3 transition-all duration-300 ease-in-out">
    <div className="hidden md:flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-visible whitespace-nowrap relative p-8 border border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
        <LiaYoutube className="text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        <span>Youtube</span>
      </div>
      <div className=" md:hidden flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-visible whitespace-nowrap relative p-8 border border-transparent  transition-all duration-300 ease-in-out">
        <LiaYoutube className="text-2xl md:text-4xl  transition-all duration-300 ease-in-out" />
        <span>Youtube</span>
      </div>
    </div>

    {/* Instagram */}
    <div className="flex flex-row flex-nowrap content-center items-center justify-center gap-2 h-full w-1/2 border border-white overflow-hidden p-0 relative no-underline group hover:w-2/3 transition-all duration-300 ease-in-out">
      <div className="hidden md:flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-visible whitespace-nowrap relative p-8 border border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
      <LiaInstagram className="text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        <span>Instagram</span>
      </div>
      <div className="flex md:hidden flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-visible whitespace-nowrap relative p-8 border border-transparent  transition-all duration-300 ease-in-out">
      <LiaInstagram className="text-2xl transition-all duration-300 ease-in-out" />
        <span>Instagram</span>
      </div>
      
    </div>
  </div>
</div>


         </div>
         <div className="flex flex-col flex-nowrap items-start content-start justify-end gap-6 cursor-pointer overflow-hidden p-8 relative w-full h-min"
         >
          <div className="flex flex-col justify-start flex-shrink-0 outline-none opacity-100 transform-none"
          >
           <p className="font-mono text-[16px] text-center font-normal leading-[1.4em] tracking-[0em] text-white no-underline">
 Join our mailing list!
</p>


          </div>
          <div  className="flex items-start justify-start flex-none flex-row flex-nowrap gap-2 text-white h-min overflow-hidden p-0 relative w-full">
          <input
  placeholder="Enter your email address"
  className="border-white  focus:border-[#0099ff] placeholder:text-white rounded-[10px] border focus:border-solid focus:border-[1px] focus:outline-none flex-1 font-[DM_Mono] tracking-[0em] leading-[1.2em] text-[14px] font-normal p-1.5"
/>
<button className="bg-red-500 cursor-pointer   hover:bg-gray-700 text-white hover:text-white text-sm font-mono px-2 py-1 text-start  whitespace-nowrap gap-1 flex justify-start items-start rounded-[10px] border-1 border-b-4 border-r-4  border-white w-20">
Submit
</button>

</div>


         </div>
         <div className="flex border text-white border-white items-center justify-center gap-[10px] flex-none flex-row flex-nowrap h-min overflow-visible p-[11px_24px] relative w-full">
         <p className="text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-start text-white font-[DM_Mono]">
         © 2025 Thaltej Publishising Company. All rights reserved.
</p>

</div>
<div className="grid md:px-6 md:py-[6px] grid-cols-2 md:grid-cols-5">
<p className="font-[DM_Mono] text-center text-white text-[14px] font-light leading-[1.5em] tracking-[-0.02em]">
Privacy policy
</p>
<p className="font-[DM_Mono] whitespace-nowrap text-white text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-center">
Return & Refund policy
</p>
<p className="font-[DM_Mono] text-white text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-center">
Terms of service
</p>
<p className="font-[DM_Mono] text-white text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-center">
Shipping policy
</p>
<p className="font-[DM_Mono] text-white text-[14px] font-light leading-[1.5em] tracking-[-0.02em] text-center">
Contact information
</p>



</div>
          
         
          
    
   

      
      </div>
    
    </div>
  );
}
