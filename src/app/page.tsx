"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA, CTASection } from "@/components/CTAButtons";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { 
  Shield, 
  Award, 
  Sparkles, 
  Stethoscope, 
  ArrowRight, 
  Video,
  UserCheck,
  CheckCircle2,
  Star,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    title: "Braces & Aligners",
    description: "Mastering alignment with discreet ceramic and invisible solutions.",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&h=600&fit=crop",
    icon: "🦷",
    color: "from-blue-600",
  },
  {
    title: "Precision Implants",
    description: "3D-guided surgical mastery for permanent natural-looking results.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop",
    icon: "✨",
    color: "from-cyan-600",
  },
  {
    title: "Laser Endodontics",
    description: "Microscopic root canal therapy prioritizing tooth preservation.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop",
    icon: "💎",
    color: "from-teal-600",
  },
  {
    title: "Smile Architecture",
    description: "Complete aesthetic reconstruction blending digital design and art.",
    image: "/smile.png",
    icon: "😊",
    color: "from-emerald-600",
  },
  {
    title: "Enamel Whitening",
    description: "Medical-grade brightness treatments protecting your enamel.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
    icon: "⭐",
    color: "from-sky-600",
  },
  {
    title: "Total Oral Wellness",
    description: "A holistic approach monitoring the systemic link to well-being.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
    icon: "🏥",
    color: "from-indigo-600",
  },
];

const doctors = [
  {
    name: "Dr. Priya Sharma",
    specialty: "Orthodontist",
    experience: "15+ Years",
    image: "/doct.jpeg",
  },
  {
    name: "Dr. Rajesh Kumar",
    specialty: "Implantologist",
    experience: "12+ Years",
    image: "/doct2.jpeg",
  },
  {
    name: "Dr. Anita Patel",
    specialty: "Endodontist",
    experience: "10+ Years",
    image: "/doct3.jpeg",
  },
];

