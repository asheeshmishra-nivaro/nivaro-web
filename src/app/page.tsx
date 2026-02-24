"use client";

import Link from "next/link";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Modal from "@/components/Modal";
import {
    Shield,
    Database,
    MessageSquare,
    Activity,
    User,
    ClipboardList,
    Package,
    ArrowRight,
    AlertCircle,
    Users,
    TrendingDown,
    Search,
    CheckCircle2,
    Wifi,
    Lock,
    Terminal,
    Scale,
    LayoutDashboard,
    Stethoscope,
    Smartphone,
    Layers,
    Send,
    ChevronRight,
    Zap,
    History
} from "lucide-react";

export default function Home() {
    console.log("Home page rendering...");
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        organization: "",
        interestType: "Clinic",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setFormStatus("success");
                setFormData({ name: "", organization: "", interestType: "Clinic", email: "", phone: "", message: "" });
            } else {
                setFormStatus("error");
            }
        } catch (err) {
            setFormStatus("error");
        }
    };

    const modules = [
        {
            id: "admin",
            name: "Admin Dashboard",
            icon: LayoutDashboard,
            description: "High-level oversight of entire network operations, node performance, and system health.",
            preview: "A comprehensive control center with real-time mapping of health nodes, inventory heatmaps, and doctor availability across regions. Includes automated audit logs and financial settlement tracking."
        },
        {
            id: "doctor",
            name: "Doctor Console",
            icon: Stethoscope,
            description: "Specialized tele-consultation interface with integrated EMR and prescription governance.",
            preview: "Minimalist, clinical interface designed for rapid remote consultation. Direct access to node-captured vitals, history, and a smart prescription engine that checks inventory levels in real-time."
        },
        {
            id: "operator",
            name: "Operator Panel",
            icon: Smartphone,
            description: "Front-line application for village health nodes to manage patient intake and vitals capture.",
            preview: "Optimized for low-bandwidth environments. Guide operators through structured data capture, vital signs entry, and medicine dispensing via OTP-verified handovers."
        },
        {
            id: "inventory",
            name: "Inventory Governance",
            icon: Package,
            description: "Batch-level pharma tracking with FIFO enforcement and automated stock-out prevention.",
            preview: "Granular control over medicine lifecycle. Tracks batch numbers, expiry dates, and usage patterns. Automates requisition requests based on predictive consumption models."
        },
        {
            id: "whatsapp",
            name: "WhatsApp Intelligence Hub",
            icon: MessageSquare,
            description: "Automated patient engagement, follow-up scheduling, and critical threshold alerts.",
            preview: "AI-driven communication engine. Sends dosage reminders, follow-up consultation links, and public health updates directly to patients' phones via standard WhatsApp."
        }
    ];

    return (
        <div className="flex flex-col w-full bg-white selection:bg-accent/10">
            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 blur-[120px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-5xl mx-auto">
                        <FadeIn>
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent uppercase bg-accent/5 rounded-full">
                                Distributed Healthcare Network
                            </span>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold tracking-tight text-primary mb-6 lg:mb-8 leading-tight lg:leading-[1.1]">
                                Building a Distributed Rural <br className="hidden sm:block" />
                                <span className="gradient-text">Healthcare Intelligence Network</span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-lg lg:text-2xl text-slate-500 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                                Integrated clinical oversight, inventory governance, and digital patient follow-up across decentralized health nodes.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3} direction="none" className="flex flex-col sm:flex-row justify-center gap-5">
                            <Link href="#contact" className="btn-accent text-lg px-10">
                                Request Demo
                            </Link>
                            <Link href="#contact" className="btn-outline text-lg px-10">
                                Partner With Us
                            </Link>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.5} direction="up" className="mt-24">
                        <div className="p-8 glass rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {[
                                    { label: "Multi-Node Architecture", icon: Layers },
                                    { label: "Clinical RBAC", icon: Lock },
                                    { label: "Batch-Level Pharma Tracking", icon: Package },
                                    { label: "WhatsApp Automation Engine", icon: Zap }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 text-slate-600">
                                        <div className="p-2 bg-slate-50 rounded-lg">
                                            {/* We'll use specific icons here */}
                                            {idx === 0 && <Layers className="w-5 h-5 text-accent" />}
                                            {idx === 1 && <Lock className="w-5 h-5 text-accent" />}
                                            {idx === 2 && <Package className="w-5 h-5 text-accent" />}
                                            {idx === 3 && <Zap className="w-5 h-5 text-accent" />}
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-wide">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. PROBLEM SECTION */}
            <section className="section-padding bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <FadeIn>
                            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary mb-6">Structural Failures in Rural Care</h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-lg text-slate-600">Primary healthcare in rural regions suffers from critical oversight and accountability gaps.</p>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { title: "Doctor Access Gap", desc: "Shortage of certified clinicians leading to informal and unsafe prescribing.", icon: Users },
                            { title: "Inventory Leakage", desc: "Uncontrolled medicine distribution and lack of batch-level traceability.", icon: Search },
                            { title: "Lack of Compliance", desc: "Zero audit trails for clinical decisions and medication dispensing.", icon: AlertCircle },
                            { title: "No Real-time Monitoring", desc: "No visibility into patient outcomes or chronic disease management.", icon: TrendingDown }
                        ].map((item, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
                                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                                    <p className="text-slate-600 line-clamp-3">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SOLUTION SECTION */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <FadeIn>
                            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary mb-6">The Nivaro Solution Pillars</h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-lg text-slate-600">A vertically integrated operating system for governed rural healthcare.</p>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {[
                            {
                                title: "Clinical Governance Engine",
                                icon: Shield,
                                desc: "Standardizing clinical workflows to ensure every patient interaction follows certified protocols.",
                                features: ["Structured EMR capture", "Validated prescribing", "Role-based verification"]
                            },
                            {
                                title: "Inventory Lifecycle Control",
                                icon: Database,
                                desc: "End-to-end traceability of medicines from procurement to patient handover.",
                                features: ["FIFO enforcement", "Batch-level tracking", "Prescription linking"]
                            },
                            {
                                title: "Operational Node Intelligence",
                                icon: Layers,
                                desc: "Real-time visibility into the performance and health of every health node in the network.",
                                features: ["Live activity feeds", "Supply chain analytics", "Outcome tracking"]
                            },
                            {
                                title: "Digital Communication Automation",
                                icon: MessageSquare,
                                desc: "Automated follow-up and engagement engine to close the rural care loop.",
                                features: ["WhatsApp dosage alerts", "Consultation reminders", "Health education"]
                            }
                        ].map((pillar, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="flex flex-col lg:flex-row bg-slate-50 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden group">
                                    <div className="p-8 lg:p-10 lg:w-1/2 flex flex-col justify-center">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                            <pillar.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4">{pillar.title}</h3>
                                        <p className="text-slate-600 mb-6 lg:mb-8 text-sm lg:text-base">{pillar.desc}</p>
                                        <ul className="space-y-3">
                                            {pillar.features.map((f, i) => (
                                                <li key={i} className="flex items-center text-xs lg:text-sm font-bold text-slate-700">
                                                    <CheckCircle2 className="w-4 h-4 text-accent mr-3 flex-shrink-0" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden lg:flex bg-slate-200 lg:w-1/2 min-h-[300px] items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]" />
                                        <pillar.icon className="w-32 h-32 text-slate-300 drop-shadow-sm" />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. HOW IT WORKS – VISUAL FLOW */}
            <section className="section-padding bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <FadeIn>
                            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">Patient Journey Lifecycle</h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-lg text-slate-400">A structured flow ensuring clinical integrity at every step.</p>
                        </FadeIn>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-white/10" />

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-12 relative">
                            {[
                                { name: "Patient Registers", icon: User },
                                { name: "Operator Logs Vitals", icon: Activity },
                                { name: "Doctor Consults", icon: Stethoscope },
                                { name: "Prescription Issued", icon: ClipboardList },
                                { name: "Inventory Deducted", icon: Package },
                                { name: "WhatsApp Follow-up", icon: MessageSquare },
                                { name: "Audit Recorded", icon: History }
                            ].map((step, idx) => (
                                <FadeIn key={idx} delay={idx * 0.1} className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-accent transition-colors">
                                        <step.icon className="w-8 h-8 text-accent" />
                                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
                                            {idx < 6 && <ChevronRight className="w-8 h-8" />}
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Step 0{idx + 1}</p>
                                    <p className="font-bold">{step.name}</p>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PLATFORM MODULE SHOWCASE */}
            <section className="section-padding overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <FadeIn>
                            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary mb-6">The Multi-Interface Platform</h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-lg text-slate-600">Tailored experiences for every stakeholder in the healthcare ecosystem.</p>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {modules.map((module, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div
                                    onClick={() => setActiveModal(module.id)}
                                    className="p-6 lg:p-8 h-full bg-slate-50 rounded-3xl border border-slate-100 hover:border-accent hover:bg-white cursor-pointer transition-all duration-300 group shadow-sm hover:shadow-2xl"
                                >
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-2xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                                        <module.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4">{module.name}</h3>
                                    <p className="text-slate-600 mb-6 lg:mb-8 line-clamp-3 text-sm lg:text-base">{module.description}</p>
                                    <div className="flex items-center text-accent font-bold text-sm lg:text-base">
                                        Preview Interface <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. IMPACT & SCALE SECTION */}
            <section className="section-padding bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <FadeIn direction="left">
                            <h2 className="text-3xl lg:text-6xl font-extrabold mb-6 lg:mb-8 tracking-tight">Real-World Scale & Resilience</h2>
                            <p className="text-lg lg:text-xl text-slate-400 mb-8 lg:mb-12 leading-relaxed">
                                Our metrics reflect a battle-tested infrastructure capable of governing rural healthcare across distributed geographies.
                            </p>
                            <Link href="#contact" className="btn-accent inline-flex w-full sm:w-fit justify-center">View Full Impact Report</Link>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            {[
                                { value: "3+", label: "Nodes Managed", sub: "Distributed Geographies" },
                                { value: "25+", label: "SKUs Governed", sub: "Integrated Inventory" },
                                { value: "3,000+", label: "Monthly Capacity", sub: "Consultation Throughput" },
                                { value: "98%", label: "System Integrity", sub: "Compliance Audit Score" }
                            ].map((stat, idx) => (
                                <FadeIn key={idx} delay={idx * 0.1} direction="none" className="p-6 lg:p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
                                    <div className="text-3xl lg:text-4xl font-extrabold text-accent mb-2">{stat.value}</div>
                                    <div className="text-base lg:text-lg font-bold mb-1 lg:mb-2">{stat.label}</div>
                                    <div className="text-[10px] lg:text-xs text-slate-500 uppercase tracking-widest">{stat.sub}</div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TECHNOLOGY & SECURITY */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 translate-x-1/4" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <FadeIn direction="left" className="order-2 lg:order-1">
                            <div className="p-10 bg-slate-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8">
                                    <Terminal className="w-12 h-12 text-slate-800" />
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { title: "OAuth 2.0 + JWT", desc: "Military-grade authentication protocol." },
                                        { title: "Clinical RBAC", desc: "Fine-grained, role-based resource access." },
                                        { title: "Encrypted RTC", desc: "Secure WebRTC consultations for complete privacy." },
                                        { title: "Pharma Compliance", desc: "Automated FIFO and batch tracking logic." },
                                        { title: "Immutable Audit Logs", desc: "Blockchain-ready clinical event sequencing." }
                                    ].map((tech, idx) => (
                                        <div key={idx} className="flex items-start space-x-4">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-accent" />
                                            <div>
                                                <h4 className="font-bold text-white text-lg">{tech.title}</h4>
                                                <p className="text-slate-500">{tech.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="right" className="order-1 lg:order-2">
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent uppercase bg-accent/5 rounded-full">
                                Enterprise Security
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary mb-8 tracking-tight">Hardened Tech for Medical Precision</h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Our infrastructure is built to survive the rural edge while maintaining the high standards required for clinical governance.
                            </p>
                            <div className="flex items-center space-x-8">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-primary">AES-256</span>
                                    <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">Encryption</span>
                                </div>
                                <div className="w-px h-10 bg-slate-200" />
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-primary">SLAs</span>
                                    <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">99.9% Uptime</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 8. CALL TO ACTION SECTION (Persona based) */}
            <section className="section-padding bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary mb-6">Partner With the Future</h2>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { name: "For Clinics", role: "Scalable Infrastructure" },
                            { name: "For Doctors", role: "Digital Practice" },
                            { name: "For Entrepreneurs", role: "Network Ownership" },
                            { name: "For Investors", role: "High-Impact Scale" }
                        ].map((cta, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <Link
                                    href="#contact"
                                    className="block p-6 lg:p-8 bg-white border border-slate-200 rounded-3xl hover:border-accent hover:shadow-xl transition-all group selection:bg-accent selection:text-white"
                                >
                                    <h4 className="text-lg lg:text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{cta.name}</h4>
                                    <p className="text-slate-500 font-medium mb-4 lg:mb-6 text-sm lg:text-base">{cta.role}</p>
                                    <div className="flex items-center text-xs lg:text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. ADD CONTACT + DEMO FORM */}
            <section id="contact" className="section-padding relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-3xl flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center text-white">
                            <FadeIn direction="left">
                                <h2 className="text-3xl lg:text-6xl font-extrabold mb-6 lg:mb-8 tracking-tight">Request a <br className="hidden sm:block" /><span className="text-accent underline decoration-white/20 underline-offset-8">Structured Demo</span></h2>
                                <p className="text-lg lg:text-xl text-slate-400 mb-8 lg:mb-12">
                                    Connect with our technical team to see how Nivaro can automate and govern your healthcare operations.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent flex-shrink-0">
                                            <Send className="w-5 h-5" />
                                        </div>
                                        <span className="text-base lg:text-lg font-medium break-all">founder@nivarotech.in</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent flex-shrink-0">
                                            <Smartphone className="w-5 h-5" />
                                        </div>
                                        <span className="text-base lg:text-lg font-medium">IND+91 95806 78320</span>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="lg:w-1/2 p-8 lg:p-20 bg-white">
                            <FadeIn direction="right">
                                {formStatus === "success" ? (
                                    <div className="text-center py-12 lg:py-20">
                                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle2 className="w-10 h-10 lg:w-12 lg:h-12" />
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-extrabold text-primary mb-4">Inquiry Received</h3>
                                        <p className="text-slate-600 text-base lg:text-lg mb-8">A governance expert will reach out within 24 hours.</p>
                                        <button onClick={() => setFormStatus("idle")} className="btn-primary mx-auto w-full sm:w-fit">Send New Inquiry</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500">Your Identity</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Full Name"
                                                className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-sm lg:text-base text-primary font-medium"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500">Organization</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Health Org / Company"
                                                    className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-sm lg:text-base text-primary font-medium"
                                                    value={formData.organization}
                                                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500">Interest Type</label>
                                                <div className="relative">
                                                    <select
                                                        className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-sm lg:text-base text-primary font-medium appearance-none"
                                                        value={formData.interestType}
                                                        onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                                                    >
                                                        <option>Clinic</option>
                                                        <option>Doctor</option>
                                                        <option>Entrepreneur</option>
                                                        <option>Investor</option>
                                                        <option>Government Body</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                                        <ChevronRight className="w-4 h-4 rotate-90" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500">Professional Email</label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="john@organization.com"
                                                    className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-sm lg:text-base text-primary font-medium"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500">Contact Number</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="+91 XXXXX XXXXX"
                                                    className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-sm lg:text-base text-primary font-medium"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-slate-500">Strategic Message</label>
                                            <textarea
                                                required
                                                rows={3}
                                                placeholder="Briefly describe your interest in Nivaro..."
                                                className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-sm lg:text-base text-primary font-medium resize-none"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>
                                        <button
                                            disabled={formStatus === "loading"}
                                            className="w-full btn-accent py-4 lg:py-5 text-lg lg:text-xl disabled:opacity-50 mt-4"
                                        >
                                            {formStatus === "loading" ? "Processing..." : "Initiate Strategic Demo"}
                                        </button>
                                        {formStatus === "error" && <p className="text-red-500 text-xs lg:text-sm font-bold text-center mt-2">Submission error. Please try again.</p>}
                                    </form>
                                )}
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODALS FOR MODULE PREVIEW */}
            {modules.map((module) => (
                <Modal
                    key={module.id}
                    isOpen={activeModal === module.id}
                    onClose={() => setActiveModal(null)}
                    title={module.name}
                >
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/2">
                            <div className="p-10 bg-slate-50 rounded-3xl border border-dashed border-slate-300 flex items-center justify-center min-h-[400px]">
                                <module.icon className="w-40 h-40 text-slate-200" />
                                <div className="absolute text-slate-400 font-bold tracking-widest uppercase">UX Blueprint Preview</div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <h4 className="text-2xl font-extrabold text-primary mb-6">Strategic Overview</h4>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                {module.preview}
                            </p>
                            <div className="space-y-4">
                                <h5 className="font-bold text-slate-900">Key Performance Capabilities:</h5>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-slate-600 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-accent mr-3" /> Fully Integrated with Core OS
                                    </li>
                                    <li className="flex items-center text-slate-600 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-accent mr-3" /> Real-time Sync (low-latency)
                                    </li>
                                    <li className="flex items-center text-slate-600 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-accent mr-3" /> Automated Audit Sequencing
                                    </li>
                                </ul>
                            </div>
                            <button className="btn-accent mt-10 w-fit" onClick={() => { setActiveModal(null); window.location.href = "#contact"; }}>Request Full Access Demo</button>
                        </div>
                    </div>
                </Modal>
            ))}
        </div>
    );
}

