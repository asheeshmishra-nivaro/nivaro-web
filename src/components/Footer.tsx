import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    <div className="mb-10 lg:mb-0">
                        <h3 className="text-2xl font-bold text-primary mb-3">Nivaro Health Technologies</h3>
                        <p className="text-slate-600 text-sm lg:text-base max-w-md leading-relaxed">
                            Healthcare Infrastructure Platform building a structured rural primary care operating system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full lg:w-auto">
                        <div>
                            <h4 className="text-xs font-extrabold text-slate-400 mb-6 uppercase tracking-[0.2em]">Legal</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/privacy" className="text-slate-600 hover:text-accent text-sm lg:text-base font-medium transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-slate-600 hover:text-accent text-sm lg:text-base font-medium transition-colors">
                                        Terms of Use
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="sm:col-span-1 lg:col-span-2">
                            <h4 className="text-xs font-extrabold text-slate-400 mb-6 uppercase tracking-[0.2em]">Strategic Contact</h4>
                            <p className="text-slate-500 text-xs lg:text-sm font-bold mb-2 uppercase tracking-wider">Professional Inquiries:</p>
                            <a href="mailto:founder@nivarotech.in" className="text-primary font-bold hover:text-accent text-lg lg:text-xl transition-colors">
                                founder@nivarotech.in
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center bg">
                    <p className="text-slate-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-center sm:text-left mb-4 sm:mb-0">
                        © {new Date().getFullYear()} Nivaro Health Technologies. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {/* Placeholder for social icons if needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
