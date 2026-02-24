"use client";

import FadeIn from "@/components/FadeIn";
import { Lightbulb, Target, ShieldCheck, Zap, Layers, Network } from "lucide-react";

export default function Solution() {
    const pillars = [
        {
            title: "Clinical Governance Engine",
            desc: "Structured clinical protocols that ensure diagnostic and prescription integrity across remote nodes.",
            icon: ShieldCheck
        },
        {
            title: "Inventory Lifecycle Control",
            desc: "Batch-level pharma tracking with automated stock replenishment and expiry prevention.",
            icon: Layers
        },
        {
            title: "Operational Node Intelligence",
            desc: "Real-time visibility into node health, operator performance, and patient throughput.",
            icon: Network
        },
        {
            title: "Digital Communication Hub",
            desc: "WhatsApp-integrated patient follow-ups and automated critical threshold alerts.",
            icon: Zap
        }
    ];

    return (
        <div className="flex flex-col w-full py-20 lg:py-32 bg-slate-50 selection:bg-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mb-24">
                    <FadeIn>
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent uppercase bg-accent/5 rounded-full">
                            Our Solution
                        </span>
                        <h1 className="text-4xl lg:text-7xl font-extrabold text-primary mb-8 tracking-tight">Industrializing <br /><span className="gradient-text">Rural Primary Care</span></h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                            Nivaro provides the infrastructure to deploy, govern, and scale high-fidelity healthcare nodes in decentralized environments.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                    {pillars.map((pillar, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-accent transition-all duration-300 group">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <pillar.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-primary mb-4">{pillar.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
