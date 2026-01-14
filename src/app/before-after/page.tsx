"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA, CTASection } from "@/components/CTAButtons";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Sparkles, Quote } from "lucide-react";

const transformations = [
  {
    id: 1,
    before: "/smile1.jpeg?w=800&h=600&fit=crop",
    after: "/smile2.jpeg?w=800&h=600&fit=crop",
    treatment: "Smile Makeover",
    description: "Complete smile transformation with custom veneers and professional medical-grade whitening.",
    patient: "Priya M.",
    quote: "I never thought I could have such a beautiful smile. The team at DentaCare made my dream come true!",
  },
  {
    id: 2,
    before: "/white1.jpeg?w=800&h=600&fit=crop",
    after: "/white2.jpeg?w=800&h=600&fit=crop",
    treatment: "Enamel Whitening",
    description: "Cold-light laser activation treatment resulting in 8 shades brighter smile in just one session.",
    patient: "Anita K.",
    quote: "The whitening treatment was quick and painless. My smile is now luminous and healthy!",
  },
  {
    id: 3,
    before: "/Precision.jpeg?w=800&h=600&fit=crop",
    after: "/Precision2.jpeg?w=800&h=600&fit=crop",
    treatment: "Precision Implants",
    description: "Biological tooth replacement using 3D-guided surgical mastery for a natural functional result.",
    patient: "Rahul S.",
    quote: "After losing my tooth, I was so self-conscious. Now I can eat and smile with absolute confidence.",
  },
  {
    id: 4,
    before: "/ortho1.jpeg?w=800&h=600&fit=crop",
    after: "/ortho2.jpeg?w=800&h=600&fit=crop",
    treatment: "Modern Orthodontics",
    description: "18-month invisible aligner treatment to correct severe crowding and bite misalignment.",
    patient: "Vikram D.",
    quote: "The aligners were virtually invisible. Nobody even knew I was undergoing treatment!",
  },
];

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full">
      {/* Before Image */}
      <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden border-[3px] sm:border-4 md:border-[6px] lg:border-8 border-white shadow-lg sm:shadow-xl md:shadow-2xl">
        <Image
          src={before}
          alt="Before"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-6 lg:left-6 px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 bg-slate-900/80 backdrop-blur-md text-white text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-widest rounded-full z-40">
          Initial State
        </div>
      </div>

      {/* After Image */}
      <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden border-[3px] sm:border-4 md:border-[6px] lg:border-8 border-white shadow-lg sm:shadow-xl md:shadow-2xl">
        <Image
          src={after}
          alt="After"
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-6 lg:right-6 px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 bg-cyan-600/80 backdrop-blur-md text-white text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-widest rounded-full z-40">
          Transformed
        </div>
      </div>
    </div>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: easeOut }
};

export default function BeforeAfterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full glass border border-cyan-100 text-cyan-700 text-[10px] sm:text-xs md:text-sm font-black mb-6 sm:mb-8 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Patient Transformations
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tighter leading-[1.1]">
              Evidence of <br />
              <span className="gradient-text">Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-slate-600 leading-relaxed font-medium">
              Real patients, real stories, real results. Slide to compare the 
              meticulous craftsmanship of our clinical team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {transformations.map((item, idx) => (
              <motion.div
                key={item.id}
                {...fadeInUp}
                className={`grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <BeforeAfterSlider before={item.before} after={item.after} />
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-widest mb-3 sm:mb-4 md:mb-6">
                    {item.treatment}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4 md:mb-6 tracking-tight">
                    {item.patient}&apos;s Transformation
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-medium">
                    {item.description}
                  </p>

                  <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-slate-50 border border-slate-100 italic">
                    <Quote className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-cyan-200" />
                    <p className="text-xs sm:text-sm md:text-slate-600 font-bold leading-relaxed relative z-10">
                      &quot;{item.quote}&quot;
                    </p>
                    <div className="mt-3 sm:mt-4 md:mt-6 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 md:mt-10">
                    <Link href="/contact">
                      <Button className="w-full sm:w-auto gradient-primary text-white rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-bold hover:scale-105 transition-all shadow-xl md:shadow-xl active:scale-95">
                        Achieve Similar Results
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(8,145,178,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 md:mb-10 tracking-tight leading-tight">
              Every Smile Tells a <span className="text-cyan-400">Story</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-8 sm:mb-12 md:mb-16 italic">
              &quot;Our goal isn&apos;t just to fix teeth, but to restore the confidence 
              that allows our patients to live their lives without limits.&quot;
            </p>
            <div className="flex justify-center gap-3 sm:gap-4">
              <div className="w-8 h-0.5 sm:w-10 sm:h-1 md:w-12 md:h-1 lg:w-16 bg-cyan-600 rounded-full" />
              <div className="w-2 h-0.5 sm:w-3 sm:h-1 md:w-4 md:h-1 bg-cyan-600 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}