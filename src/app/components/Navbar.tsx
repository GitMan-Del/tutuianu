import Link from "next/link";

export default function Navbar(){

    return(
        <div className="w-full text-sm px-20 fixed text-white/80 top-2 right-0 h-10 bg-transparent flex flex-row items-center justify-between z-100">
            <div className="flex flex-row gap-10  font-light">
                <Link className="hover:cursor-pointer hover:font-semibold hover:translate-x-0.5 transition-all duration-200" href="#hero">Home</Link>
                <Link className="hover:cursor-pointer hover:font-semibold hover:translate-x-0.5 transition-all duration-200" href="#projects">Projects</Link>
                <Link className="hover:cursor-pointer hover:font-semibold hover:translate-x-0.5 transition-all duration-200" href="#team">Team</Link>
            </div>
            <div>
                <h1>tutuianuwebdev@gmail.com</h1>
            </div>      
        </div>
    );
}