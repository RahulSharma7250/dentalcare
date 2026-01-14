"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA, CTASection } from "@/components/CTAButtons";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  ArrowRight, 
  Star, 
  Stethoscope, 
  Quote,
  Briefcase
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Priya Sharma",
    specialty: "ORTHODONTIST",
    experience: "15+ Years Practice",
    education: "MDS - Orthodontics & Dentofacial Orthopaedics",
    description: "Dr. Priya is a pioneer in invisible alignment, specializing in complex orthodontic corrections that harmonize facial aesthetics with functional bite stability.",
    image: "/doct.jpeg?w=800&h=1000&fit=crop&crop=face",
    tags: ["Invisalign Diamond", "Clear Aligners", "Lingual Braces"],
    rating: 5.0,
  },
  {
    name: "Dr. Rajesh Kumar",
    specialty: "IMPLANTOLOGIST",
    experience: "12+ Years Practice",
    education: "MDS - Prosthodontics & Implantology",
    description: "Dr. Rajesh is a leader in digital implantology, focusing on minimally invasive permanent solutions for complex full-mouth restorations and missing teeth.",
    image: "/doct2.jpeg?w=800&h=1000&fit=crop&crop=face",
    tags: ["Full Mouth Implants", "All-on-4", "Bone Grafting"],
    rating: 4.9,
  },
  {
    name: "Dr. Anita Patel",
    specialty: "COSMETIC DENTIST",
    experience: "10+ Years Practice",
    education: "BDS, Fellowship in Cosmetic Dentistry",
    description: "Focused on aesthetic excellence, Dr. Anita combines art and science to create stunning, natural-looking smile makeovers and porcelain artistry.",
    image: "/doct3.jpeg?w=800&h=1000&fit=crop&crop=face",
    tags: ["Veneers", "Teeth Whitening", "Smile Design"],
    rating: 5.0,
  },
  {
    name: "Dr. Vikram Singh",
    specialty: "ENDODONTIST",
    experience: "8+ Years Practice",
    education: "MDS - Conservative Dentistry & Endodontics",
    description: "A specialist in microscopic root canal therapy, Dr. Vikram prioritizes natural tooth preservation using the latest laser endodontic technologies.",
    image: "/doct4.jpeg?w=800&h=1000&fit=crop&crop=face",
    tags: ["Laser Root Canal", "Re-treatment", "Micro-surgery"],
    rating: 4.8,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: easeOut }
};

export default function DoctorsPage() {
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
              <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Elite Medical Faculty</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tighter leading-none">
              The Architects of <br />
              <span className="gradient-text">Perfect Smiles</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
             Meet our world-class specialists who combine surgical precision with artistic vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20 xl:space-y-24">
            {doctors.map((doctor, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center`}
              >
                {/* Doctor Image Container */}
                <div className="w-full lg:w-[38%]">
                  <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-lg sm:shadow-xl md:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] group border-4 sm:border-[6px] md:border-8 border-white">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Doctor Content Container */}
                <div className="w-full lg:w-[55%] space-y-4 sm:space-y-6 md:space-y-8">
                  {/* Specialty & Rating */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4">
                    <span className="text-cyan-600 font-black text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em]">
                      {doctor.specialty}
                    </span>
                    <div className="flex items-center gap-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-black text-slate-900 text-[9px] sm:text-[10px] md:text-sm">{doctor.rating} Rating</span>
                    </div>
                  </div>

                  {/* Name */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                    {doctor.name}
                  </h2>

                  {/* Education & Experience Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center gap-2 text-cyan-600">
                        <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-400">Education</span>
                      </div>
                      <p className="text-xs sm:text-sm md:text-sm font-bold text-slate-900 leading-snug">
                        {doctor.education}
                      </p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center gap-2 text-cyan-600">
                        <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-400">Experience</span>
                      </div>
                      <p className="text-xs sm:text-sm md:text-sm font-bold text-slate-900">
                        {doctor.experience}
                      </p>
                    </div>
                  </div>

                  {/* Description / Quote */}
                  <div className="relative pl-5 sm:pl-6 md:pl-8">
                    <Quote className="absolute left-0 top-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-50/80 -z-10" />
                    <p className="text-sm sm:text-base md:text-base text-slate-600 font-medium leading-relaxed italic">
                      {doctor.description}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {doctor.tags.map((tag, tidx) => (
                      <span 
                        key={tidx}
                        className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-[7px] sm:text-[8px] md:text-[9px] font-black uppercase tracking-widest border border-cyan-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 sm:pt-4 md:pt-4">
                    <Link href="/contact">
                      <Button className="w-full sm:w-auto bg-slate-900 text-white rounded-xl sm:rounded-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-xs font-black uppercase tracking-widest hover:bg-cyan-600 hover:scale-105 transition-all shadow-lg shadow-slate-900/5 group">
                        Book with {doctor.name.split(' ')[1]}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}