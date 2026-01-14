"use client";

import { Phone, MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:+919876543210"
        className="w-14 h-14 rounded-full gradient-primary text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:opacity-90 transition-all hover:scale-110"
        aria-label="Call"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

export function CTASection() {
  return (
    <section className="py-20 md:py-32 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Ready for Your <br className="sm:hidden" /> Perfect Smile?
          </h2>
          <p className="text-cyan-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Book your appointment today and experience premium dental care with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-6 bg-white text-cyan-600 rounded-full font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-2xl active:scale-95"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-6 bg-green-500 text-white rounded-full font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-2xl active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
