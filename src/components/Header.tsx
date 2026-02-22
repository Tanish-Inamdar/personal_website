import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { useTheme } from '../context/ThemeContext';

export const StatusTicker: React.FC = () => {
    const [index, setIndex] = useState(0);
    const statuses = SITE_CONFIG.systemStatus;

    useEffect(() => {
        if (!statuses || statuses.length === 0) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % statuses.length);
        }, 10000);
        return () => clearInterval(timer);
    }, [statuses?.length]);

    if (!statuses || statuses.length === 0) return null;

    return (
        <div className="h-full overflow-hidden relative flex items-center font-mono text-[12px] uppercase tracking-tighter">
            <div className="flex items-center gap-1.5 whitespace-nowrap animate-slide-up w-full justify-end" key={index}>
                <span className="text-green-500 animate-pulse">🟢</span>
                <span className="text-secondary dark:text-gray-400">{statuses[index].label}:</span>
                <span className="font-bold text-ink dark:text-gray-200">{statuses[index].status}</span>
            </div>
        </div>
    );
};

export const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { title, motto, edition, location, price } = SITE_CONFIG.masthead;

    const dateStr = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).toUpperCase();

    const handleAboutClick = (e: React.MouseEvent) => {
        if (window.location.pathname === '/') {
            e.preventDefault();
            const el = document.getElementById('technical-dossier');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // If not on '/', the default Link behavior will go to '/' then use hash
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileMenuOpen]);

    return (
        <header className="bg-paper dark:bg-[#121212] overflow-hidden flex flex-col mb-8 transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 lg:px-16 pt-6 text-left">

                {/* Mobile Header Stack - ONLY VISIBLE ON MOBILE */}
                <div className="md:hidden flex flex-col w-full mb-6 relative">
                    <div className="flex justify-between items-center w-full border-b-[3px] border-ink dark:border-gray-800 pb-3 mb-2">
                        <Link to="/" className="block">
                            <h1 className="font-[Pirata_One] text-5xl leading-none select-none text-ink dark:text-gray-100 uppercase tracking-tighter">
                                {title}
                            </h1>
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="p-2 flex flex-col gap-1.5 justify-center items-center w-10 h-10 focus:outline-none"
                        >
                            <span className="block h-[3px] w-full bg-ink dark:bg-gray-100"></span>
                            <span className="block h-[3px] w-full bg-ink dark:bg-gray-100"></span>
                            <span className="block h-[3px] w-full bg-ink dark:bg-gray-100"></span>
                        </button>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold text-secondary dark:text-gray-400 uppercase tracking-widest px-1">
                        <span>{dateStr}</span>
                        <span>{location}</span>
                    </div>
                </div>

                {/* Top Metadata & Ticker Row - DESKTOP ONLY */}
                <div className="hidden md:flex w-full justify-between items-center border-b border-ink/20 dark:border-gray-700 pb-2 mb-6 uppercase tracking-wider">
                    <div className="flex items-center gap-6">
                        <div className="flex gap-4 text-[12px] font-bold dark:text-gray-300">
                            <span>{dateStr}</span>
                            <span className="opacity-30">|</span>
                            <span>{location}</span>
                        </div>

                        {/* EDITION TOGGLE */}
                        <div className="hidden md:block">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleTheme();
                                }}
                                className="flex items-center gap-2 group cursor-pointer border border-ink/10 dark:border-gray-700 px-3 py-1 bg-paper dark:bg-[#262626] hover:bg-ink hover:text-paper dark:hover:bg-gray-100 dark:hover:text-black transition-all"
                            >
                                {theme === 'light' ? (
                                    <>
                                        <Sun size={12} className="text-press-red shadow-sm" />
                                        <span className="text-[10px] font-black tracking-widest whitespace-nowrap">MORNING EDITION</span>
                                    </>
                                ) : (
                                    <>
                                        <Moon size={12} className="text-digital-blue" />
                                        <span className="text-[10px] font-black tracking-widest whitespace-nowrap">NIGHT EDITION</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:block flex-1 max-w-sm ml-auto">
                        <StatusTicker />
                    </div>
                </div>

                {/* Main Branding - DESKTOP ONLY */}
                <div className="hidden md:block text-center mb-8">
                    <Link to="/" className="block">
                        <h1 className="masthead-title text-6xl md:text-8xl leading-none select-none hover:text-digital-blue transition-colors duration-500 cursor-default text-ink dark:text-gray-100">
                            {title}
                        </h1>
                    </Link>
                    <p className="font-serif italic text-sm md:text-xl uppercase tracking-[0.5em] mt-4 font-bold border-y border-ink/10 dark:border-gray-800 py-2 inline-block px-12 text-ink dark:text-gray-300">
                        {motto}
                    </p>
                </div>

                {/* Dynamic 80% Divider - DESKTOP ONLY */}
                <div className="hidden md:flex justify-center mb-6">
                    <div className="w-4/5 h-px bg-ink/30 dark:bg-gray-700"></div>
                </div>

                {/* Edition & Price Bar - DESKTOP ONLY */}
                <div className="hidden md:flex justify-between items-center text-[11px] font-bold uppercase tracking-widest opacity-60 dark:opacity-40 mb-4 px-4 overflow-hidden dark:text-gray-400">
                    <span>{edition} — VOL. CXIV</span>
                    <span className="flex-1 border-b border-dotted border-ink/20 dark:border-gray-700 mx-4 h-0 mt-1"></span>
                    <span>PRICE: {price}</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="border-t border-ink/20 dark:border-gray-800 bg-paper dark:bg-[#121212] transition-colors duration-500">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-10 lg:px-16">
                    <ul className="hidden lg:flex flex-1 justify-center items-center divide-x divide-ink/10 dark:divide-gray-800">
                        {SITE_CONFIG.navigation.map((beat, i) => (
                            <li key={i} className="group relative">
                                {beat.name === "ABOUT" ? (
                                    <Link
                                        to="/#technical-dossier"
                                        onClick={handleAboutClick}
                                        className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-ink hover:text-paper dark:hover:bg-gray-200 dark:hover:text-[#121212] transition-all cursor-pointer block text-ink dark:text-gray-300"
                                    >
                                        {beat.name}
                                    </Link>
                                ) : (
                                    <Link
                                        to={`/${beat.name.toLowerCase()}`}
                                        className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-ink hover:text-paper dark:hover:bg-gray-200 dark:hover:text-[#121212] transition-all cursor-pointer block text-ink dark:text-gray-300"
                                    >
                                        {beat.name}
                                    </Link>
                                )}
                                <div className="dropdown-menu dark:bg-[#262626] dark:border-gray-700">
                                    {beat.items.map((item, j) => (
                                        <Link key={j} to="#" className="dropdown-item dark:text-gray-300 dark:hover:bg-gray-700">{item}</Link>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[100] bg-paper dark:bg-[#121212] p-6 animate-in slide-in-from-left duration-300 overflow-y-auto text-left">
                    <div className="flex justify-between items-center border-b-2 border-ink dark:border-gray-700 pb-4 mb-8 text-left">
                        <h2 className="masthead-title text-4xl text-left text-ink dark:text-gray-100">Sections</h2>
                        <button onClick={() => setMobileMenuOpen(false)} className="text-4xl text-ink dark:text-gray-100 leading-none">&times;</button>
                    </div>

                    {/* Mobile Theme Toggle */}
                    <div className="mb-8 pb-8 border-b border-ink/10 dark:border-gray-800">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleTheme();
                            }}
                            className="w-full flex justify-center items-center gap-3 group cursor-pointer border-2 border-ink dark:border-gray-700 px-4 py-4 bg-paper dark:bg-[#262626] hover:bg-ink hover:text-paper dark:hover:bg-gray-100 dark:hover:text-black transition-all"
                        >
                            {theme === 'light' ? (
                                <>
                                    <Sun size={18} className="text-press-red shadow-sm" />
                                    <span className="text-sm font-black tracking-widest whitespace-nowrap">MORNING EDITION</span>
                                </>
                            ) : (
                                <>
                                    <Moon size={18} className="text-digital-blue" />
                                    <span className="text-sm font-black tracking-widest whitespace-nowrap">NIGHT EDITION</span>
                                </>
                            )}
                        </button>
                    </div>

                    <ul className="space-y-6 text-left">
                        {SITE_CONFIG.navigation.map((beat, i) => (
                            <li key={i} className="text-left">
                                {beat.name === "ABOUT" ? (
                                    <button
                                        onClick={() => {
                                            const el = document.getElementById('technical-dossier');
                                            if (el) {
                                                el.scrollIntoView({ behavior: 'smooth' });
                                                setMobileMenuOpen(false);
                                            } else {
                                                window.location.href = '/#technical-dossier';
                                            }
                                        }}
                                        className="text-2xl py-2 font-bold uppercase tracking-widest mb-4 border-b border-ink/10 dark:border-gray-800 flex justify-between items-center text-left text-ink dark:text-gray-200 w-full"
                                    >
                                        <span>{beat.name}</span>
                                        <span className="opacity-30 text-lg">→</span>
                                    </button>
                                ) : beat.name === "MUSINGS" || beat.name === "RESUME" ? (
                                    <Link
                                        to={`/${beat.name.toLowerCase()}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl py-2 font-bold uppercase tracking-widest mb-4 border-b border-ink/10 dark:border-gray-800 flex justify-between items-center text-left text-ink dark:text-gray-200 block w-full"
                                    >
                                        <span>{beat.name}</span>
                                        <span className="opacity-30 text-lg">→</span>
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            to={`/${beat.name.toLowerCase()}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-2xl py-2 font-bold uppercase tracking-widest mb-4 border-b border-ink/10 dark:border-gray-800 flex justify-between items-center text-left text-ink dark:text-gray-200 block w-full"
                                        >
                                            <span>{beat.name}</span>
                                            <span className="opacity-30 text-lg">→</span>
                                        </Link>
                                        <div className="grid grid-cols-2 gap-4 text-left">
                                            {beat.items.map((item, j) => (
                                                <Link key={j} onClick={() => setMobileMenuOpen(false)} to="#" className="text-sm py-2 uppercase font-bold text-secondary dark:text-gray-400 hover:text-ink dark:hover:text-gray-100 text-left">{item}</Link>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};
