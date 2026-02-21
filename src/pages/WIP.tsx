import React, { useEffect } from 'react';
import { Construction, ArrowLeft, Mail, ShieldAlert } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const WIP: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-[#121212] text-[#1A1A1A] dark:text-[#E5E5E5] font-serif transition-colors duration-500 overflow-x-hidden">
            {/* MINIMAL MASTHEAD */}
            <header className="border-b-4 border-black dark:border-gray-800 p-8 text-center bg-paper dark:bg-[#1A1A1A] sticky top-0 z-50 transition-colors">
                <Link to="/" className="inline-block group">
                    <h1 className="text-5xl font-black uppercase tracking-tighter italic group-hover:text-digital-blue transition-colors">The Tanish Times</h1>
                </Link>
                <div className="flex items-center justify-center gap-4 mt-4">
                    <span className="h-px bg-black/10 dark:bg-white/10 flex-1"></span>
                    <p className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-secondary dark:text-gray-500">Classified Information // Unauthorized Access</p>
                    <span className="h-px bg-black/10 dark:bg-white/10 flex-1"></span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto py-24 px-6 text-center">
                {/* THE "REDACTED" STAMP */}
                <div className="relative inline-block mb-16">
                    <div className="border-[8px] border-press-red dark:border-red-500 text-press-red dark:text-red-500 px-12 py-6 rotate-[-4deg] font-black text-6xl md:text-8xl uppercase tracking-tighter mix-blend-multiply dark:mix-blend-normal opacity-90 animate-in zoom-in duration-500">
                        Redacted
                    </div>
                    <div className="absolute -top-4 -right-4 bg-press-red text-white p-2 text-[10px] font-sans font-black uppercase tracking-widest rotate-[15deg] shadow-lg">
                        Tier 1 Only
                    </div>
                </div>

                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
                        This Story is Still <br />
                        <span className="text-digital-blue italic">At the Printer</span>
                    </h2>

                    <div className="space-y-8 font-sans text-xl max-w-2xl mx-auto leading-relaxed">
                        <div className="relative py-4 px-8">
                            <div className="absolute inset-0 bg-black dark:bg-white opacity-5 rotate-[-1deg] -z-10"></div>
                            <p className="italic font-serif text-2xl mb-2">
                                "I'd show you the code, but then I'd have to explain why the delivery driver is in my living room."
                            </p>
                            <p className="text-[10px] uppercase font-black tracking-widest text-secondary">— Anonymous Source</p>
                        </div>

                        <div className="text-left bg-gray-50 dark:bg-[#1A1A1A] p-10 border border-black/5 dark:border-white/5 space-y-6 text-lg relative overflow-hidden group">
                            <ShieldAlert className="absolute -right-8 -bottom-8 w-48 h-48 opacity-[0.03] dark:opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000" />
                            <p>
                                The <span className="bg-black text-white dark:bg-white dark:text-black px-1.5 font-mono text-sm">delivery-arbitrage</span> repository and the <span className="bg-black text-white dark:bg-white dark:text-black px-1.5 font-mono text-sm">aerial-monitoring-v3</span> manuscript are currently under restricted access.
                            </p>
                            <p className="text-secondary dark:text-gray-400">
                                Due to proprietary scraping heuristics and ongoing peer-review processes at the University of Illinois, these files have been temporarily pulled from the public archives to prevent destabilizing the local takeout economy.
                            </p>
                        </div>

                        {/* PROGRESS SCANNER */}
                        <div className="border-2 border-dashed border-black/20 dark:border-white/10 p-10 bg-paper dark:bg-[#1A1A1A] shadow-inner relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-press-red to-transparent animate-pulse"></div>
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Construction size={14} className="text-press-red" />
                                    Expected Publication: Soon™
                                </p>
                                <span className="text-[10px] font-mono opacity-50">STATUS: RECOVERING...</span>
                            </div>
                            <div className="w-full h-3 bg-gray-100 dark:bg-[#262626] border border-black/5 dark:border-white/5 rounded-none p-0.5 overflow-hidden">
                                <div className="h-full bg-black dark:bg-white w-[68%] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                                </div>
                            </div>
                            <p className="text-[9px] uppercase font-black mt-4 opacity-40 text-center tracking-[0.3em] italic">Declassifying blocks 49,210 through 88,443...</p>
                        </div>

                        <div className="pt-8 border-t border-black/10 dark:border-white/10">
                            <p className="text-sm uppercase font-black tracking-[0.3em]">
                                Want the full briefing?
                                <a
                                    href="mailto:tanishi2@illinois.edu"
                                    className="ml-3 inline-flex items-center gap-2 text-digital-blue hover:text-press-red transition-colors underline decoration-2 underline-offset-4"
                                >
                                    <Mail size={14} /> Contact the Journalist
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col items-center gap-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="group flex items-center gap-3 font-sans font-black uppercase text-xs border-4 border-black dark:border-white px-10 py-5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#121212] transition-all transform hover:-translate-y-1 active:translate-y-0"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Archives
                        </button>
                        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] opacity-30">Check out the rest of the site</p>
                    </div>
                </div>
            </main>

            <footer className="fixed bottom-0 w-full py-6 text-center text-[9px] font-sans font-black opacity-40 uppercase tracking-[0.6em] pointer-events-none bg-gradient-to-t from-white dark:from-[#121212] via-white/80 dark:via-[#121212]/80 to-transparent pt-12">
                TOP SECRET — FOR AUTHORIZED EYES ONLY — LEVEL 4 CLEARANCE REQUIRED
            </footer>
        </div>
    );
};

export default WIP;
