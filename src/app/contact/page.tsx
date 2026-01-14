"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/CTAButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Upload,
  CheckCircle2,
  AlertCircle,
  Video,
  IndianRupee,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: easeOut }
};

export default function ContactPage() {
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });

  const [consultationForm, setConsultationForm] = useState({
    name: "",
    phone: "",
    teethImage: null as File | null,
    paymentScreenshot: null as File | null,
    message: "",
  });

  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);

  const consultationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === "#consultation" && consultationRef.current) {
      setTimeout(() => {
        consultationRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, []);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentSubmitted(true);
    setAppointmentForm({
      name: "",
      phone: "",
      email: "",
      date: "",
      service: "",
      message: "",
    });
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultationForm.paymentScreenshot) {
      alert("Please upload payment screenshot");
      return;
    }
    setConsultationSubmitted(true);
    setConsultationForm({
      name: "",
      phone: "",
      teethImage: null,
      paymentScreenshot: null,
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white" suppressHydrationWarning>
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
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tighter leading-[1.1] text-balance">
              Start Your Journey to a <span className="gradient-text">Radiant Smile</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-slate-600 leading-relaxed font-medium">
              Whether you prefer a clinical visit or an expert online assessment, 
              we are here to provide world-class dental care tailored to your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8 md:space-y-10">
              <motion.div {...fadeInUp}>
                <h2 className="text-xl sm:text-2xl md:text-2xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">Clinic Channels</h2>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: Phone, label: "Medical Line", value: "+91 98765 43210", color: "bg-cyan-50 text-cyan-600" },
                    { icon: MessageCircle, label: "WhatsApp Care", value: "+91 98765 43210", color: "bg-green-50 text-green-600" },
                    { icon: Mail, label: "Direct Email", value: "care@dentacare.com", color: "bg-blue-50 text-blue-600" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-[1.2rem] md:rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg sm:hover:shadow-xl transition-all group">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                        <p className="text-sm sm:text-base md:text-base font-black text-slate-900">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h2 className="text-xl sm:text-2xl md:text-2xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">Global Center</h2>
                <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-[1.2rem] md:rounded-3xl bg-slate-50 border border-slate-100 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Our Location</p>
                    <p className="text-sm sm:text-base md:text-base font-black text-slate-900 leading-tight">
                      123 Healthcare Avenue,<br />
                      Medical District, Mumbai 400001
                    </p>
                  </div>
                </div>
                
                <div className="rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden shadow-lg sm:shadow-xl h-36 sm:h-40 md:h-44 lg:h-48 xl:h-56 border-2 sm:border-3 md:border-4 border-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755555555555!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column - Appointment Form */}
            <div className="lg:col-span-7">
              <motion.div 
                {...fadeInUp}
                className="bg-white rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg sm:shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-cyan-50 rounded-bl-[100%] -z-10" />
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 sm:mb-6 md:mb-8 tracking-tight">Clinical Appointment</h2>

                {appointmentSubmitted ? (
                  <div className="text-center py-8 sm:py-10 md:py-12 lg:py-16">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-float">
                      <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-2 sm:mb-3">Request Transmitted!</h3>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 font-medium">
                      Our coordinators will contact you shortly to confirm your slot.
                    </p>
                    <Button
                      onClick={() => setAppointmentSubmitted(false)}
                      variant="outline"
                      className="rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base font-black border-2 sm:border-3 md:border-4 border-slate-100 hover:border-cyan-600 transition-all"
                    >
                      Book Another Slot
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleAppointmentSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="name" className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Full Name</Label>
                        <Input
                          id="name"
                          required
                          value={appointmentForm.name}
                          onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                          className="rounded-lg sm:rounded-xl border-slate-200 h-10 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-base font-bold bg-slate-50 focus:bg-white transition-all focus:ring-2 sm:focus:ring-3 md:focus:ring-4 focus:ring-cyan-500/10"
                          placeholder="Ex: John Doe"
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="phone" className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={appointmentForm.phone}
                          onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                          className="rounded-lg sm:rounded-xl border-slate-200 h-10 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-base font-bold bg-slate-50 focus:bg-white transition-all focus:ring-2 sm:focus:ring-3 md:focus:ring-4 focus:ring-cyan-500/10"
                          placeholder="+91 9XXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="email" className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={appointmentForm.email}
                          onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })}
                          className="rounded-lg sm:rounded-xl border-slate-200 h-10 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-base font-bold bg-slate-50 focus:bg-white transition-all focus:ring-2 sm:focus:ring-3 md:focus:ring-4 focus:ring-cyan-500/10"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="date" className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Preferred Date</Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={appointmentForm.date}
                          onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                          className="rounded-lg sm:rounded-xl border-slate-200 h-10 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-base font-bold bg-slate-50 focus:bg-white transition-all focus:ring-2 sm:focus:ring-3 md:focus:ring-4 focus:ring-cyan-500/10"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="service" className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Medical Specialty</Label>
                      <select
                        id="service"
                        value={appointmentForm.service}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, service: e.target.value })}
                        className="w-full h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl border border-slate-200 px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-base font-bold bg-slate-50 focus:bg-white transition-all focus:ring-2 sm:focus:ring-3 md:focus:ring-4 focus:ring-cyan-500/10 appearance-none outline-none"
                      >
                        <option value="">Select a clinical specialty</option>
                        <option value="braces">Modern Orthodontics</option>
                        <option value="implants">Precision Implants</option>
                        <option value="rootcanal">Laser Endodontics</option>
                        <option value="makeover">Smile Architecture</option>
                        <option value="whitening">Enamel Whitening</option>
                        <option value="general">Total Oral Wellness</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="message" className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Clinical Notes</Label>
                      <Textarea
                        id="message"
                        rows={3}
                        value={appointmentForm.message}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, message: e.target.value })}
                        className="rounded-lg sm:rounded-xl border-slate-200 p-3 sm:p-4 md:p-5 text-xs sm:text-sm md:text-base font-bold bg-slate-50 focus:bg-white transition-all focus:ring-2 sm:focus:ring-3 md:focus:ring-4 focus:ring-cyan-500/10"
                        placeholder="Describe your concern or medical history..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-primary text-white rounded-full py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg font-black hover:scale-105 transition-all shadow-lg sm:shadow-xl md:shadow-2xl shadow-cyan-500/20 active:scale-95"
                    >
                      Book Clinical Visit
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Consultation Section */}
      <section ref={consultationRef} id="consultation" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-50 h-50 sm:w-75 sm:h-75 md:w-100 md:h-100 lg:w-125 lg:h-125 bg-cyan-200/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-cyan-50 text-cyan-700 text-[10px] sm:text-xs md:text-sm font-black mb-4 sm:mb-6 md:mb-8 uppercase tracking-widest border border-cyan-100">
              <Video className="w-3 h-3 sm:w-4 sm:h-4" />
              Tele-Dentistry Elite
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 md:mb-8 tracking-tighter">
              Get Expert Assessment from <span className="gradient-text">Home</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Upload your concern, pay a nominal ₹100 fee, and receive a preliminary assessment from our specialists.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="lg:col-span-7">
              <motion.div 
                {...fadeInUp}
                className="bg-white rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg sm:shadow-xl md:shadow-2xl border border-slate-100"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 sm:mb-6 md:mb-8 tracking-tight">Consultation Protocol</h3>

                {consultationSubmitted ? (
                  <div className="text-center py-8 sm:py-10 md:py-12 lg:py-16">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-float">
                      <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-cyan-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-2 sm:mb-3">Request Filed!</h3>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 font-medium">
                      Our specialist will contact you within 24 clinical hours.
                    </p>
                    <Button
                      onClick={() => setConsultationSubmitted(false)}
                      variant="outline"
                      className="rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base font-black border-2 sm:border-3 md:border-4 border-slate-100 hover:border-cyan-600 transition-all"
                    >
                      File Another Assessment
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                    <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Full Name</Label>
                        <Input
                          required
                          value={consultationForm.name}
                          onChange={(e) => setConsultationForm({ ...consultationForm, name: e.target.value })}
                          className="rounded-lg sm:rounded-xl border-slate-200 h-10 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-base font-bold bg-slate-50 focus:bg-white transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Phone Number</Label>
                        <Input
                          type="tel"
                          required
                          value={consultationForm.phone}
                          onChange={(e) => setConsultationForm({ ...consultationForm, phone: e.target.value })}
                          className="rounded-lg sm:rounded-xl border-slate-200 h-10 sm:h-12 md:h-14 px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-base font-bold bg-slate-50 focus:bg-white transition-all"
                          placeholder="+91 9XXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Visual Assessment (JPG/PNG)</Label>
                      <div className="border-2 sm:border-3 md:border-4 border-dashed border-slate-100 rounded-2xl sm:rounded-3xl md:rounded-4xl p-4 sm:p-6 md:p-8 text-center hover:border-cyan-400 hover:bg-cyan-50 transition-all group">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setConsultationForm({ ...consultationForm, teethImage: file });
                          }}
                          className="hidden"
                          id="teeth-image"
                        />
                        <label htmlFor="teeth-image" className="cursor-pointer">
                          <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-slate-300 mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:text-cyan-600 group-hover:scale-110 transition-all" />
                          {consultationForm.teethImage ? (
                            <p className="text-sm sm:text-base md:text-lg font-black text-cyan-600">{consultationForm.teethImage.name}</p>
                          ) : (
                            <>
                              <p className="text-sm sm:text-base md:text-lg font-black text-slate-900">Transmit Clinical Photo</p>
                              <p className="text-slate-400 font-bold mt-1 text-[10px] sm:text-[11px] md:text-sm">Optional assessment image</p>
                            </>
                          )}
                        </label>
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Patient Concern</Label>
                      <Textarea
                        required
                        rows={3}
                        value={consultationForm.message}
                        onChange={(e) => setConsultationForm({ ...consultationForm, message: e.target.value })}
                        className="rounded-lg sm:rounded-xl border-slate-200 p-3 sm:p-4 md:p-5 text-xs sm:text-sm md:text-base font-bold bg-slate-50 focus:bg-white transition-all"
                        placeholder="Detail your dental concern..."
                      />
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 sm:ml-4">Payment Verification (MANDATORY)</Label>
                      <div className={`border-2 sm:border-3 md:border-4 border-dashed rounded-2xl sm:rounded-3xl md:rounded-4xl p-4 sm:p-6 md:p-8 text-center transition-all group ${
                        consultationForm.paymentScreenshot ? "border-emerald-400 bg-emerald-50" : "border-slate-100 hover:border-cyan-400 hover:bg-cyan-50"
                      }`}>
                        <input
                          type="file"
                          accept="image/*"
                          required
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setConsultationForm({ ...consultationForm, paymentScreenshot: file });
                          }}
                          className="hidden"
                          id="payment-screenshot"
                        />
                        <label htmlFor="payment-screenshot" className="cursor-pointer">
                          {consultationForm.paymentScreenshot ? (
                            <>
                              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-emerald-500 mx-auto mb-2 sm:mb-3 md:mb-4" />
                              <p className="text-sm sm:text-base md:text-lg font-black text-emerald-600">Verification Received</p>
                              <p className="text-slate-500 font-bold mt-1 text-[10px] sm:text-[11px] md:text-sm">{consultationForm.paymentScreenshot.name}</p>
                            </>
                          ) : (
                            <>
                              <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-slate-300 mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:text-cyan-600 group-hover:scale-110 transition-all" />
                              <p className="text-sm sm:text-base md:text-lg font-black text-slate-900">Upload Transaction Receipt</p>
                              <p className="text-red-500 font-black text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest mt-1 italic">Mandatory field</p>
                            </>
                          )}
                        </label>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-amber-50 border border-amber-100">
                      <div className="flex gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-amber-200 flex items-center justify-center shrink-0">
                          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-700" />
                        </div>
                        <div className="space-y-0.5 sm:space-y-1">
                          <p className="text-sm sm:text-base md:text-base font-black text-amber-900">Protocol Verification Notice</p>
                          <ul className="space-y-0.5 text-amber-700 font-bold text-[9px] sm:text-[10px] md:text-xs leading-relaxed">
                            <li className="flex items-center gap-1 sm:gap-2">• Assessment Fee: ₹100</li>
                            <li className="flex items-center gap-1 sm:gap-2">• Manual UPI verification required</li>
                            <li className="flex items-center gap-1 sm:gap-2">• Specialist contact follows verification</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-primary text-white rounded-full py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg font-black hover:scale-105 transition-all shadow-lg sm:shadow-xl md:shadow-2xl shadow-cyan-500/20 active:scale-95"
                    >
                      File Assessment Request
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <motion.div 
                {...fadeInUp}
                className="bg-slate-900 rounded-3xl sm:rounded-4xl md:rounded-[2.5rem] lg:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg sm:shadow-xl md:shadow-2xl border border-slate-800 text-center lg:sticky lg:top-24 xl:top-32"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 text-cyan-400 text-[10px] sm:text-xs font-black mb-6 sm:mb-8 md:mb-10 uppercase tracking-widest border border-white/10">
                  <IndianRupee className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                  Transaction Terminal
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-6 sm:mb-8 md:mb-10 tracking-tight leading-tight">Elite Consult <br /> Assessment Fee: ₹100</h3>

                <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 md:mb-10 shadow-lg sm:shadow-xl md:shadow-2xl max-w-50 sm:max-[240px] md:max-w-70 mx-auto">
                  <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=dentacare@upi&pn=DentaCare&am=100&cu=INR"
                    alt="Payment QR Code"
                    width={250}
                    height={250}
                    className="w-full h-auto rounded-lg sm:rounded-xl"
                  />
                </div>

                <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-10">
                  <p className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest">Medical UPI Identifier</p>
                  <div className="bg-white/5 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 border border-white/10">
                    <p className="font-mono text-cyan-400 font-black text-sm sm:text-base md:text-lg">dentacare@upi</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-white/5 border border-white/10 text-left">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400 shrink-0" />
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-slate-400 leading-relaxed">
                    Encryption protocols active. Receipts are manually audited by clinical administrators.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}