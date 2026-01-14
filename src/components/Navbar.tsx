"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/before-after", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-lg shadow-slate-900/5" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-slate-900/20">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tighter leading-none">DentaCare</span>
                <span className="text-[8px] sm:text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-0.5 sm:mt-1">Dental Excellence</span>
              </div>
            </Link>

          <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive 
                      ? "text-white" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute inset-0 bg-slate-900 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-black text-slate-900 group"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <Phone className="w-4 h-4 text-cyan-600" />
              </div>
              +91 98765 43210
            </a>
            <Link href="/contact">
              <Button className="gradient-primary text-white rounded-full px-8 py-6 text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-cyan-500/20">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-2xl"
          >
              <div className="px-4 py-8 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-4 rounded-[2rem] text-xl font-bold transition-all ${
                        pathname === link.href 
                          ? "bg-slate-900 text-white" 
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-8 mt-6 border-t border-slate-100 space-y-4"
                >
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-4 px-6 py-4 rounded-[2rem] bg-cyan-50 text-cyan-900 font-bold"
                  >
                    <Phone className="w-6 h-6 text-cyan-600" />
                    +91 98765 43210
                  </a>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full gradient-primary text-white rounded-[2rem] py-8 text-xl font-bold">
                      Book Appointment
                    </Button>
                  </Link>
                </motion.div>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
