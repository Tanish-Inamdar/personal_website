import React from 'react';
import { Download, FileText, Newspaper } from 'lucide-react';
import { Header } from '../components/Header';
import '../components/homepages.css';

const Resume: React.FC = () => {
    // URL encoded version of the file for the iframe
    const resumeUrl = "/Tanish%20Inamdar%20Resume.pdf";

    return (
        <div className="bg-paper dark:bg-[#121212] min-h-screen font-serif flex flex-col text-[#1A1A1A] dark:text-gray-200 transition-colors duration-500">
            <Header />

            {/* RESUME VIEWER STAGE */}
            <main className="flex-grow max-w-[1100px] w-full mx-auto p-4 md:p-8 flex flex-col animate-in fade-in duration-1000">

                {/* REFINED HEADER SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 border-b-2 border-black dark:border-gray-700 pb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Newspaper size={20} className="dark:text-gray-300" />
                            <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] opacity-40 dark:opacity-30 dark:text-gray-400 text-left">Section E // Official Record</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none dark:text-gray-100 text-left">Curriculum Vitae</h2>
                        <p className="text-xs font-sans font-bold text-gray-400 dark:text-gray-500 mt-2 uppercase tracking-widest text-left">
                            Subject: Inamdar, Tanish // Dossier Ref: 2026.SUPP
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={resumeUrl}
                            download
                            className="flex items-center gap-3 border-2 border-black dark:border-gray-700 px-6 py-3 bg-white dark:bg-[#262626] font-sans font-black text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(64,64,64,1)] active:shadow-none active:translate-x-1 active:translate-y-1 dark:text-gray-200"
                        >
                            <Download size={14} />
                            Extract Direct Clipping
                        </a>
                    </div>
                </div>

                {/* THE REFINED VIEWER CONTAINER */}
                <div className="bg-white dark:bg-[#1A1A1A] border-2 border-black dark:border-gray-700 shadow-2xl relative flex-grow overflow-hidden group">
                    {/* The Iframe with optimized parameters */}
                    <iframe
                        src={`${resumeUrl}#view=FitH&navpanes=0&toolbar=0`}
                        title="Tanish Inamdar Resume"
                        className="w-full h-full min-h-[900px] border-none"
                    />

                    {/* MOBILE FALLBACK OVERLAY */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F8F8F8] dark:bg-[#1A1A1A] md:hidden z-10 p-10 text-center">
                        <FileText size={48} className="mb-6 opacity-10 dark:opacity-20" />
                        <h3 className="text-xl font-black uppercase tracking-tighter mb-3 leading-none dark:text-gray-100">Transmission Interrupted</h3>
                        <p className="text-[11px] font-sans font-bold text-gray-500 dark:text-gray-400 uppercase leading-relaxed max-w-[240px] mt-2">
                            Mobile transmitters cannot render high-density dossiers directly.
                        </p>
                        <a
                            href={resumeUrl}
                            className="mt-8 border-2 border-black dark:border-gray-700 px-6 py-3 font-black uppercase text-[10px] tracking-widest bg-white dark:bg-[#262626] hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(64,64,64,1)] dark:text-gray-200"
                        >
                            Open Direct Terminal
                        </a>
                    </div>
                </div>

                {/* FOOTER ANNOTATIONS */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-sans font-black uppercase tracking-[0.5em] opacity-30 pb-12">
                    <div className="flex gap-8">
                        <span>The Tanish Times Editorial Archive</span>
                        <span>Pagination: RE-SEC-01</span>
                    </div>
                    <div className="flex gap-4">
                        <span>Classification: TOP SECRET</span>
                        <span>Release: 2026</span>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-black dark:border-gray-800 text-center text-[10px] font-sans uppercase tracking-[0.6em] bg-white dark:bg-[#121212] dark:text-gray-400 transition-colors duration-500">
                © 2026 THE TANISH TIMES — URBANA, IL
            </footer>
        </div>
    );
};

export default Resume;