const beforeAfter = [
  {
    before: "/smile1.jpeg?w=400&h=300&fit=crop",
    after: "/smile2.jpeg?w=400&h=300&fit=crop",
    treatment: "Smile Makeover",
  },
  {
    before: "/white1.jpeg?w=400&h=300&fit=crop",
    after: "/white2.jpeg?w=800&h=600&fit=crop",
    treatment: "Teeth Whitening",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: easeOut }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden mesh-gradient">
        {/* Animated Blobs */}
        <div className="absolute top-1/4 -right-20 w-75 h-75 md:w-150 md:h-150 bg-cyan-200/30 rounded-full blur-[80px] md:blur-[120px] animate-blob" />
        <div className="absolute -bottom-20 -left-20 w-75 h-75 md:w-150 md:h-150 bg-teal-200/30 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-2000" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full glass border border-cyan-100 text-cyan-700 text-[10px] md:text-xs font-black mb-6 md:mb-8 shadow-sm uppercase tracking-[0.2em]">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                <span>Modern Dental Mastery</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 md:mb-8 tracking-tighter text-balance">
                The Art of <br />
                <span className="gradient-text">Beautiful Smiles</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                Experience the intersection of luxury hospitality and elite medical precision. Where every smile is a masterpiece.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-8 md:mb-10 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto gradient-primary text-white rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-black hover:scale-105 transition-all shadow-2xl shadow-cyan-500/30 active:scale-95">
                    Book Appointment
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact#consultation">
                  <Button variant="outline" className="w-full sm:w-auto rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-black border-2 border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-cyan-600 transition-all bg-white/50 backdrop-blur-sm">
                    <Video className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Consult Online
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 justify-center lg:justify-start">
                <div className="flex -space-x-3 md:-space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-white overflow-hidden shadow-xl">
                      <Image
                        src={`https://i.pravatar.cc/150?u=${i + 10}`}
                        alt="Patient"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-[10px] md:text-sm font-black text-slate-900">10k+ PATIENT REVIEWS <span className="text-slate-400 font-bold ml-2">5.0 SCORE</span></p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative px-4 sm:px-0"
            >
              <div className="relative z-10 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto lg:ml-auto rounded-3xl md:rounded-4xl overflow-hidden shadow-xl border-4 md:border-8 border-white/80 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=500&fit=crop"
                  alt="Modern Dental Clinic"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                  priority
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-1 md:-bottom-4 md:-left-4 glass rounded-2xl md:rounded-3xl p-2 md:p-4 shadow-lg z-20 border border-white/40 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-emerald-100/80 flex items-center justify-center backdrop-blur-md">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm md:text-lg font-black text-slate-900">15+</p>
                    <p className="text-[6px] md:text-[8px] font-black text-slate-500 uppercase tracking-widest">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-2 -right-1 md:top-2 md:-right-4 glass rounded-2xl md:rounded-3xl p-2 md:p-4 shadow-lg z-20 border border-white/40 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-cyan-100/80 flex items-center justify-center backdrop-blur-md">
                    <UserCheck className="w-3 h-3 md:w-4 md:h-4 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm md:text-lg font-black text-slate-900">Elite</p>
                    <p className="text-[6px] md:text-[8px] font-black text-slate-500 uppercase tracking-widest">Medical Team</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 tracking-tight">
              Clinical Excellence <br />
              <span className="gradient-text">Patient First</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              We&apos;ve redefined dental care through innovation, empathy, and uncompromising quality.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12"
          >
            {[
              {
                icon: Award,
                title: "Global Standards",
                description: "Voted #1 clinic for patient care and clinical results for five consecutive years.",
                gradient: "from-blue-600 to-blue-400"
              },
              {
                icon: Stethoscope,
                title: "Next-Gen Tech",
                description: "3D Digital scanning and AI-assisted diagnostics for 100% painless accuracy.",
                gradient: "from-cyan-600 to-cyan-400"
              },
              {
                icon: Shield,
                title: "Maximum Safety",
                description: "Exceeding OSHA & WHO standards with our zero-compromise sterilization protocols.",
                gradient: "from-teal-600 to-teal-400"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="card-premium p-6 sm:p-8 md:p-12 group hover:-translate-y-4 transition-all duration-500"
              >
                <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-6 sm:mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-xl`}>
                  <item.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-black text-slate-900 mb-4 sm:mb-6">{item.title}</h3>
                <p className="text-sm sm:text-base md:text-slate-600 leading-relaxed mb-6 sm:mb-8 font-medium">{item.description}</p>
                <div className="flex items-center text-cyan-600 font-black text-xs sm:text-sm uppercase tracking-widest group-hover:gap-3 transition-all cursor-pointer">
                  Learn more <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Background Images */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-16 gap-8 md:gap-10 text-center md:text-left">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 tracking-tight">
                Elite Dental <br />
                <span className="gradient-text">Specialties</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium">
                Transformative procedures executed with surgical precision and artistic vision.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="w-full md:w-auto">
              <Link href="/services">
                <Button variant="outline" className="w-full md:w-auto rounded-full px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg font-black border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-lg group bg-white">
                  All Services
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative h-80 sm:h-87.5 md:h-95 lg:h-112.5 rounded-3xl sm:rounded-4xl md:rounded-[3rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-700"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Subtle Clean Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-end text-white z-10">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-linear-to-br ${service.color} to-white/10 backdrop-blur-md flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/20 shadow-xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-1 sm:mb-2 md:mb-3 lg:mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/70 font-medium leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6 line-clamp-2 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 font-black text-[9px] sm:text-[10px] md:text-xs lg:text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    Learn Procedure <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
                
                {/* Decorative border on hover */}
                <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-white/20 rounded-[1.2rem] sm:rounded-[1.7rem] md:rounded-[2.2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Online Consultation Feature */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            <motion.div {...fadeInUp} className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-cyan-50 text-cyan-700 text-[10px] sm:text-xs md:text-xs font-black mb-6 md:mb-8 uppercase tracking-[0.2em] border border-cyan-100">
                <Video className="w-3 h-3 sm:w-4 sm:h-4" />
                Tele-Dentistry Elite
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 md:mb-8 lg:mb-10 leading-[1.1] tracking-tighter">
                Global Expertise <br />
                <span className="gradient-text">In Your Home</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 lg:mb-12 leading-relaxed font-medium mx-auto lg:mx-0 max-w-2xl">
                Access preliminary assessments from our lead clinicians through our secure digital portal. High-definition visual diagnosis before you travel.
              </p>
              
              {/* Grid */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
                {[
                  "Visual Assessment",
                  "Lead Doctor Advice",
                  "Digital Plan Design",
                  "Priority Scheduling",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-500 text-left">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-cyan-600 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform shadow-md shadow-cyan-500/20">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                    <span className="text-slate-900 font-bold text-[8px] sm:text-[9px] md:text-xs uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact#consultation">
                <Button className="w-full sm:w-auto gradient-primary text-white rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-black hover:scale-105 transition-all shadow-xl shadow-cyan-500/30 active:scale-95">
                  Begin Virtual Visit
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group px-4 sm:px-0"
            >
              {/* Image Container */}
              <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:ml-auto rounded-4xl sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] sm:shadow-[0_30px_80px_rgba(0,0,0,0.15)] border-4 sm:border-[6px] md:border-8 border-white/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop"
                  alt="Online Consultation"
                  width={500}
                  height={500}
                  className="w-full h-70 sm:h-80 md:h-95 lg:h-112.5 object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
              </div>
              
              {/* Price Badge */}
              <motion.div 
                animate={{ scale: [1, 1.03, 1], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 lg:-bottom-8 -right-2 sm:-right-3 md:-right-5 lg:-right-8 glass rounded-3xl sm:rounded-[1.8rem] md:rounded-2xl lg:rounded-[2.5rem] p-3 sm:p-4 md:p-5 lg:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.15)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-20 border-2 md:border-3 lg:border-4 border-white text-center min-w-30 sm:min-w-35 md:min-w-40 lg:min-w-50 backdrop-blur-xl"
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-cyan-600 mb-1 sm:mb-1 md:mb-2 tracking-tighter">₹100</p>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] sm:tracking-[0.25em]">Fixed Booking Fee</p>
              </motion.div>
              
              {/* Decorative Circle */}
              <div className="absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 -left-6 sm:-left-8 md:-left-10 lg:-left-12 w-24 sm:w-28 md:w-32 lg:w-40 h-24 sm:h-28 md:h-32 lg:h-40 bg-cyan-500/10 rounded-full blur-2xl sm:blur-2xl md:blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 md:py-24 mesh-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 sm:mb-14 md:mb-16 gap-8 sm:gap-10">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tight">
                Our Master <br />
                <span className="gradient-text">Clinicians</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xl font-medium">
                Academic excellence meets decades of clinical mastery. Meet the architects of your new smile.
              </p>
            </motion.div>
            <motion.div {...fadeInUp}>
              <Link href="/doctors">
                <Button variant="outline" className="w-full sm:w-auto rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg font-black border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all bg-white/50 backdrop-blur-sm shadow-lg">
                  View Full Faculty
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          >
            {doctors.map((doctor, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-3 border border-white/40 backdrop-blur-sm"
              >
                <div className="relative w-full h-72 sm:h-96 md:h-112 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                    <Button className="w-4/5 mx-auto flex items-center justify-center bg-white text-slate-900 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest py-3 sm:py-4 md:py-5">
                      Book Consultation
                    </Button>
                  </div>
                </div>
                <div className="p-4 sm:p-6 md:p-8 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-2 tracking-tight">{doctor.name}</h3>
                  <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-3 sm:mb-4">
                    {doctor.specialty}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-400 font-bold text-xs sm:text-sm">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{doctor.experience} Experience</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12 sm:mb-14 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tighter">
              Visual <span className="gradient-text">Mastery</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Witness the transformative power of elite aesthetic dentistry. Real clinical results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {beforeAfter.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-3xl sm:rounded-4xl md:rounded-[3rem] lg:rounded-[4rem] p-4 sm:p-6 md:p-8 lg:p-10 border border-slate-100 shadow-sm relative group"
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-[2.5rem] shadow-xl">
                    <Image
                      src={item.before}
                      alt="Before"
                      width={400}
                      height={300}
                      className="w-full h-36 sm:h-48 md:h-60 lg:h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-6 lg:left-6 px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2 bg-slate-900/80 backdrop-blur-lg text-white text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] rounded-full">
                      Initial
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-[2.5rem] shadow-xl">
                    <Image
                      src={item.after}
                      alt="After"
                      width={400}
                      height={300}
                      className="w-full h-36 sm:h-48 md:h-60 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-6 lg:left-6 px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2 bg-cyan-600/80 backdrop-blur-lg text-white text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] rounded-full">
                      Final Result
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-black text-slate-900 mb-1 sm:mb-2 tracking-tight">{item.treatment}</h4>
                    <p className="text-slate-500 font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest">Procedural Outcome</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-white shadow-lg flex items-center justify-center">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-cyan-500 text-cyan-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">
            <Link href="/before-after">
              <Button className="text-base sm:text-lg md:text-xl font-black text-white bg-linear-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 group px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Full Gallery of Results
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}