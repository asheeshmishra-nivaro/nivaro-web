"use client";

import FadeIn from "@/components/FadeIn";
import { useState } from "react";
import { Mail, Phone, Building, User, Send, CheckCircle2, Smartphone, Globe, ChevronRight } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        organization: "",
        interestType: "Clinic",
        email: "",
        phone: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", organization: "", interestType: "Clinic", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <div className="flex flex-col w-full py-24 lg:py-32 bg-slate-50 min-h-screen selection:bg-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <FadeIn>
                            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] lg:text-sm font-bold tracking-[0.2em] text-accent uppercase bg-accent/5 rounded-full">
                                Get in Touch
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-primary mb-6 lg:mb-8 tracking-tight leading-tight">Request Institutional <br className="hidden sm:block" /><span className="gradient-text">Demo & Access</span></h1>
                            <p className="text-lg lg:text-xl text-slate-600 mb-8 lg:mb-12 max-w-lg leading-relaxed font-medium">
                                Connect with our technical and clinical governance team to explore how Nivaro can digitally govern your healthcare network.
                            </p>
                        </FadeIn>

                        <div className="space-y-6 lg:space-y-8">
                            {[
                                { icon: Mail, label: "Official Email", value: "founder@nivarotech.in" },
                                { icon: Smartphone, label: "Clinical Support", value: "IND+91 95806 78320" },
                                { icon: Globe, label: "Global HQ", value: "India" }
                            ].map((item, idx) => (
                                <FadeIn key={idx} delay={0.2 + idx * 0.1} direction="left">
                                    <div className="flex items-center group">
                                        <div className="bg-white p-4 rounded-xl lg:rounded-2xl shadow-sm text-accent mr-5 lg:mr-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                            <item.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-[10px] lg:text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-1">{item.label}</h3>
                                            <p className="text-base lg:text-lg font-bold text-primary">{item.value}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    <FadeIn delay={0.4}>
                        <div className="bg-white border border-slate-100 rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-12 shadow-2xl shadow-slate-200/50">
                            {status === "success" ? (
                                <div className="flex flex-col items-center text-center py-12">
                                    <div className="bg-green-50 p-6 lg:p-8 rounded-full text-green-600 mb-6 lg:mb-8 border border-green-100">
                                        <CheckCircle2 className="w-12 h-12 lg:w-16 lg:h-16" />
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-extrabold text-primary mb-4">Submission Received</h2>
                                    <p className="text-slate-600 text-base lg:text-lg font-medium">
                                        Our governance specialist will contact you shortly to schedule a structured protocol demonstration.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-8 btn-primary px-8 lg:px-10 w-full lg:w-fit"
                                    >
                                        Send Another Request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input
                                                required
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full pl-10 pr-4 py-3 lg:pl-12 lg:pr-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all font-medium text-primary text-sm lg:text-base"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Organization</label>
                                            <div className="relative">
                                                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Health Institution"
                                                    className="w-full pl-10 pr-4 py-3 lg:pl-12 lg:pr-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all font-medium text-primary text-sm lg:text-base"
                                                    value={formData.organization}
                                                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Interest Type</label>
                                            <div className="relative">
                                                <select
                                                    className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all font-medium text-primary text-sm lg:text-base appearance-none"
                                                    value={formData.interestType}
                                                    onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                                                >
                                                    <option>Clinic</option>
                                                    <option>Doctor</option>
                                                    <option>Entrepreneur</option>
                                                    <option>Investor</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                    <ChevronRight className="w-4 h-4 rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="john@organization.com"
                                                    className="w-full pl-10 pr-4 py-3 lg:pl-12 lg:pr-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all font-medium text-primary text-sm lg:text-base"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Contact Number</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="+91 XXXXX XXXXX"
                                                    className="w-full pl-10 pr-4 py-3 lg:pl-12 lg:pr-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all font-medium text-primary text-sm lg:text-base"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                                        <textarea
                                            required
                                            rows={3}
                                            placeholder="Detailed institutional requirements..."
                                            className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all font-medium text-primary text-sm lg:text-base resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        disabled={status === "loading"}
                                        type="submit"
                                        className="w-full btn-accent py-4 lg:py-5 text-base lg:text-lg disabled:opacity-50 mt-4 lg:mt-6"
                                    >
                                        {status === "loading" ? "Processing..." : (
                                            <span className="flex items-center justify-center">
                                                <Send className="w-4 h-4 lg:w-5 lg:h-5 mr-3" /> Initiate Strategic Request
                                            </span>
                                        )}
                                    </button>

                                    {status === "error" && (
                                        <p className="text-red-600 text-xs lg:text-sm font-bold text-center mt-2">
                                            Submission failed. Please try again.
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
