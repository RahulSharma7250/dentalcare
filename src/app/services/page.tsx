"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA, CTASection } from "@/components/CTAButtons";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { ArrowRight, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  {
    id: "braces",
    title: "Braces & Aligners",
    description: "Mastering the art of alignment with discreet ceramic options and state-of-the-art invisible aligners.",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&h=600&fit=crop",
    features: [
      "AI-Powered Alignment Tracking",
      "Virtually Invisible Ceramic Braces",
      "Proprietary Aligner Systems",
      "Night-time Only Options",
    ],
    icon: "🦷",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "implants",
    title: "Precision Implants",
    description: "Biological tooth replacement using 3D-guided surgical mastery for life-long structural integrity.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop",
    features: [
      "Titanium & Zirconia Options",
      "Guided Bio-Engineered Surgery",
      "Same-Day Functional Loading",
      "Minimal Trauma Techniques",
    ],
    icon: "✨",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    id: "rootcanal",
    title: "Laser Endodontics",
    description: "Microscopic root canal therapy that prioritizes your natural tooth preservation with zero pain.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop",
    features: [
      "Zeiss Microscopic Precision",
      "Laser-Assisted Disinfection",
      "Bioceramic Filling Materials",
      "Single-Session Efficiency",
    ],
    icon: "💎",
    color: "bg-teal-50 text-teal-600",
  },
  {
    id: "makeover",
    title: "Smile Architecture",
    description: "A comprehensive aesthetic reconstruction blending digital design with hand-crafted artistry.",
    image: "/smile.png?w=800&h=600&fit=crop",
    features: [
      "Digital Smile Design (DSD)",
      "Hand-Layered Porcelain Veneers",
      "Laser Gum Recontouring",
      "Bio-Mimetic Restorations",
    ],
    icon: "😊",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "whitening",
    title: "Enamel whitening",
    description: "Medical-grade brightness treatments that protect your enamel while delivering luminous results.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
    features: [
      "Cold-Light Laser Activation",
      "Sensitivity-Free Formula",
      "Deep Stain Molecular Removal",
      "Custom Maintenance Guard",
    ],
    icon: "⭐",
    color: "bg-sky-50 text-sky-600",
  },
  {
    id: "general",
    title: "Total Oral Wellness",
    description: "Beyond cleaning. A holistic approach to oral health that monitors the systemic link to your well-being.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
    features: [
      "Air-Flow Biofilm Management",
      "Early Oral Cancer Screening",
      "DNA-Based Bacteria Analysis",
      "Holistic Wellness Plans",
    ],
    icon: "🏥",
    color: "bg-indigo-50 text-indigo-600",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: easeOut }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden mesh-gradient">
        <div className="absolute top-1/4 -right-20 w-75 h-75 md:w-150 md:h-150 bg-cyan-200/30 rounded-full blur-[80px] md:blur-[120px] animate-blob" />
        <div className="absolute -bottom-20 -left-20 w-75 h-75 md:w-150 md:h-150 bg-teal-200/30 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-2000" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full glass border border-cyan-100 text-cyan-700 text-[10px] sm:text-xs font-black mb-6 sm:mb-8 uppercase tracking-[0.2em] shadow-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Clinical Mastery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tighter leading-none">
              Elite Dental <br />
              <span className="gradient-text">Specialties</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              We provide a full spectrum of advanced dental procedures, harmonizing 
              medical precision with luxury patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List with Aesthetic Enhancements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                id={service.id}
                {...fadeInUp}
                className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${idx % 2 === 1 ? "lg:order-2" : ""} relative group`}>
                  <div className="relative z-10 rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-lg sm:shadow-xl md:shadow-[0_40px_80px_rgba(0,0,0,0.12)] border-4 sm:border-[6px] md:border-8 lg:border-12 border-white transition-transform duration-1000 group-hover:scale-[1.03]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-700" />
                  </div>
                  
                  {/* Floating Icon Card */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -bottom-4 sm:-bottom-6 md:-bottom-8 ${
                      idx % 2 === 1 ? "-left-2 sm:-left-4 md:-left-6" : "-right-2 sm:-right-4 md:-right-6"
                    } w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-24 rounded-2xl sm:rounded-3xl md:rounded-2xl lg:rounded-[2.5rem] ${
                      service.color.split(' ')[0]
                    } backdrop-blur-xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-5xl shadow-lg sm:shadow-2xl z-20 border-2 sm:border-3 md:border-4 lg:border-8 border-white group-hover:rotate-12 transition-transform duration-700`}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-50 text-slate-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] mb-3 sm:mb-4 border border-slate-100">
                    Procedure 0{idx + 1}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 group/item hover:bg-white hover:shadow-xl transition-all duration-500">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg sm:rounded-xl bg-cyan-600 flex items-center justify-center shrink-0 group-hover/item:rotate-12 transition-transform shadow-md sm:shadow-lg shadow-cyan-500/20">
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="text-slate-900 font-black text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-widest leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="w-full sm:w-auto gradient-primary text-white rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base font-black hover:scale-105 active:scale-95 transition-all shadow-xl sm:shadow-2xl shadow-cyan-500/30 group">
                      Schedule Review
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Consultation */}
      <section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="card-premium bg-white/5 border-white/10 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 shadow-xl sm:shadow-2xl overflow-hidden group rounded-3xl sm:rounded-4xl md:rounded-[3rem] lg:rounded-[4rem] xl:rounded-[5rem]">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 md:mb-10 tracking-tighter leading-none">
                  Design Your <br />
                  <span className="text-cyan-400">Perfect Smile</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-medium">
                  Experience a digital preview of your results before the treatment starts. 
                  Our specialists use AI smile design technology for absolute predictability.
                </p>
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-white text-slate-900 rounded-full px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-8 text-sm sm:text-base lg:text-lg font-black hover:bg-cyan-400 hover:text-white transition-all shadow-xl sm:shadow-2xl active:scale-95">
                    Request Digital Smile Design
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] lg:rounded-[3rem] xl:rounded-[4rem] overflow-hidden shadow-xl sm:shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 border-4 sm:border-[6px] md:border-8 border-white/10">
                  <Image
                    src="/doct2.jpeg?w=600&h=600&fit=crop&crop=face"
                    alt="Dentist"
                    width={600}
                    height={600}
                    className="w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 xl:h-150 object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-12 md:-right-12 lg:-top-16 lg:-right-16 xl:-top-20 xl:-right-20 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80 bg-cyan-500/20 rounded-full blur-2xl sm:blur-[60px] md:blur-[80px] lg:blur-[100px] xl:blur-[120px] group-hover:scale-150 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}