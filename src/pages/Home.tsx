import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';
import { Header } from '../components/Header';

const Article: React.FC<{
    title: string;
    subtitle?: string;
    author?: string;
    content: string | string[];
    image?: string;
    className?: string;
    vertical?: boolean;
    dropCap?: boolean;
    link?: string;
}> = ({ title, subtitle, author, content, image, className = "", vertical = false, dropCap = true, link }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const contents = Array.isArray(content) ? content : [content];

    React.useEffect(() => {
        const body = document.body;
        if (isExpanded) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        return () => { body.style.overflow = 'auto'; };
    }, [isExpanded]);

    return (
        <article className={`${className} ${vertical ? 'flex flex-col' : ''} border-b border-ink/10 dark:border-gray-800 pb-10 mb-10 last:border-0`}>
            <h3 className={`font-serif leading-none mb-4 md:hover:text-digital-blue transition-colors cursor-pointer dark:text-gray-100 ${className.includes('hero') ? 'text-3xl md:text-5xl lg:text-7xl font-black' : 'text-2xl md:text-3xl font-black'}`}>
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-black dark:decoration-gray-100">
                        {title}
                    </a>
                ) : title}
            </h3>
            {subtitle && <p className="font-serif italic text-lg text-secondary dark:text-gray-400 mb-4 leading-tight border-b border-dotted border-ink/20 dark:border-gray-800 pb-4">{subtitle}</p>}
            {author && <p className="text-[9px] font-bold uppercase tracking-widest mb-4 opacity-70 dark:opacity-50 underline decoration-press-red decoration-2 underline-offset-4 dark:text-gray-300">{author}</p>}

            <div className={`${vertical ? '' : 'lg:flex gap-8'}`}>
                {image && (
                    <div className={`${vertical ? 'mb-6 w-full' : 'lg:w-1/2 mb-6 lg:mb-0'}`}>
                        <div className="relative group overflow-hidden border border-ink dark:border-gray-700 bg-paper dark:bg-[#1A1A1A] p-1">
                            <img src={image} alt={title} className="w-full h-auto border border-ink/10 dark:border-gray-800" />
                        </div>
                    </div>
                )}
                <div className={image && !vertical ? "lg:w-1/2" : ""}>
                    {contents.map((p, i) => (
                        <p key={i} className={`mb-4 text-sm leading-relaxed text-justify dark:text-gray-300 ${i === 0 && dropCap ? 'first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none first-letter:font-black dark:first-letter:text-gray-100' : ''}`}>
                            {p}
                        </p>
                    ))}
                    <div className="mt-6 flex items-center gap-4">
                        <span className="h-[2px] bg-ink dark:bg-gray-700 flex-1"></span>
                        <Link to="/wip" className="btn-link text-[10px] font-black uppercase tracking-widest whitespace-nowrap dark:text-gray-300 dark:hover:text-white hover:underline">
                            See Analysis →
                        </Link>
                        <span className="h-[2px] bg-ink dark:bg-gray-700 flex-1"></span>
                    </div>
                </div>
            </div>

            {isExpanded && image && (
                <div
                    className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-300"
                    onClick={() => setIsExpanded(false)}
                >
                    <div className="relative max-w-5xl w-full flex flex-col gap-4 text-left" onClick={e => e.stopPropagation()}>
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto max-h-[80vh] object-contain border border-white/20 shadow-2xl"
                        />
                        <div className="bg-white dark:bg-[#262626] p-6 font-sans border-l-[12px] border-black dark:border-gray-700 text-left">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-gray-500 dark:text-gray-400">Lead Story // High Resolution View</p>
                            <h4 className="text-2xl font-black uppercase tracking-tighter dark:text-gray-100">{title}</h4>
                        </div>
                        <button
                            className="absolute -top-12 right-0 text-white text-4xl md:hover:text-gray-400 transition-colors"
                            onClick={() => setIsExpanded(false)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </article>
    );
};

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="border-y-2 border-ink dark:border-gray-700 py-2.5 my-14 text-center bg-paper dark:bg-[#121212] relative w-full overflow-hidden">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-ink dark:border-gray-800 opacity-10"></div>
        </div>
        <h2 className="relative inline-block px-10 bg-paper dark:bg-[#121212] text-2xl md:text-3xl font-black tracking-[0.5em] leading-none uppercase italic dark:text-gray-100">
            {title}
        </h2>
    </div>
);

