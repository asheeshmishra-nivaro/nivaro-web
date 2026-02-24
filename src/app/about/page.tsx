"use client";

import FadeIn from "@/components/FadeIn";
import { Users, Target, Rocket, ShieldCheck, HeartPulse, Building } from "lucide-react";

export default function About() {
    const values = [
        {
            title: "Clinical Rigor",
            desc: "We prioritize patient safety by embedding clinical protocols directly into our operating system.",
            icon: ShieldCheck
        },
        {
            title: "Access for All",
            desc: "Our mission is to bridge the urban-rural healthcare gap through distributed intelligence.",
            icon: HeartPulse
        },
        {
            title: "Operational Integrity",
            desc: "We ensure every medicine move and clinical decision is traceable and governed.",
            icon: Target
        }
    ];

    return (
        <div className="flex flex-col w-full py-24 lg:py-32 bg-white selection:bg-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mb-16 lg:mb-24">
                    <FadeIn>
                        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] lg:text-sm font-bold tracking-[0.2em] text-accent uppercase bg-accent/5 rounded-full">
                            Our Mission
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-primary mb-6 lg:mb-8 tracking-tight leading-tight">Structured Care for the <br className="hidden sm:block" /><span className="gradient-text">Next Billion</span></h1>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                            Nivaro Health Technologies is building the digital infrastructure required to govern and scale primary healthcare in rural and semi-urban regions.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
                    <FadeIn direction="left">
                        <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed">
                            <p>
                                Founded with the vision of industrializing rural primary care, Nivaro focuses on solving the most critical gaps in healthcare delivery: lack of specialist access, inventory leakage, and zero follow-up accountability.
                            </p>
                            <p>
                                We don't just provide software; we provide a governed operating system. By integrating doctors, village health nodes, and pharmaceutical supply chains into a single intelligence network, we ensure that clinical standards are maintained regardless of geography.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn direction="right">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            {[
                                { val: "3+", label: "Active Nodes" },
                                { val: "3k+", label: "Consultations" },
                                { val: "100%", label: "Traceability" },
                                { val: "24/7", label: "Monitoring" }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 lg:p-8 bg-slate-50 rounded-2xl lg:rounded-3xl border border-slate-100 flex flex-col justify-center text-center sm:text-left">
                                    <div className="text-3xl lg:text-4xl font-extrabold text-accent mb-2">{stat.val}</div>
                                    <div className="text-[10px] lg:text-xs font-bold text-primary uppercase tracking-[0.1em]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {values.map((value, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="p-8 lg:p-10 bg-slate-50 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 h-full">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl lg:rounded-2xl flex items-center justify-center text-accent mb-6 shadow-sm">
                                    <value.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-extrabold text-primary mb-4">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{value.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
