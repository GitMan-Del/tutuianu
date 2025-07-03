import { Zen_Dots , Inter } from "next/font/google";
import { ArrowBigRightDashIcon, Sparkles } from "lucide-react";
import Navbar from "./components/Navbar";
import AnimatedElements from "./components/AnimatedElements";
import ScrollIndicator from "./components/ScrollIndicator";
import HeroWaves from "./components/HeroWaves";
import Image from "next/image";
import Link from "next/link";

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="w-full h-fit p-0" id="hero">
      <Navbar/>
      {/* HERO */}
      <div className="w-full h-[95vh] flex flex-row relative bg-[#030013] z-10">
        {/* Background Image */}
        <Image src="/bg.png" alt="bg" width={1920} height={1080} className="object-cover absolute top-0 left-0 w-full h-full" />
        {/* Content Section */}
        <div className="h-full w-1/2 flex flex-col text-start items-start justify-center z-10 pl-20">
          {/* Title */}
          <h1 className={`${zenDots.className} text-6xl text-white uppercase tracking-[5px] leading-[75px]`}>
            Build Faster & <br />
            Smarter <span className="text-black bg-white rounded-xl px-3 py-1">Websites</span>
            <br />with Clean Code.
          </h1>
          
          {/* Description */}
          <p className={`${inter.className} font-light text-md text-white z-10 max-w-xl mt-4 `}>
            Transform ideas into memorable digital experiences. With a mix of modern design, solid front-end and scalable back-end, I build fast, responsive websites designed for impact. Whether you&apos;re on your first project or need a serious upgrade, I&apos;m here to bring your vision to life.
          </p>

          {/* CTA Button */}
          <button className={`${inter.className} mt-6 font-normal gap-3 hover:cursor-pointer bg-white border border-white/50 rounded-full text-sm flex flex-row items-center justify-center px-16 py-3 hover:opacity-90 transition-opacity duration-200 text-black`}>
            Start a Project 
            <Sparkles color="black" size={15} />
          </button>
        </div>
        
        {/* 3D Model Effect */}
        <div className="h-full w-1/2 -space-x-3 flex flex-row overflow-hidden pointer-events-none translate-x-16 select-none relative">
          <AnimatedElements />
        </div>
      </div>
      <ScrollIndicator />
      <HeroWaves />
      {/* Porjects Section */}
    <section className="h-screen flex flex-row justify-between w-full bg-[#030013] z-20 p-20" id="projects">
       <div className="w-1/2 h-full bg-transparent relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-50 w-[500px] h-[500px] rounded-full z-10">
        <Image 
          src="/bg.png" 
          alt="bg" 
          width={1920} 
          height={1080} 
          className="object-fill absolute top-0 left-0 w-full h-full rounded-full blur-3xl z-10"
          style={{zIndex: 0}}
        />

        {/* Cards */}
          <div className="flex flex-row absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 -space-x-20 z-20">
            {/* Card 1 */}
            <div className="-rotate-12 min-w-[300px] transform-gpu backface-hidden translate-y-5 h-[400px] rounded-[20px] bg-black text-white flex flex-col px-4 py-3 gap-3 z-20">
              <Image src="/EverGreen.png" alt="EverGreen" width={240} height={200} className="w-full border rounded-[10px] border-white" />
              <h1 className="text-xl font-medium subpixel-antialiased">EverGreenRp.com</h1>
              <p className="font-light text-xs subpixel-antialiased">EverGreen RP este locul unde povestile prind viata, iar fiecare personaj e mai mult decat un nume pe ecran. O comunitate...</p>        
              <Link href="https://evergreenrp.com" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-white text-black rounded-xl py-2 px-10 subpixel-antialiased">See Project</button>
              </Link>
            </div>
            {/* Card 2 */}
            <div className="-rotate-2 min-w-[300px] h-[400px] transform-gpu backface-hidden  -translate-y-5 rounded-[20px] bg-black text-white flex flex-col px-4 py-3 gap-3 z-10">
              <Image src="/autobots.png" alt="Toolbox" width={240} height={200} className="w-full border rounded-[10px] border-white" />
              <h1 className="text-xl font-medium subpixel-antialiased">Auto-Bots.com</h1>
              <p className="font-light text-xs subpixel-antialiased">AutoBots oferă afacerilor locale superputeri — automatizează rezervările, mesajele și marketingul fără cod...</p>        
              <Link href="https://auto-bots.com" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-white text-black rounded-xl py-2 px-10 subpixel-antialiased">See Project</button>
              </Link>
            </div>
            {/* Card 3 */}
            <div className="relative transform-gpu backface-hidden  rotate-12 min-w-[300px] translate-y-5 h-[400px] rounded-[20px] bg-black text-white flex flex-col px-4 py-3 gap-3 z-20">
              <Image src="/inv.png" alt="InvityHub" width={240} height={200} className="w-full border rounded-[10px] border-white" />
              <h1 className="text-xl font-medium subpixel-antialiased">InvityHub.com</h1>
              <p className="font-light text-xs subpixel-antialiased">InvitlyHub makes it easy to design invitations for any event and track your guest responses in real-time. Celebrate smarter.</p>        
              <Link href="https://invityhub.com" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-white text-black rounded-xl py-2 px-10 subpixel-antialiased">See Project</button>
              </Link>
              <div className="w-20 h-20 p-2 bg-black absolute top-1/2 -translate-y-1/2 -right-15 rounded-full flex items-center justify-center border-2 border-white -rotate-10"><h1 className="text-white font-bold text-3xl">+4</h1> </div>
            </div>
          </div>
          {/*  */}

       </div>
      </div>
            
      <div className="h-full w-1/2 flex flex-col text-end items-end justify-center z-10 pr-20">
        {/* Title */}
        <h1 className={`${zenDots.className} text-6xl text-white uppercase tracking-[5px] leading-[60px]`}>
        Projects That <br />
        Speak for 
          <br /> Themselves 
        </h1>
        
        {/* Description */}
        <p className= {`${inter.className} font-light text-md text-white z-10 max-w-xl mt-4 `}>
        Explore a curated selection of real client projects, where design meets performance. From startups to tools used by thousands — built with precision and style.
        </p>

        {/* CTA Button */}
        <button className={`${inter.className} mt-6 font-normal gap-3 hover:cursor-pointer bg-white border border-white/50 rounded-full text-sm flex flex-row items-center justify-center px-16 py-3 hover:opacity-90 transition-opacity duration-200 text-black`}>
          Contact Me
          <ArrowBigRightDashIcon color="black" size={20} />
        </button>
      </div>
      </section>
      {/* Team (ME) */}
      <section className="w-full px-20 h-screen flex flex-col items-center justify-center" id="team">
        <h1 className={`${zenDots.className} z-20 text-6xl text-white  text-center uppercase tracking-[5px] leading-[60px] `}>BEHIND EVERY CLEAN LINE OF <br />  CODE IS A SHARPER MIND. <br /> JUST ONE. MINE.</h1>
        <p className= {`${inter.className} font-light text-md text-white z-10 max-w-3xl mt-4 text-center `}>  I’m a one-man team — developer, designer, and strategist all in one. At just 16, I combine technical skill with creative vision to build meaningful digital experiences. Every decision, every line of code, and every pixel — it’s all me.</p>
          {/* CTA Button ./. */}
          <button className={`${inter.className} z-20 mt-6 font-normal gap-5 hover:cursor-pointer bg-white/20 backdrop-blur-2xl border border-white rounded-full text-sm flex items-center justify-center px-16 py-3 hover:opacity-90 transition-opacity duration-200 text-white`}>
            On social media
            <ArrowBigRightDashIcon />
          </button>
        <Image src="/Ellipse 12.svg" alt="half c" width={1711} height={691} className="w-full absolute h-full object-contain"/>
      </section>
      {/* FOOTER ./. */}
       <footer className="bg-[#030013] text-white py-16 px-6 md:px-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">

        {/* TITLU */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Let’s build something cool together
        </h2>

        {/* EMAIL & LOCATION */}
        <div className="text-gray-400 text-sm md:text-base space-y-1">
          <p>📍 Based in Constanța, Romania</p>
          <p>📬 tutuianuwebdev@gmail.com</p>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-6 mt-4">
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://discord.com/users/yourDiscordID" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition text-xl">
            <i className="fab fa-discord"></i>
          </a>
          <a href="mailto:tutuianuwebdev@gmail.com" className="hover:text-fuchsia-400 transition text-xl">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* FOOTER LINE */}
        <p className="text-xs text-gray-600 pt-10 border-t border-white/10 w-full mt-10">
          © {new Date().getFullYear()} Tutuianu.dev — Crafted with passion & clean code.
        </p>
      </div>
    </footer>




    </div>
  );
}