const WeatherWidget: React.FC = () => {
    const { weather } = SITE_CONFIG.widgets;
    return (
        <div className="border-4 border-ink dark:border-gray-700 p-5 bg-paper dark:bg-[#262626] shadow-[10px_10px_0px_0px_rgba(26,26,26,1)] dark:shadow-[10px_10px_0px_0px_rgba(64,64,64,1)] mb-10 group hover:-translate-y-1 transition-transform">
            <h4 className="text-[10px] font-black uppercase mb-4 text-secondary dark:text-gray-400 tracking-[0.2em] border-b-2 border-ink dark:border-gray-700 pb-2">Meteorological Dept.</h4>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-end">
                    <p className="text-5xl font-serif italic font-black leading-none dark:text-gray-100">{weather.temp}</p>
                    <p className="text-xs font-black text-press-red dark:text-red-400">{weather.condition}</p>
                </div>
                <p className="text-[11px] uppercase font-black mt-2 tracking-widest dark:text-gray-300">{weather.city}</p>
                <div className="grid grid-cols-2 gap-2 mt-4 text-[9px] uppercase font-bold opacity-70 dark:opacity-50 dark:text-gray-300">
                    <div className="flex flex-col">
                        <span className="opacity-60">Feels Like</span>
                        <span className="font-black">{weather.feelsLike}</span>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="opacity-60">Humidity</span>
                        <span className="font-black">{weather.humidity}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#technical-dossier') {
            const el = document.getElementById('technical-dossier');
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="bg-paper dark:bg-[#121212] min-h-screen text-ink dark:text-gray-200 transition-colors duration-500">
            <Header />

            <div className="max-w-[1400px] mx-auto p-4 md:p-10 lg:px-16 animate-in fade-in duration-1000">

                {/* Main Grid */}
                <main className="grid grid-cols-12 gap-12 text-left">

                    {/* Left Column: Experience (mathnasium, cybersecurity) */}
                    <section className="col-span-12 lg:col-span-3 lg:border-r-2 lg:border-ink dark:lg:border-gray-800 lg:pr-10">
                        <h4 className="border-b-4 border-ink dark:border-gray-700 pb-1 mb-8 text-sm font-black uppercase tracking-[0.3em] dark:text-gray-100">Industry Intel</h4>
                        <div className="space-y-18">
                            {SITE_CONFIG.experience.map((exp: any, i: number) => (
                                <div key={i} className="group cursor-pointer text-left">
                                    <p className="text-[9px] font-black uppercase text-secondary dark:text-gray-500 mb-2 tracking-tighter text-left">— REPORT NO. 0{i + 1}</p>
                                    <h5 className="font-serif font-black text-2xl leading-none mb-3 group-hover:text-digital-blue transition-colors underline decoration-1 underline-offset-4 dark:decoration-gray-700 text-left dark:text-gray-200">{exp.title}</h5>
                                    <p className="text-xs leading-relaxed text-ink/80 dark:text-gray-400 group-hover:text-ink dark:group-hover:text-gray-200 transition-colors text-justify">
                                        {exp.content}
                                    </p>
                                </div>
                            ))}

                            {/* Classifieds - Technical Skills */}
                            <div className="border-2 border-ink dark:border-gray-700 p-6 bg-paper dark:bg-[#1A1A1A] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] dark:shadow-[6px_6px_0px_0px_rgba(64,64,64,1)] mt-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]">
                                <p className="text-[10px] font-black uppercase mb-4 tracking-[0.2em] border-b border-ink/20 dark:border-gray-800 pb-2 text-center dark:text-gray-400">Classifieds</p>
                                <div className="space-y-9 text-center">
                                    {SITE_CONFIG.classifieds.map((skill: string, i: number) => (
                                        <div key={i} className="text-center">
                                            <p className="font-serif italic text-sm font-bold border-b border-dotted border-ink/20 dark:border-gray-800 inline-block dark:text-gray-300">{skill}</p>
                                        </div>
                                    ))}
                                    <p className="text-[8px] uppercase font-black mt-6 text-center opacity-40 text-center dark:text-gray-500">*** END OF LISTING ***</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Center Column: Lead Projects (UIUC Research) */}
                    <section className="col-span-12 lg:col-span-6">
                        <Article
                            title={SITE_CONFIG.leadStory.title}
                            subtitle={SITE_CONFIG.leadStory.subtitle}
                            author={SITE_CONFIG.leadStory.author}
                            content={SITE_CONFIG.leadStory.content}
                            image={SITE_CONFIG.leadStory.image}
                            link="https://github.com/Tanish-Inamdar/horseradish-segmentation"
                            className="hero"
                            vertical
                            dropCap
                        />
                    </section>

                    {/* Right Column: Key Projects & Widgets */}
                    <section className="col-span-12 lg:col-span-3 lg:border-l-2 lg:border-ink dark:lg:border-gray-800 lg:pl-10">
                        <h4 className="border-b-4 border-ink dark:border-gray-700 pb-1 mb-8 text-sm font-black uppercase tracking-[0.3em] text-right dark:text-gray-100">Briefings</h4>
                        <div className="space-y-18">
                            <WeatherWidget />

                            <div className="space-y-12">
                                {SITE_CONFIG.projects.map((proj: any, i: number) => (
                                    <Link
                                        key={i}
                                        to={proj.title.toLowerCase().includes('delivery') ? '/projects#delivery-arbitrage' : '/projects'}
                                        className="group cursor-pointer border-b border-ink/10 dark:border-gray-800 pb-6 last:border-0 text-left block"
                                    >
                                        <h5 className="font-serif font-black text-xl leading-tight mb-2 group-hover:text-digital-blue transition-colors italic text-left dark:text-gray-200">{proj.title}</h5>
                                        <p className="text-xs leading-relaxed text-secondary dark:text-gray-400 group-hover:text-ink dark:group-hover:text-gray-200 transition-colors text-justify text-left">
                                            {proj.content}
                                        </p>
                                    </Link>
                                ))}
                            </div>

                            <div className="pt-8 border-t-2 border-ink dark:border-gray-700">
                                <h4 className="text-[12px] font-black uppercase mb-6 text-secondary dark:text-gray-500 tracking-widest italic flex items-center gap-2">
                                    <span className="w-2 h-2 bg-press-red rotate-45"></span>
                                    LATEST DISPATCH
                                </h4>
                                <div className="twitter-embed-container opacity-90">
                                    <blockquote className="twitter-tweet" data-theme="light">
                                        <p lang="en" dir="ltr">
                                            Wow what a fun way to spend my saturday, with my teammates Aakash, Jason, and Caleb. An easy/fun way to plan out your weekly meals with the bonus of not getting ghosted. I had a lot of fun building with Trae and also thank you again @keywordsai <a href="https://twitter.com/hashtag/keywordsai?src=hash&amp;ref_src=twsrc%5Etfw">#keywordsai</a>-hackathon-uiuc <a href="https://t.co/wu2Md2lQrk">pic.twitter.com/wu2Md2lQrk</a>
                                        </p>
                                        &mdash; Tanish Inamdar (@ihcendy) <a href="https://twitter.com/ihcendy/status/2017918329629933686?ref_src=twsrc%5Etfw">February 1, 2026</a>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Industry Reports - Footer Section */}
                <div className="mt-20" id="technical-dossier">
                    <SectionHeader title="Technical Dossiers" />
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 bg-ink/5 dark:bg-white/5 p-8 border border-ink/10 dark:border-gray-800">
                        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r-2 border-ink dark:border-gray-700 pb-8 lg:pb-0 lg:pr-10 text-left">
                            <div className="relative group mb-6">
                                <img src={SITE_CONFIG.bio.image} alt="Tanish" className="w-full border-2 border-ink dark:border-gray-700 p-1 bg-paper dark:bg-[#1A1A1A] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] dark:shadow-[8px_8px_0px_0px_rgba(64,64,64,1)]" />
                            </div>
                            <h3 className="font-serif font-black text-4xl md:text-5xl leading-tight mb-2 tracking-tighter dark:text-gray-100 text-left">
                                {SITE_CONFIG.bio.name}
                            </h3>
                            <p className="text-sm font-black uppercase tracking-[0.3em] text-digital-blue italic mb-6">
                                {/* {SITE_CONFIG.bio.headline} */}
                            </p>

                            <div className="space-y-0 pt-6 border-t border-ink/20 dark:border-gray-800">
                                <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest dark:text-gray-300">
                                    <span className="opacity-50">LOCATION</span>
                                    <span>{SITE_CONFIG.dossier.contact.location}</span>
                                </div>
                                <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest">
                                    <span className="opacity-50 dark:text-gray-300">EMAIL</span>
                                    <a href={`mailto:${SITE_CONFIG.dossier.contact.email}`} className="text-digital-blue dark:text-blue-400 hover:underline text-left">{SITE_CONFIG.dossier.contact.email}</a>
                                </div>
                                <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-left">
                                    <span className="opacity-50 text-left dark:text-gray-300">GITHUB</span>
                                    <a href={`https://${SITE_CONFIG.dossier.contact.github}`} target="_blank" rel="noreferrer" className="text-digital-blue dark:text-blue-400 hover:underline text-left">{SITE_CONFIG.dossier.contact.github.split('/').pop()}</a>
                                </div>
                                <div className="flex justify-between items-center text-[12px] font-black uppercase tracking-widest text-left">
                                    <span className="opacity-50 text-left dark:text-gray-300">PHONE</span>
                                    <a href={`tel:${SITE_CONFIG.dossier.contact.number}`} className="text-digital-blue dark:text-blue-400 hover:underline text-left">{SITE_CONFIG.dossier.contact.number}</a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8 flex flex-col h-full text-left">
                            <div className="font-serif text-2xl italic leading-relaxed border-l-8 border-ink dark:border-gray-700 pl-8 py-4 mb-8 text-justify dark:text-gray-300 space-y-4">
                                {Array.isArray(SITE_CONFIG.bio.summary) ? (
                                    SITE_CONFIG.bio.summary.map((para: string, idx: number) => (
                                        <p key={idx} className={idx === 0 ? 'first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-4 first-letter:leading-none dark:first-letter:text-gray-100' : ''}>
                                            {para}
                                        </p>
                                    ))
                                ) : (
                                    <p className="first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-4 first-letter:leading-none dark:first-letter:text-gray-100">
                                        {SITE_CONFIG.bio.summary}
                                    </p>
                                )}
                            </div>

                            {/* <div className="mb-10 border border-ink/20 dark:border-gray-800">
                                <img
                                    src="https://tanman.duckdns.org/api/assets/e4898733-81be-4e8b-9562-e0ab7946c860/thumbnail?key=Af4nvE2mxcU_atUu8hGrotNl8j5xohTxU-0YX2Ji6OOIic6tqAOAXrtwYTPEOJ4wvY0&size=preview&c=JNcJI4Z4iIhveHd4eXCWB2c%3D"
                                    alt="Landscape View"
                                    className="w-full h-48 object-cover"
                                />
                            </div> */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mt-auto border-t border-ink/20 dark:border-gray-800 pt-10 text-left">
                                {SITE_CONFIG.dossier.skills.map((skillGroup: any, i: number) => (
                                    <div key={i} className="space-y-3 text-left">
                                        <h4 className="text-[11px] font-black uppercase tracking-widest opacity-60 dark:opacity-40 flex items-center gap-2 text-left dark:text-gray-300">
                                            <span className="w-2 h-2 bg-digital-blue rotate-45"></span>
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-left">
                                            {skillGroup.items.map((skill: string, j: number) => (
                                                <span key={j} className="text-xs font-bold uppercase tracking-tight text-ink/80 dark:text-gray-400 after:content-['/'] last:after:content-[''] after:ml-3 after:opacity-20 text-left">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="border-t-[16px] border-ink dark:border-gray-800 pt-16 pb-32 mt-20 text-left transition-colors duration-500 w-full overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 text-left w-full">
                        <div className="space-y-6 text-left w-full">
                            <h2 className="font-[Pirata_One] text-6xl break-words md:text-9xl block leading-none select-none text-left text-ink dark:text-gray-100">{SITE_CONFIG.masthead.title}</h2>
                            <div className="flex gap-4 text-left">
                                <p className="text-[10px] font-black uppercase tracking-widest text-secondary dark:text-gray-500 italic text-left">EST. 2026 — ILLINOIS — GLOBAL SYNDICATION</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-6 text-[8px] font-black uppercase tracking-[0.4em] opacity-40 dark:opacity-30 text-right dark:text-gray-400">
                            <div className="flex flex-wrap justify-end gap-x-8 gap-y-2 text-right">
                                <a href="#" className="hover:text-ink dark:hover:text-gray-100 hover:underline">Archives</a>
                                <a href="#" className="hover:text-ink dark:hover:text-gray-100 hover:underline">Syndication</a>
                                <a href="#" className="hover:text-ink dark:hover:text-gray-100 hover:underline">Terms</a>
                                <a href="#" className="hover:text-ink dark:hover:text-gray-100 hover:underline">Privacy</a>
                            </div>
                            <p>© 2026 {SITE_CONFIG.bio.name} PUBLISHING CORP. | ALL BYTES RESERVED.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;
