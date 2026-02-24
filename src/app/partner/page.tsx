"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { Home, Users2, Building2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Partner() {
    const partners = [
        {
            title: "Village Node Partner",
            description: "Operate a digitally governed clinical node at the village level with full inventory support.",
            icon: Home,
            features: ["Edge deployment tech", "Local operator training", "Hardware integration"]
        },
        {
            title: "Doctor Network Partner",
            description: "Join our elite tele-consultation panel integrated with automated clinical governance.",
            icon: Users2,
            features: ["Smart EMR access", "Automated scheduling", "Pharma-linked prescribing"]
        },
        {
            title: "Institutional Collaboration",
            description: "Scale rural primary care deployment with Nivaro's governed infrastructure.",
            icon: Building2,
            features: ["Multi-node oversight", "Supply chain analytics", "Regulatory compliance"]
        }
    ];

    return (
        <div className="flex flex-col w-full py-24 lg:py-32 bg-white selection:bg-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-16 lg:mb-20">
                    <FadeIn>
                        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] lg:text-sm font-bold tracking-[0.2em] text-accent uppercase bg-accent/5 rounded-full">
                            Partner Ecosystem
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-primary mb-6 lg:mb-8 tracking-tight leading-tight">Expand the <br className="hidden sm:block" /><span className="gradient-text">Healthcare Frontier</span></h1>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
                            Nivaro invites clinical, operational, and institutional partners to join our distributed network, ensuring every village has access to governed, high-quality primary care.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-16 lg:mb-20">
                    {partners.map((partner, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="flex flex-col p-8 lg:p-10 bg-slate-50 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 hover:border-accent hover:bg-white transition-all duration-500 group hover:shadow-2xl">
                                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-xl lg:rounded-2xl shadow-sm mb-6 lg:mb-8 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                                    <partner.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-extrabold text-primary mb-4">{partner.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">
                                    {partner.description}
                                </p>
                                <ul className="space-y-3 mt-auto">
                                    {partner.features.map((f, i) => (
                                        <li key={i} className="flex items-center text-xs lg:text-sm font-bold text-slate-700">
                                            <ShieldCheck className="w-4 h-4 text-accent mr-3 flex-shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.4} direction="up">
                    <div className="bg-primary p-10 lg:p-20 rounded-[2rem] lg:rounded-[3rem] relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-[100px] -z-0" />
                        <div className="relative z-10 lg:w-2/3 mb-8 lg:mb-0">
                            <h2 className="text-2xl lg:text-5xl font-extrabold text-white mb-4 lg:mb-6 tracking-tight leading-tight">Ready to Secure the Rural Edge?</h2>
                            <p className="text-lg lg:text-xl text-slate-400">
                                Join a regulated network of healthcare nodes powered by Nivaro’s clinical intelligence.
                            </p>
                        </div>
                        <div className="relative z-10 w-full lg:w-1/3 flex justify-center lg:justify-end">
                            <Link
                                href="/contact"
                                className="btn-accent text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-5 w-full sm:w-fit justify-center"
                            >
                                Get Started <ArrowRight className="ml-3 w-5 h-5 lg:w-6 lg:h-6" />
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
