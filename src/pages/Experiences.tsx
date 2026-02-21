import React from 'react';
import { Header } from '../components/Header';
import '../components/homepages.css';

const Experiences: React.FC = () => {
    const [selectedImage, setSelectedImage] = React.useState<{ url: string, caption: string } | null>(null);

    const workHistory = [
        {
            company: "Digital Precision Agriculture Lab, UIUC",
            logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGFFDl_Z9pIAA/company-logo_200_200/company-logo_200_200/0/1630611684443/university_of_illinois_at_urbana_champaign_logo?e=1773273600&v=beta&t=LlvJxGXFF_ibWrY1dnSZ9IzD81ViwEFfqNv0nTwnNLw", // Replace with actual lab logo
            role: "Research Intern",
            period: "Sep 2025 – Present",
            bullets: [
                "Architecting a scalable aerial monitoring system to automate real-time crop and weed identification via drone-mounted sensors.",
                "Optimized a DINOv3 Vision Transformer and YOLOv8 pipeline for edge deployment in offline environments.",
                "Engineered an automated data pipeline to process terabytes of imagery, reducing manual labeling by 30+ hours monthly."
            ],
            exhibits: [
                { url: "https://tanman.duckdns.org/api/assets/9e600f08-6c80-43ed-9799-5ed1f28ae989/thumbnail?key=LIwqRupK_rj8YNVP_Qtlb_-3LprOMeV92jVzT6JyITUeVFn9Uw1e1pWwMBhZreBbMG8&size=preview&c=%2FPcBBgCG2AWHlYVZchundreYfivvx%2FM%3D", caption: "Data Pipeline Architecture" },
                { url: "https://tanman.duckdns.org/api/assets/519ab59f-033b-46c1-bdbc-a16d401c294f/thumbnail?key=j7xIv4paGFGlpH_az34EmCeVagDrvO-11mWa5yK7AISI-ccKvTQuj2siEVGX18T_2xs&size=preview&c=XtgFDIYbB3V3jJaGqYjAiZxARw%3D%3D", caption: "Edge Detection Preview" }
            ]
        },
        {
            company: "Mathnasium",
            logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHunkgUAh9BxA/company-logo_200_200/company-logo_200_200/0/1631303185539?e=1773273600&v=beta&t=uovGKo6HqMylabSDy5LpXWz5zs37x3RNhpYpXRKJiYo", // Replace with actual company logo
            role: "Lead Instructor",
            period: "Jul 2024 – Aug 2025",
            bullets: [
                "Built a Python automation tool to parse student plans and dispatch personalized emails, cutting manual work by 3 hours weekly.",
                "Simplified advanced curriculum concepts for parents to articulate student progress effectively."
            ],
            exhibits: [{ url: "https://tanman.duckdns.org/api/assets/6fe8df92-39ea-4284-9c3c-f7a414f57e0a/thumbnail?key=oCXuMcEHqsaztuYmGZxC0UBhKz66ycBDiAM25A-ZjtPvGqXi_u_Q8tYeWms9MdmkLic&size=preview&c=oigODYRSaoe%2FZ4d8iVd6hp1A0wtD", caption: "Team Meeting" }]
        },
        {
            company: "AZ Cyber Initiatives",
            logo: "https://media.licdn.com/dms/image/v2/C560BAQH56EUvKUX96w/company-logo_200_200/company-logo_200_200/0/1631762854418/az_cyber_initiative_logo?e=1773273600&v=beta&t=IuJFHThL_S7f9SnLviVma_VN69E95cywDHxD3L7SAdY", // Replace with actual logo
            role: "Cybersecurity Intern",
            period: "Jun 2024 – Aug 2024",
            bullets: [
                "Configured SonarQube for continuous static code analysis and developed a real-time risk dashboard.",
                "Automated security risk checks with Bash scripts and won the program's CTF challenge."
            ],
            exhibits: [
                // { url: "https://via.placeholder.com/400x250?text=Security+Dashboard", caption: "SonarQube Integration" }
            ]
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
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-gray-500 dark:text-gray-400">Exhibit Documentation // High Resolution View</p>
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
                    {/* LEFT SIDEBAR - INDUSTRY INTEL (PROTECTED) */}
                    <aside className="lg:col-span-1 border-r border-black dark:border-gray-800 pr-8 hidden lg:block text-left">
                        <h2 className="text-xl font-bold border-b-2 border-black dark:border-gray-700 mb-4 uppercase tracking-tighter dark:text-gray-100">Industry Intel</h2>
                        <div className="space-y-8">
                            <section>
                                <p className="text-[10px] uppercase font-sans font-bold text-gray-500 dark:text-gray-400">— REPORT NO. 01</p>
                                <h3 className="text-lg font-bold leading-none mb-2 underline uppercase dark:text-gray-200">Mathnasium Lead: Automating Student Plans</h3>
                                <p className="text-sm font-sans leading-snug dark:text-gray-400">Spearheaded the automation of curriculum generation, reducing administrative overhead by 60%[cite: 15].</p>
                            </section>
                            <section>
                                <p className="text-[10px] uppercase font-sans font-bold text-gray-500 dark:text-gray-400">— REPORT NO. 02</p>
                                <h3 className="text-lg font-bold leading-none mb-2 underline uppercase dark:text-gray-200">Cybersecurity: Real-Time Risk Dashboards</h3>
                                <p className="text-sm font-sans leading-snug dark:text-gray-400">Configured SonarQube for continuous analysis, developing a real-time dashboard[cite: 18].</p>
                            </section>
                        </div>
                    </aside>

                    {/* MAIN LIST CONTENT */}
                    <section className="lg:col-span-3 space-y-12 text-left">
                        <div className="border-b border-black dark:border-gray-700 pb-2 mb-8">
                            <h2 className="text-4xl font-bold uppercase tracking-tighter dark:text-gray-100">Professional Dossier</h2>
                        </div>

                        {workHistory.map((job, index) => (
                            <div key={index} className="group relative border-b border-gray-100 dark:border-gray-800 pb-12 last:border-0">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* LOGO - LINKEDIN STYLE */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 border border-black dark:border-gray-700 p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(64,64,64,1)] bg-white dark:bg-[#262626] overflow-hidden">
                                            <img src={job.logo} alt={job.company} className="w-full h-full object-contain opacity-90 dark:opacity-80" />
                                        </div>
                                    </div>

                                    {/* JOB DETAILS */}
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-2xl font-bold uppercase leading-none dark:text-gray-100">{job.company}</h3>
                                                <p className="text-lg italic font-sans text-gray-700 dark:text-gray-400">{job.role}</p>
                                            </div>
                                            <span className="text-xs font-sans font-bold text-gray-500 dark:text-gray-500 uppercase">{job.period}</span>
                                        </div>

                                        <ul className="mt-4 space-y-2 text-sm font-sans leading-relaxed text-justify">
                                            {job.bullets.map((bullet, i) => (
                                                <li key={i} className="text-gray-800 dark:text-gray-400 relative pl-5 before:content-['—'] before:absolute before:left-0">{bullet}</li>
                                            ))}
                                        </ul>

                                        {/* EXHIBITS / IMAGES SECTION */}
                                        {job.exhibits.length > 0 && (
                                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {job.exhibits.map((img, i) => (
                                                    <div
                                                        key={i}
                                                        className="group/img relative border border-black dark:border-gray-700 p-1 overflow-hidden bg-white dark:bg-[#1A1A1A] cursor-zoom-in"
                                                        onClick={() => setSelectedImage(img)}
                                                    >
                                                        <img src={img.url} alt={img.caption} className="w-full h-48 object-cover transition-all duration-500 opacity-90 dark:opacity-80 grayscale hover:grayscale-0" />
                                                        <div className="mt-1 text-[9px] uppercase font-sans font-bold flex justify-between dark:text-gray-400">
                                                            <span>Exhibit {index}.{i + 1}</span>
                                                            <span>{img.caption}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>

                <footer className="mt-20 py-8 border-t border-black dark:border-gray-800 text-center text-[9px] font-sans uppercase tracking-[0.5em] text-ink dark:text-gray-500 transition-colors duration-500">
                    PERSONAL EDITION — VOL. CXIV — URBANA, IL
                </footer>
            </div>
        </div>
    );
};

export default Experiences;
