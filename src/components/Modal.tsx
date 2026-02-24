"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-[2rem] lg:rounded-[3rem] shadow-3xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        <div className="flex items-center justify-between px-6 py-5 lg:px-10 lg:py-8 border-b border-slate-100 flex-shrink-0">
                            <h3 className="text-xl lg:text-3xl font-extrabold text-primary tracking-tight">{title}</h3>
                            <button
                                onClick={onClose}
                                className="p-2 lg:p-3 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-primary"
                            >
                                <X className="w-6 h-6 lg:w-8 lg:h-8" />
                            </button>
                        </div>
                        <div className="p-6 lg:p-12 overflow-y-auto custom-scrollbar">
                            <div className="text-slate-600 leading-relaxed text-sm lg:text-lg">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
