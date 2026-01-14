"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-12 md:mb-20">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-cyan-500/10">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-slate-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tighter leading-none">DentaCare</span>
                <span className="text-[8px] sm:text-[10px] font-black text-cyan-400 uppercase tracking-widest mt-0.5 sm:mt-1">Dental Excellence</span>
              </div>
            </Link>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-sm">
              Crafting confident smiles through a fusion of advanced technology and compassionate medical expertise.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-xs mb-6 sm:mb-8">Navigation</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/doctors", label: "Doctors" },
                { href: "/before-after", label: "Results" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center group font-bold text-sm sm:text-base"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-cyan-400 mr-0 transition-all group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-xs mb-6 sm:mb-8">Specialties</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                "Modern Orthodontics",
                "Advanced Implantology",
                "Laser Endodontics",
                "Cosmetic Smile Design",
                "Pediatric Dentistry",
                "Preventive Care",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-white transition-colors flex items-center group font-bold text-sm sm:text-base"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-teal-400 mr-0 transition-all group-hover:mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] sm:text-xs mb-6 sm:mb-8">Get in Touch</h3>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <span className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
                  123 Healthcare Avenue, Medical District, Mumbai 400001
                </span>
              </li>
              <li className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <a href="tel:+919876543210" className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm font-bold flex items-center">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <a href="mailto:care@dentacare.com" className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm font-bold flex items-center">
                  care@dentacare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 text-[9px] sm:text-xs font-black uppercase tracking-[0.2em] text-slate-500 text-center md:text-left">
            <p>© 2025 DentaCare International</p>
            <div className="flex gap-4 sm:gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Ethics</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-[9px] sm:text-xs font-black text-cyan-400">
            <span className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            SYSTEMS ACTIVE & SECURE
          </div>
        </div>
      </div>
    </footer>

  );
}
