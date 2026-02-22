import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, Database, Cpu, UtensilsCrossed } from 'lucide-react';
import { Header } from '../components/Header';
import '../components/homepages.css';

const Projects: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string, caption: string } | null>(null);
    const location = useLocation();

    useEffect(() => {
        const body = document.body;
        if (selectedImage) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        return () => { body.style.overflow = 'auto'; };
    }, [selectedImage]);

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const projectArchive = [
        {
            title: "Multi-Platform Delivery Arbitrage",
            tagline: "Reverse-Engineering Private REST APIs",
            stack: "React Native, mitmproxy",
            description: "A real-time comparison engine for maximizing delivery efficiency across Uber Eats, DoorDash, and Grubhub.",
            bullets: [
                "Intercepted and reverse-engineered private APIs via mitmproxy to extract live fee structures and menu data.",
                "Developed a probabilistic cost model with >90% directional accuracy for total order estimation.",
                "Implemented hardware-backed encryption for secure local session cache storage."
            ],
            exhibits: [
                { url: "https://tanman.duckdns.org/api/assets/9e600f08-6c80-43ed-9799-5ed1f28ae989/thumbnail?key=LIwqRupK_rj8YNVP_Qtlb_-3LprOMeV92jVzT6JyITUeVFn9Uw1e1pWwMBhZreBbMG8&size=preview", caption: "Mitmproxy Traffic Analysis" }
            ],
            icon: <Database size={16} />
        },
        {
            title: "MealSwipe",
            tagline: "The 'Tinder for Food' Planning Utility",
            stack: "React Native, Google Gemini, Keywords' AI Gateway",
            description: "A hackathon-winning meal planning app that uses familiar swipe gestures to build weekly diets. Features a 9-step onboarding process for allergies, budget, and equipment.",
            bullets: [
                "AI-Powered Match Scores: Uses Google Gemini to explain why a meal fits your profile (e.g., '92% match: avoids dairy, fits 30-min window').",
                "Automated Logistics: Generates organized grocery lists with cost estimates based on swiped preferences.",
                "Nutrition Analysis: Analyzes weekly nutrition balance in real-time as you swipe through options."
            ],
            exhibits: [
                { url: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/230/150/datas/gallery.jpg", caption: "Swipe Interface" }
            ],
            icon: <UtensilsCrossed size={16} />
        },
        {
            title: "Quantitative Options Pricing Engine",
            tagline: "ML-Based European (SPX) Options Modeling",
            stack: "Python, Scikit-learn, XGBoost",
            description: "Led a 5-person team to implement a machine learning-based alternative to the Black-Scholes model.",
            bullets: [
                "Engineered modular Python pipelines for data ingestion and feature engineering.",
                "Trained Random Forest and XGBoost models, reaching 90% predictive accuracy in backtesting.",
                "Benchmarked model latency and accuracy against traditional volatility estimation engines."
            ],
            exhibits: [
                // { url: "https://tanman.duckdns.org/api/assets/519ab59f-033b-46c1-bdbc-a16d401c294f/thumbnail?key=j7xIv4paGFGlpH_az34EmCeVagDrvO-11mWa5yK7AISI-ccKvTQuj2siEVGX18T_2xs&size=preview", caption: "Model Performance Dashboard" }
            ],
            icon: <LayoutGrid size={16} />
        },
        {
            title: "Real-Time Soccer Strategy AI",
            tagline: "Caterpillar Design Award Winner",
            stack: "Python, Predictive Heuristics",
            description: "Engineered real-time algorithms for a cohesive 3-defender formation in a competitive AI environment.",
            bullets: [
                "Implemented dynamic defensive walls, centroid tracking, and predictive shot heuristics.",
                "Won the Caterpillar Design Award at Mechmania 31, competing against 20+ teams."
            ],
            exhibits: [
                { url: "https://media.licdn.com/dms/image/v2/D5622AQFOqBVujr0GjA/feedshare-shrink_2048_1536/B56ZltgmdfHMA0-/0/1758478893836?e=1773273600&v=beta&t=skStb3sGP8xFrZlJOlVe4ZNSXPHFnB4JU70s8jumm18", caption: "Caterpillar Design Award Winner" }
            ],
            icon: <Cpu size={16} />
        }
    ];

    return (
        <div className="bg-paper dark:bg-[#121212] min-h-screen text-[#1A1A1A] dark:text-gray-200 font-serif text-justify transition-colors duration-500">
            {/* LIGHTBOX OVERLAY */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full flex flex-col gap-4" onClick={e => e.stopPropagation()}>
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.caption}
                            className="w-full h-auto max-h-[80vh] object-contain border border-white/20 shadow-2xl"
                        />
                        <div className="bg-white dark:bg-[#262626] p-6 font-sans border-l-[12px] border-black dark:border-gray-700 text-left">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-gray-500 dark:text-gray-400">Project Archive // Exhibit View</p>
                            <h4 className="text-2xl font-black uppercase tracking-tighter dark:text-gray-100">{selectedImage.caption}</h4>
                        </div>
                        <button
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-400 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            <Header />

            <div className="max-w-[1400px] mx-auto p-4 md:p-10 lg:px-16 animate-in fade-in duration-1000">
                <main className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* LEFT SIDEBAR - INDUSTRY INTEL */}
                    <aside className="lg:col-span-1 border-r border-black dark:border-gray-800 pr-8 hidden lg:block text-left">
                        <h2 className="text-xl font-bold border-b-2 border-black dark:border-gray-700 mb-4 uppercase tracking-tighter dark:text-gray-100">Industry Intel</h2>
                        <div className="space-y-8">
                            <section>
                                <p className="text-[10px] uppercase font-sans font-bold text-gray-500">— REPORT NO. 01</p>
                                <h3 className="text-lg font-bold leading-none mb-2 underline uppercase">Caterpillar Design Award Winner</h3>
                                <p className="text-sm font-sans leading-snug italic">Mechmania 31 Championship: Recognized for innovative defensive heuristics in real-time strategy AI.</p>
                            </section>
                            <section>
                                <p className="text-[10px] uppercase font-sans font-bold text-gray-500">— REPORT NO. 02</p>
                                <h3 className="text-lg font-bold leading-none mb-2 underline uppercase">The Gemini Protocol</h3>
                                <p className="text-sm font-sans leading-snug italic">Leveraging Foundational Models for context-aware UX in MealSwipe's swiping logic.</p>
                            </section>
                        </div>
                    </aside>

                    {/* MAIN PROJECTS CONTENT */}
                    <section className="lg:col-span-3 space-y-16 text-left">
                        <div className="border-b border-black dark:border-gray-700 pb-2 mb-8 flex flex-col md:flex-row justify-between md:items-end gap-2 md:gap-0">
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter dark:text-gray-100">Project Archives</h2>
                            <span className="text-xs italic font-sans font-bold dark:text-gray-400">VOL. CXIV — TECHNOLOGY SECTION</span>
                        </div>

                        {projectArchive.map((project, index) => (
                            <div
                                key={index}
                                id={project.title.toLowerCase().includes('delivery') ? 'delivery-arbitrage' : undefined}
                                className="group relative border-b border-gray-100 pb-16 last:border-0"
                            >
                                <div className="flex flex-col gap-6">

                                    {/* PROJECT HEADER */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-black dark:border-gray-700 bg-white dark:bg-[#262626] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(64,64,64,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                                            <span className="dark:text-gray-200">{project.icon}</span>
                                        </div>
                                        <div>
                                            {project.title === "MealSwipe" ? (
                                                <a
                                                    href="https://github.com/Tanish-Inamdar/KeyWordsHack"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline decoration-black dark:decoration-gray-400"
                                                >
                                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-2 dark:text-gray-100">{project.title}</h3>
                                                </a>
                                            ) : project.title === "Multi-Platform Delivery Arbitrage" ? (
                                                <Link
                                                    to="/wip"
                                                    className="hover:underline decoration-digital-blue dark:decoration-blue-400"
                                                >
                                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-2 dark:text-gray-100">{project.title}</h3>
                                                </Link>
                                            ) : (
                                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-2 dark:text-gray-100">{project.title}</h3>
                                            )}
                                            <div className="flex gap-2">
                                                <span className="text-[10px] font-sans font-black bg-black dark:bg-gray-800 text-white dark:text-gray-300 px-2 py-0.5 uppercase tracking-widest">{project.stack}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PROJECT DETAILS */}
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                                        <div className="md:col-span-3 space-y-6">
                                            <p className="text-xl italic font-serif leading-snug border-l-4 border-black dark:border-gray-700 pl-4 py-1 dark:text-gray-300">
                                                {project.tagline}
                                            </p>

                                            <p className="text-md leading-relaxed text-justify dark:text-gray-400">
                                                {project.description}
                                            </p>

                                            <ul className="space-y-3 text-sm font-sans">
                                                {project.bullets.map((bullet, i) => (
                                                    <li key={i} className="flex gap-4 items-start border-b border-dotted border-gray-200 pb-2 last:border-0">
                                                        <span className="font-black text-[10px] mt-1 opacity-40">[{i + 1}]</span>
                                                        <span className="leading-tight">{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* EXHIBITS PANEL */}
                                        <div className="md:col-span-2 space-y-4">
                                            {project.exhibits.map((img, i) => (
                                                <div
                                                    key={i}
                                                    className="border border-black dark:border-gray-700 p-1 bg-white dark:bg-[#1A1A1A] cursor-zoom-in group/img overflow-hidden"
                                                    onClick={() => setSelectedImage(img)}
                                                >
                                                    <img
                                                        src={img.url}
                                                        alt={img.caption}
                                                        className="w-full h-auto object-cover transition-transform duration-700 md:group-hover/img:scale-105"
                                                    />
                                                    <div className="mt-2 text-[9px] font-black uppercase flex justify-between items-center px-1 dark:text-gray-400">
                                                        <span className="opacity-40">EXHIBIT {index + 1}.{i + 1}</span>
                                                        <span className="border-b border-black dark:border-gray-600">{img.caption}</span>
                                                    </div>
                                                </div>
                                            ))}
                                            {project.exhibits.length === 0 && (
                                                <div className="border border-dashed border-gray-300 h-48 flex items-center justify-center bg-gray-50">
                                                    <p className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest text-center px-4">Documentation Pending Retrieval</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>

                <footer className="mt-20 py-12 border-t border-black dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8 text-ink dark:text-gray-400 transition-colors duration-500">
                    <div className="text-[9px] font-sans font-black uppercase tracking-[0.5em]">
                        © 2026 THE TANISH TIMES — URBANA, IL
                    </div>
                    <div className="flex gap-8 text-[9px] font-sans font-black uppercase tracking-widest opacity-40 dark:opacity-30">
                        <span>Section B</span>
                        <span>Page 14</span>
                        <span>Index: Public Archives</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Projects;
