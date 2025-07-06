// app/contact/page.tsx

import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { Zen_Dots } from "next/font/google";


const zenDots = Zen_Dots({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
  });

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-[#030013] text-white relative overflow-hidden">
      {/* Wrapper */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 z-10 relative">
        {/* Contact Form */}
        <form className="space-y-6">
          <h1 className={`${zenDots.className} text-4xl md:text-5xl font-bold uppercase tracking-wide `}      >
            Let&apos;s <span className="bg-white text-black px-3 py-1 rounded-xl">talk</span>
          </h1>
          <p className="text-sm text-white/70 max-w-md">
            Got a project in mind or just want to say hello? Fill in the form and I’ll get back to you soon.
          </p>

          <div>
            <label className="block mb-2 text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Your Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} /> <span>+40 712 345 678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} /> <span>tutuianuwebdev@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Social</h2>
            <div className="flex gap-4 text-white/80">
              <a href="https://instagram.com" target="_blank" className="hover:text-white">
                <Instagram />
              </a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-white">
                <Linkedin />
              </a>
            </div>
          </div>

          <div className="mt-10 text-sm text-white/50">
            © {new Date().getFullYear()} Tutuianu.dev | All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
