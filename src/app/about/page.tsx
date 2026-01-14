"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA, CTASection } from "@/components/CTAButtons";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { 
  Shield, 
  Heart, 
  Award,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Sparkles,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-First Care",
    description: "Every decision we make is centered around your comfort, safety, and long-term oral health.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Shield,
    title: "Uncompromised Hygiene",
    description: "We maintain the highest standards of sterilization and infection control protocols.",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    icon: Award,
    title: "Excellence in Treatment",
    description: "Our team pursues continuous education to bring you the latest dental innovations.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: Sparkles,
    title: "Aesthetic Artistry",
    description: "We blend medical science with artistic vision to create naturally beautiful smiles.",
    color: "bg-indigo-50 text-indigo-600"
  },
];

const stats = [
  { number: "15+", label: "Years Exp." },
  { number: "10k+", label: "Patients" },
  { number: "25+", label: "Specialists" },
  { number: "50+", label: "Awards" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: easeOut }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full glass border border-cyan-100 text-cyan-700 text-[10px] sm:text-xs md:text-sm font-black mb-6 sm:mb-8 uppercase tracking-widest">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              Our Legacy
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tighter leading-[1.1]">
              Crafting Smiles, <br />
              <span className="gradient-text">Changing Lives</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
              For over 15 years, DentaCare has been at the forefront of dental innovation, 
              combining world-class expertise with a patient-centric philosophy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
            <motion.div 
              {...fadeInUp}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-xl sm:shadow-2xl border-4 sm:border-6 md:border-8 lg:border-12 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=1000&fit=crop"
                  alt="Our Clinic"
                  width={800}
                  height={1000}
                  className="w-full h-100 sm:h-112.5 md:h-125 lg:h-150 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 md:-bottom-8 md:-right-6 lg:-bottom-12 lg:-right-12 glass rounded-2xl sm:rounded-3xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-8 shadow-lg sm:shadow-2xl z-20 border border-slate-100 max-w-37.5 sm:max-w-45 md:max-w-55 lg:max-w-70">
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl lg:rounded-2xl bg-cyan-600 flex items-center justify-center">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <p className="text-[9px] sm:text-xs md:text-sm lg:text-slate-600 font-bold italic leading-relaxed">
                    &quot;The most advanced dental facility I&apos;ve ever visited. Truly world-class.&quot;
                  </p>
                  <p className="text-[8px] sm:text-[10px] md:text-sm font-black text-slate-900 uppercase tracking-widest">— Patient Review</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tight">
                Your Trusted Partner in <br />
                <span className="gradient-text">Medical Excellence</span>
              </h2>
              <p className="text-base sm:text-lg md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Founded by a group of passionate specialists, DentaCare was established to bridge the gap between 
                complex medical procedures and patient comfort. Our journey began with a single vision: to make 
                advanced dentistry accessible without compromising on the personal touch.
              </p>
              <p className="text-base sm:text-lg md:text-lg text-slate-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                Today, we stand as a beacon of excellence, equipped with cutting-edge digital diagnostics, 
                minimally invasive laser technology, and a team that treats every patient like family.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 sm:p-6 md:p-8 rounded-3xl sm:rounded-4xl bg-slate-50 border border-slate-100 group hover:bg-cyan-600 transition-all duration-500">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 group-hover:text-white transition-colors">{stat.number}</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest mt-2 group-hover:text-cyan-100 transition-colors">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <motion.div 
              {...fadeInUp}
              className="bg-white rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-slate-100 hover-lift"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-cyan-600 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 shadow-lg shadow-cyan-600/20">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-3 sm:mb-4 md:mb-6 tracking-tight">Our Mission</h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                To redefine the dental experience by harmonizing precision medical science with compassionate 
                care, ensuring every patient achieves their optimal oral health and aesthetic goals.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="bg-slate-900 rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-slate-800 hover-lift"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-teal-400 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 shadow-lg shadow-teal-400/20">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-slate-900" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4 md:mb-6 tracking-tight">Our Vision</h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-medium">
                To be the global benchmark for aesthetic and functional dentistry, where technology serves 
                humanity, and every smile we create inspires confidence and joy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
              The <span className="gradient-text">DentaCare</span> DNA
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              The core principles that drive our clinical excellence and patient interactions every day.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="group p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] bg-white border border-slate-100 hover:border-cyan-200 transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl text-center"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl ${value.color} flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-black text-slate-900 mb-2 sm:mb-3 md:mb-4">{value.title}</h3>
                <p className="text-xs sm:text-sm md:text-slate-600 font-medium leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Commitment */}
      <section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(8,145,178,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-white/5 text-cyan-400 text-[10px] sm:text-xs md:text-sm font-black mb-6 sm:mb-8 uppercase tracking-widest border border-white/10">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                Safety Standards
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white mb-8 sm:mb-10 tracking-tight leading-tight">
                Zero Compromise on <br />
                <span className="text-cyan-400 font-black">Your Health</span>
              </h2>
              
              <ul className="grid sm:grid-cols-1 gap-4 sm:gap-6">
                {[
                  "Multi-stage Hospital Grade Sterilization",
                  "HEPA-14 Advanced Air Filtration Systems",
                  "Single-use Medical Grade Disposables",
                  "AI-Monitoring for Infection Control",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-3xl sm:rounded-4xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-cyan-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg font-bold text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="space-y-4 sm:space-y-6">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=600&fit=crop"
                  alt="Clinic Interior"
                  width={400}
                  height={600}
                  className="rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] shadow-xl sm:shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full h-50 sm:h-62.5 md:h-75 lg:h-87.5 object-cover"
                />
              </div>
              <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8 md:mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=600&fit=crop"
                  alt="Dental Equipment"
                  width={400}
                  height={600}
                  className="rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] shadow-xl sm:shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full h-50 sm:h-62.5 md:h-75 lg:h-87.5 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}