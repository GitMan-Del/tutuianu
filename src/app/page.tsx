import { Zen_Dots, Inter } from "next/font/google";
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
      <Navbar />
      {/* HERO */}
      <div className="flex flex-col md:flex-row gap-0 justify-center relative w-full h-[95vh] bg-[#030013] z-10">
        {/* Background Image */}
        <Image
          src="/bg.png"
          alt="bg"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Content Section */}
        <div className="flex flex-col items-start justify-center h-full w-full px-5 text-center z-10 md:text-start md:pl-20 md:w-1/2">
          {/* Title */}
          <h1
            className={`${zenDots.className} w-full text-xl text-white uppercase text-center md:text-start md:text-6xl md:tracking-[5px] md:leading-[75px]`}
          >
            Build Faster & <br />
            Smarter{" "}
            <span className="text-black bg-white rounded-xl px-3 py-1">
              Websites
            </span>
            <br />
            with Clean Code.
          </h1>

          {/* Description */}
          <p
            className={`${inter.className} text-xs font-light text-white z-10 mt-4 md:text-md md:max-w-xl`}
          >
            Transform ideas into memorable digital experiences. With a mix of modern design, solid front-end and scalable back-end, I build fast, responsive websites designed for impact. Whether you&apos;re on your first project or need a serious upgrade, I&apos;m here to bring your vision to life.
          </p>

          {/* CTA Button */}
          <button
            className={`${inter.className} px-4 py-1 mt-6 gap-3 bg-white border border-white/50 rounded-full text-sm flex flex-row items-center justify-center mx-auto hover:cursor-pointer hover:opacity-90 transition-opacity duration-200 text-black md:mx-0 md:font-normal md:px-16 md:py-3`}
          >
            Start a Project
            <Sparkles color="black" size={15} />
          </button>

          <HeroWaves />
          <ScrollIndicator />
        </div>
        {/* 3D Model Effect */}
        <div className="hidden md:flex h-full w-1/2 flex-row overflow-hidden pointer-events-none select-none relative">
          <AnimatedElements />
        </div>
      </div>
      
      {/* Projects Section */}
      <section
        className="flex md:h-screen h-fit w-full md:flex-row flex-col text-center justify-between bg-[#030013] z-20 p-0 md:p-20"
        id="projects"
      >
        {/* Desktop layout - unchanged */}
        <div className="hidden md:block relative md:w-1/2 h-full bg-transparent">
          <div className="absolute left-50 top-1/2 w-[500px] h-[500px] -translate-y-1/2 rounded-full z-10">
            <Image
              src="/bg.png"
              alt="bg"
              width={1920}
              height={1080}
              className="absolute top-0 left-0 w-full h-full object-fill rounded-full blur-3xl z-10"
              style={{ zIndex: 0 }}
            />
            {/* Cards */}
            <div className="flex flex-row absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 -space-x-20 z-20">
              {/* Card 1 */}
              <div className="flex flex-col gap-3 px-4 py-3 min-w-[300px] h-[400px] rounded-[20px] bg-black text-white z-20 -rotate-12 transform-gpu backface-hidden translate-y-5">
                <Image
                  src="/EverGreen.png"
                  alt="EverGreen"
                  width={240}
                  height={200}
                  className="w-full border border-white rounded-[10px]"
                />
                <h1 className="text-xl font-medium subpixel-antialiased">
                  EverGreenRp.com
                </h1>
                <p className="font-light text-xs subpixel-antialiased">
                  EverGreen RP este locul unde povestile prind viata, iar fiecare personaj e mai mult decat un nume pe ecran. O comunitate...
                </p>
                <Link
                  href="https://evergreenrp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full bg-white text-black rounded-xl py-2 px-10 subpixel-antialiased">
                    See Project
                  </button>
                </Link>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col gap-3 px-4 py-3 min-w-[300px] h-[400px] rounded-[20px] bg-black text-white z-10 -rotate-2 transform-gpu backface-hidden -translate-y-5">
                <Image
                  src="/autobots.png"
                  alt="Toolbox"
                  width={240}
                  height={200}
                  className="w-full border border-white rounded-[10px]"
                />
                <h1 className="text-xl font-medium subpixel-antialiased">
                  Auto-Bots.com
                </h1>
                <p className="font-light text-xs subpixel-antialiased">
                  AutoBots oferă afacerilor locale superputeri — automatizează rezervările, mesajele și marketingul fără cod...
                </p>
                <Link
                  href="https://auto-bots.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full bg-white text-black rounded-xl py-2 px-10 subpixel-antialiased">
                    See Project
                  </button>
                </Link>
              </div>
              {/* Card 3 */}
              <div className="relative flex flex-col gap-3 px-4 py-3 min-w-[300px] h-[400px] rounded-[20px] bg-black text-white z-20 rotate-12 transform-gpu backface-hidden translate-y-5">
                <Image
                  src="/inv.png"
                  alt="InvityHub"
                  width={240}
                  height={200}
                  className="w-full border border-white rounded-[10px]"
                />
                <h1 className="text-xl font-medium subpixel-antialiased">
                  InvityHub.com
                </h1>
                <p className="font-light text-xs subpixel-antialiased">
                  InvitlyHub makes it easy to design invitations for any event and track your guest responses in real-time. Celebrate smarter.
                </p>
                <Link
                  href="https://invityhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full bg-white text-black rounded-xl py-2 px-10 subpixel-antialiased">
                    See Project
                  </button>
                </Link>
                <div className="absolute top-1/2 -right-15 w-20 h-20 p-2 -translate-y-1/2 bg-black rounded-full flex items-center justify-center border-2 border-white -rotate-10">
                  <h1 className="text-white font-bold text-3xl">+4</h1>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>

        {/* Mobile/Tablet layout */}
        <div className="flex flex-col px-4 w-full md:hidden items-center justify-center min-h-screen py-10">
          {/* Title */}
          <h1
            className={`${zenDots.className} text-3xl sm:text-4xl text-white uppercase tracking-[2px] leading-[40px] mb-2`}
          >
            Projects That <br />
            Speak for
            <br /> Themselves
          </h1>
          {/* Description */}
          <p
            className={`${inter.className} font-light text-sm text-white z-10 max-w-xl mt-2`}
          >
            Explore a curated selection of real client projects, where design meets performance. From startups to tools used by thousands — built with precision and style.
          </p>
          {/* CTA Button */}
          <button
            className={`${inter.className} mt-6 font-normal gap-3 bg-white border border-white/50 rounded-full text-sm flex flex-row items-center justify-center px-10 py-3 hover:cursor-pointer hover:opacity-90 transition-opacity duration-200 text-black`}
          >
            Contact Me
            <ArrowBigRightDashIcon color="black" size={20} />
          </button>
          {/* Cards */}
          <div className="flex flex-col gap-8 w-full items-center justify-center mt-10">
            {/* Card 1 */}
            <div className="flex flex-col gap-3 px-4 py-3 min-w-[260px] max-w-[340px] w-full h-fit rounded-[20px] bg-black text-white z-20">
              <Image
                src="/EverGreen.png"
                alt="EverGreen"
                width={240}
                height={200}
                className="w-full border border-white rounded-[10px]"
              />
              <h1 className="text-xl font-medium subpixel-antialiased">
                EverGreenRp.com
              </h1>
              <p className="font-light text-xs subpixel-antialiased">
                EverGreen RP este locul unde povestile prind viata, iar fiecare personaj e mai mult decat un nume pe ecran. O comunitate...
              </p>
              <Link
                href="https://evergreenrp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-white text-black rounded-xl py-2 px-10 subpixel-antialiased">
                  See Project
                </button>
              </Link>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col gap-3 px-4 py-3 min-w-[260px] max-w-[340px] w-full h-fit rounded-[20px] bg-black text-white z-10">
              <Image
                src="/autobots.png"
                alt="Toolbox"
                width={240}
                height={200}
                className="w-full border border-white rounded-[10px]"
              />
              <h1 className="text-xl font-medium subpixel-antialiased">
                Auto-Bots.com
              </h1>
              <p className="font-light text-xs subpixel-antialiased">
                AutoBots oferă afacerilor locale superputeri — automatizează rezervările, mesajele și marketingul fără cod...
              </p>
              <Link
                href="https://auto-bots.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-white text-black rounded-xl py-2 px-10 subpixel-antialiased">
                  See Project
                </button>
              </Link>
            </div>
            {/* Card 3 */}
            <div className="relative flex flex-col gap-3 px-4 py-3 min-w-[260px] max-w-[340px] w-full h-fit rounded-[20px] bg-black text-white z-20">
              <Image
                src="/inv.png"
                alt="InvityHub"
                width={240}
                height={200}
                className="w-full border border-white rounded-[10px]"
              />
              <h1 className="text-xl font-medium subpixel-antialiased">
                InvityHub.com
              </h1>
              <p className="font-light text-xs subpixel-antialiased">
                InvitlyHub makes it easy to design invitations for any event and track your guest responses in real-time. Celebrate smarter.
              </p>
              <Link
                href="https://invityhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-white text-black rounded-xl py-2 px-10 subpixel-antialiased">
                  See Project
                </button>
              </Link>
              {/* +4 badge only on desktop */}
            </div>
          </div>
        </div>

        {/* Desktop right side - unchanged */}
        <div className="hidden md:flex flex-col items-end justify-center h-full md:w-1/2 text-end z-10 md:pr-20">
          {/* Title */}
          <h1
            className={`${zenDots.className} md:text-6xl text-white uppercase md:tracking-[5px] md:leading-[60px]`}
          >
            Projects That <br />
            Speak for
            <br /> Themselves
          </h1>

          {/* Description */}
          <p
            className={`${inter.className} font-light md:text-md text-white z-10 md:max-w-xl mt-4`}
          >
            Explore a curated selection of real client projects, where design meets performance. From startups to tools used by thousands — built with precision and style.
          </p>

          {/* CTA Button */}
          <button
            className={`${inter.className} mt-6 font-normal gap-3 bg-white border border-white/50 rounded-full text-sm flex flex-row items-center justify-center md:px-16 md:py-3 hover:cursor-pointer hover:opacity-90 transition-opacity duration-200 text-black`}
          >
            Contact Me
            <ArrowBigRightDashIcon color="black" size={20} />
          </button>
        </div>
      </section>
      {/* Team (ME) */}
      <section
        className="flex w-full h-fit max-h-fit md:min-h-[70vh] flex-col items-center justify-center px-4 md:px-20 md:py-10 py-16 relative"
        id="team"
      >
        <h1
          className={`${zenDots.className} z-20 text-xl md:text-6xl text-white text-center uppercase tracking-[2px] md:tracking-[5px] leading-7 md:leading-[60px]`}
        >
          BEHIND EVERY CLEAN LINE OF <br className="hidden md:block" /> CODE IS A SHARPER MIND. <br className="hidden md:block" /> JUST
          ONE. MINE.
        </h1>
        <p
          className={`${inter.className} font-light text-xs md:text-md text-white z-10 max-w-xl md:max-w-3xl mt-4 text-center`}
        >
          I&apos;m a one-man team — developer, designer, and strategist all in one. At just 16, I combine technical skill with creative vision to build meaningful digital experiences. Every decision, every line of code, and every pixel — it&apos;s all me.
        </p>
        {/* CTA Button */}
        <button
          className={`${inter.className} z-20 mt-6 font-normal gap-2 md:gap-5 bg-white/20 backdrop-blur-2xl border border-white rounded-full text-xs md:text-sm flex items-center justify-center px-6 md:px-16 py-2 md:py-3 hover:cursor-pointer hover:opacity-90 transition-opacity duration-200 text-white`}
        >
          On social media
          <ArrowBigRightDashIcon size={18} className="md:size-[24px]" />
        </button>
        <Image
          src="/Ellipse 12.svg"
          alt="half c"
          width={1711}
          height={691}
          className="absolute w-full h-full object-contain left-0 top-0 pointer-events-none -z-10"
        />
      </section>
      {/* FOOTER  */}
      <footer className="bg-[#030013] text-white py-16 px-6 border-t border-white/10 md:px-24">
        <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto text-center">
          {/* TITLU */}
          <h2 className={`${zenDots.className} text-3xl font-bold tracking-tight md:text-4xl`}>
            Let&apos;s build something cool together
          </h2>

          {/* EMAIL & LOCATION */}
          <div className="text-gray-400 text-sm space-y-1 md:text-base">
            <p>📍 Based in Constanța, Romania</p>
            <p>📬 tutuianuwebdev@gmail.com</p>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-400 transition text-xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://discord.com/users/yourDiscordID"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-400 transition text-xl"
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              href="mailto:tutuianuwebdev@gmail.com"
              className="hover:text-fuchsia-400 transition text-xl"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          {/* FOOTER LINE */}
          <p className="w-full mt-10 pt-10 text-xs text-gray-600 border-t border-white/10">
            © {new Date().getFullYear()} Tutuianu.dev — Crafted with passion & clean code.
          </p>
        </div>
      </footer>
    </div>
  );
}
