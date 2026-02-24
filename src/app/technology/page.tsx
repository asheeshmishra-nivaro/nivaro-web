"use client";

import FadeIn from "@/components/FadeIn";
import { Server, Cpu, Database, Network, ShieldCheck, History, Lock, Zap, Code, Terminal } from "lucide-react";

export default function Technology() {
    return (
        <div className="flex flex-col w-full py-24 lg:py-32 bg-slate-50 selection:bg-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mb-16 lg:mb-24">
                    <FadeIn>
                        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] lg:text-sm font-bold tracking-[0.2em] text-accent uppercase bg-accent/5 rounded-full">
                            System Architecture
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-primary mb-6 lg:mb-8 tracking-tight leading-tight">Enterprise Infrastructure for <br className="hidden sm:block" /><span className="gradient-text">Clinical Precision</span></h1>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                            Nivaro's technological core is built for resilience at the edge, ensuring deterministic clinical governance and absolute data integrity in disconnected environments.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24">
                    <FadeIn delay={0.2} direction="left">
                        <div className="bg-white p-8 lg:p-16 rounded-[2rem] lg:rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-6 lg:mb-8 shadow-lg shadow-accent/20">
                                <Server className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-extrabold text-primary mb-6 lg:mb-8">Secure Backend Infrastructure</h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p className="text-sm lg:text-base">
                                    Our distributed backend is engineered using high-concurrency Node.js environments, optimized for low-latency synchronization between village nodes and central monitoring hubs.
                                </p>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="flex items-center text-primary font-bold mb-3 text-sm lg:text-base">
                                        <Database className="w-5 h-5 mr-3 text-accent" /> Relational Integrity
                                    </div>
                                    <p className="text-xs lg:text-sm font-medium">Utilizing advanced schema governance to mirror complex medical workflows and real-time inventory movements.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="flex items-center text-primary font-bold mb-3 text-sm lg:text-base">
                                        <Lock className="w-5 h-5 mr-3 text-accent" /> Military-Grade Security
                                    </div>
                                    <p className="text-xs lg:text-sm font-medium">JWT-based RBAC enforcement ensures strict data silos between node operators, doctors, and pharmaceutical administrators.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="right">
                        <div className="bg-slate-900 p-8 lg:p-16 rounded-[2rem] lg:rounded-[3rem] text-white relative overflow-hidden shadow-2xl h-full">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Terminal className="w-24 h-24 lg:w-32 lg:h-32" />
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-extrabold mb-8 lg:mb-10 relative z-10">Core Clinical Modules</h2>
                            <div className="space-y-6 lg:space-y-8 relative z-10">
                                {[
                                    {
                                        title: "Prescription Logic Engine",
                                        icon: Code,
                                        desc: "Strictly typed JSON schema for immutable clinical decisions and automated risk detection."
                                    },
                                    {
                                        title: "Predictive Inventory Control",
                                        icon: Zap,
                                        desc: "FIFO-based allocation algorithms that intelligently manage batch-level pharmaceutical stocks."
                                    },
                                    {
                                        title: "WhatsApp Automation Hub",
                                        icon: ShieldCheck,
                                        desc: "Cloud-native communication layer for automated patient follow-ups and system-critical alerts."
                                    }
                                ].map((module, idx) => (
                                    <div key={idx} className="flex items-start space-x-6">
                                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                                            <module.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-lg lg:text-xl mb-2">{module.title}</h3>
                                            <p className="text-slate-400 text-xs lg:text-sm leading-relaxed">{module.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn direction="up">
                    <div className="p-8 lg:p-20 bg-accent rounded-[2rem] lg:rounded-[3rem] text-white flex flex-col items-center">
                        <h2 className="text-2xl lg:text-5xl font-extrabold mb-8 lg:mb-12 text-center tracking-tight leading-tight">Resilience at the Edge</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 w-full">
                            {[
                                {
                                    icon: Network,
                                    title: "Offline Sync",
                                    desc: "Optimized for extreme low-bandwidth rural environments with local caching."
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Clinical Rigor",
                                    desc: "Hard-coded logic prevents medication dispensing without doctor authorization."
                                },
                                {
                                    icon: History,
                                    title: "Immutable Logs",
                                    desc: "Every clinical decision and inventory move is recorded in a tamper-proof audit trail."
                                }
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-8 lg:p-10 bg-white/5 border border-white/10 rounded-2xl lg:rounded-[2rem] hover:bg-white/10 transition-colors">
                                    <stat.icon className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-6 text-blue-100" />
                                    <h3 className="font-extrabold text-xl lg:text-2xl mb-4">{stat.title}</h3>
                                    <p className="text-blue-50/70 leading-relaxed text-xs lg:text-sm font-medium">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
