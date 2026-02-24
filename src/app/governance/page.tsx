"use client";

import FadeIn from "@/components/FadeIn";
import { Shield, CheckCircle2, Lock, History, Scale, FileText, AlertTriangle } from "lucide-react";

export default function Governance() {
    const protocols = [
        {
            title: "Clinical Protocol Enforcement",
            desc: "Deterministic software-locked workflows that ensure no consultation or dispensing occurs outside established clinical guidelines.",
            icon: Shield
        },
        {
            title: "Audit Traceability",
            desc: "Every interaction, from vitals capture to medication handover, is logged with immutable timestamps and operator IDs.",
            icon: History
        },
        {
            title: "Role-Based Accountability",
            desc: "Strictly defined access levels for Doctors, Node Operators, and Pharmacists to prevent unauthorized clinical actions.",
            icon: Lock
        },
        {
            title: "Compliance Monitoring",
            desc: "Real-time oversight of node performance and adherence to institutional healthcare standards.",
            icon: Scale
        }
    ];

    return (
        <div className="flex flex-col w-full py-24 lg:py-32 bg-white selection:bg-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mb-16 lg:mb-24">
                    <FadeIn>
                        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] lg:text-sm font-bold tracking-[0.2em] text-accent uppercase bg-accent/5 rounded-full">
                            Clinical Governance
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-primary mb-6 lg:mb-8 tracking-tight leading-tight">Structured Accountability <br className="hidden sm:block" /><span className="gradient-text">at Every Node</span></h1>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                            Nivaro transforms rural healthcare from an informal practice into a governed, audit-ready clinical network through rigid digital oversight.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 mb-24">
                    {protocols.map((p, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="p-8 lg:p-10 bg-slate-50 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl lg:rounded-2xl flex items-center justify-center text-accent mb-6 lg:mb-8 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                                    <p.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-extrabold text-primary mb-4">{p.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{p.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn direction="up">
                    <div className="bg-slate-900 rounded-[2rem] lg:rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 blur-[120px]" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 lg:mb-8 tracking-tight leading-tight">Zero-Risk <br className="hidden sm:block" />Clinical Environment</h2>
                                <p className="text-lg text-slate-400 mb-8 lg:mb-10 leading-relaxed">
                                    Our platform acts as a digital supervisor, flagging irregularities and blocking non-compliant dispensing before it happens.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Biometric-ready authentication",
                                        "Automated prescription verification",
                                        "Batch-level expiry management",
                                        "Regional medical council compliance"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center font-bold text-slate-200 text-sm lg:text-base">
                                            <CheckCircle2 className="w-5 h-5 text-accent mr-4 flex-shrink-0" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center sm:text-left">
                                    <FileText className="w-10 h-10 text-accent mb-6 mx-auto sm:mx-0" />
                                    <h4 className="font-bold text-lg lg:text-xl mb-2">Immutable EMR</h4>
                                    <p className="text-xs lg:text-sm text-slate-500 font-medium">Permanent record of every clinical decision.</p>
                                </div>
                                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center sm:text-left">
                                    <AlertTriangle className="w-10 h-10 text-accent mb-6 mx-auto sm:mx-0" />
                                    <h4 className="font-bold text-lg lg:text-xl mb-2">Risk Detection</h4>
                                    <p className="text-xs lg:text-sm text-slate-500 font-medium">Automated alerts for abnormal dosage or trends.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
