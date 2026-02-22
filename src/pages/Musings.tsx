import React, { useState } from 'react';
import { Trophy, Film, Tv, Map, Music, Cat, Dog } from 'lucide-react';
import { Header } from '../components/Header';
import '../components/homepages.css';

const Musings: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string, caption: string } | null>(null);

    React.useEffect(() => {
        const body = document.body;
        if (selectedImage) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        return () => { body.style.overflow = 'auto'; };
    }, [selectedImage]);

    const topMovies = [
        { title: "The Pianist", img: "https://a.ltrbxd.com/resized/film-poster/5/1/6/7/2/51672-the-pianist-0-2000-0-3000-crop.jpg?v=3eee5ac018", caption: "Polanski's masterpiece." },
        { title: "Airplane!", img: "https://a.ltrbxd.com/resized/film-poster/5/1/3/3/9/51339-airplane--0-2000-0-3000-crop.jpg?v=a8e9ea3a39", caption: "Shirley you can't be serious." },
        { title: "Ferris Bueller", img: "https://a.ltrbxd.com/resized/film-poster/4/7/2/1/9/47219-ferris-bueller-s-day-off-0-2000-0-3000-crop.jpg?v=5c27745153", caption: "Life moves pretty fast." },
        { title: "Inglourious Basterds", img: "https://a.ltrbxd.com/resized/film-poster/4/1/3/5/2/41352-inglourious-basterds-0-2000-0-3000-crop.jpg?v=0c74c673e0", caption: "The Basterds." }
    ];

    const hikingPhotos = [
        { url: "https://tanman.duckdns.org/api/assets/be6bf1c8-88e5-4acb-a512-501ddfd3e9b1/thumbnail?key=-IU1gUpVCw4LgcP7PxiRN6gDm3JyJ-IxIAxD3KkUJfmtEF9yQGLe_ztIpWTq0KJskkY&size=preview&c=ZOcJHQSreMx1%2BEWJlZg4p3BUBldV", caption: "Rocks on a South Mountain." },
        { url: "https://tanman.duckdns.org/api/assets/cd0782f5-07ee-4b48-9304-39da375b1b39/thumbnail?key=bs-HYz9no4iTwA4MMop2XWv7xl1ZrLsFu_Wjx2Be1EVtjvaPARnZ5D1VWrEwrntWBfk&size=preview&c=2fcJLQZLh6%2BHqIlHpnWIp4VgZgeG", caption: "Fossil Creek waterfall." }
    ];

    const petPhotos = [
        { url: "https://tanman.duckdns.org/api/assets/b17f9915-05f8-41a6-bcdd-2fcdd7d929d9/thumbnail?key=TzKJ5XrIvQEEc6KxdauGltMPNIlzpxwVMDMmtmRy2w53w828dIWNS3zxaGRcj_GvX2Y&size=preview&c=VxgGDQLW0D3Fpld1uqSVeMbNcNkJ", caption: "Resident Feline Oversight Committee." },
        { url: "https://tanman.duckdns.org/api/assets/dc693ac8-f6ad-469e-b575-f0d73a1bd3bf/thumbnail?key=oihsMcljthMYkZfGiyQr_7FEuF4dGiMCe_iWzVWnE_g2YfevRt29pbyPoSjvz65Lawc&size=preview&c=HgkKFQafd4pmdlaHiHd4h0BHZ%2FRX", caption: "Toy Poodle: Head of Security." }
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
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-gray-500 dark:text-gray-400">Culture Archive // Section C Exhibit</p>
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

                    {/* SIDEBAR - HIGH SCORES & MUSIC */}
                    <aside className="lg:col-span-1 border-r border-black dark:border-gray-800 pr-8 space-y-12">
                        {/* TETRIS HIGH SCORE */}
                        <section className="border-b-2 border-black dark:border-gray-700 pb-8">
                            <h2 className="text-xl font-bold uppercase tracking-tighter mb-4 border-b border-black dark:border-gray-700 dark:text-gray-100">Top Charts</h2>
                            <div className="bg-black dark:bg-[#262626] text-white dark:text-gray-200 p-6 text-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1),4px_4px_0px_1px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(64,64,64,1)]">
                                <Trophy className="mx-auto mb-2 text-yellow-500" />
                                <p className="text-[10px] font-sans uppercase tracking-widest">Tetris High Score</p>
                                <p className="text-4xl font-black tabular-nums tracking-tighter mt-1">478,451</p>
                            </div>
                        </section>

                        {/* WEEZER EMBED */}
                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-tighter mb-4 border-b border-black dark:border-gray-700 dark:text-gray-100">Heavy Rotation</h2>
                            <div className="flex items-center gap-2 mb-4">
                                <Music size={16} className="dark:text-gray-400" />
                                <span className="text-xs font-sans font-bold uppercase italic dark:text-gray-400">Weezer Fanatic</span>
                            </div>
                            <div className="w-full aspect-square bg-gray-100 border border-black overflow-hidden shadow-inner group cursor-pointer relative">
                                <img
                                    src="https://th.bing.com/th/id/OIP.yR2P6yQWDx9bLej_zvLX-gHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                                    alt="Pinkerton Deluxe Edition"
                                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-white font-sans font-black uppercase text-[10px] tracking-widest">Pinkerton Deluxe Edition</p>
                                </div>
                            </div>
                        </section>


                        <section className="bg-[#F8F8F8] dark:bg-[#1A1A1A] p-4 border border-black dark:border-gray-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
                            <h2 className="text-lg font-bold uppercase tracking-tighter border-b border-black dark:border-gray-700 mb-4 dark:text-gray-100">The Menagerie</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div key="cat">
                                    <div className="flex items-center gap-1 mb-1">
                                        <Cat size={14} className="dark:text-gray-400" />
                                        <span className="text-[9px] font-black uppercase tracking-tighter dark:text-gray-500">Feline</span>
                                    </div>
                                    <div className="aspect-square border border-black dark:border-gray-700 bg-white dark:bg-[#262626] overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage(petPhotos[0])}>
                                        <img src={petPhotos[0].url} className="object-cover w-full h-full md:group-hover:scale-125 transition-transform duration-1000 opacity-90 dark:opacity-70" alt="Cat" />
                                    </div>
                                </div>
                                <div key="dog">
                                    <div className="flex items-center gap-1 mb-1">
                                        <Dog size={14} className="dark:text-gray-400" />
                                        <span className="text-[9px] font-black uppercase tracking-tighter dark:text-gray-500">Poodle</span>
                                    </div>
                                    <div className="aspect-square border border-black dark:border-gray-700 bg-white dark:bg-[#262626] overflow-hidden cursor-zoom-in group" onClick={() => setSelectedImage(petPhotos[1])}>
                                        <img src={petPhotos[1].url} className="object-cover w-full h-full md:group-hover:scale-125 transition-transform duration-1000" alt="Poodle" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </aside>


                    {/* CENTER STAGE - FILM & TV */}
                    <section className="lg:col-span-2 space-y-12 px-0 lg:px-4 text-left">
                        <div className="border-b border-black dark:border-gray-700 pb-2 flex flex-col md:flex-row justify-between md:items-end gap-2 md:gap-0">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none dark:text-gray-100">Film & TV Reviews</h2>
                            <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest dark:text-gray-400">
                                <Film size={14} />
                                Letterboxd Top 4
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {topMovies.map((movie, i) => (
                                <div
                                    key={i}
                                    className="group border border-black dark:border-gray-700 p-1 bg-white dark:bg-[#262626] md:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:md:hover:shadow-[4px_4px_0px_0px_rgba(64,64,64,1)] transition-all cursor-zoom-in"
                                    onClick={() => setSelectedImage({ url: movie.img, caption: movie.title })}
                                >
                                    <img src={movie.img} alt={movie.title} className="w-full h-auto aspect-[2/3] object-cover opacity-90 dark:opacity-80" />
                                    <p className="mt-2 text-[10px] font-sans font-bold uppercase text-center truncate dark:text-gray-300">{movie.title}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black dark:border-gray-700 pt-8 text-left">
                            <article>
                                <div className="flex items-center gap-2 mb-2">
                                    <Tv size={16} className="dark:text-gray-400" />
                                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter dark:text-gray-100">Arrested Development</h3>
                                </div>
                                <div
                                    className="w-full h-48 bg-gray-200 dark:bg-[#1A1A1A] border border-black dark:border-gray-700 mb-2 overflow-hidden cursor-zoom-in group"
                                    onClick={() => setSelectedImage({ url: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Arrested-Development.jpg", caption: "The Bluth Family" })}
                                >
                                    <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Arrested-Development.jpg" className="object-cover w-full h-full md:group-hover:scale-105 transition-transform duration-700 opacity-90 dark:opacity-75" alt="AD" />
                                </div>
                                <p className="text-sm font-sans italic dark:text-gray-400">“I’ve made a huge mistake.”</p>
                            </article>

                            <article>
                                <div className="flex items-center gap-2 mb-2">
                                    <Tv size={16} className="dark:text-gray-400" />
                                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter dark:text-gray-100">It's Always Sunny</h3>
                                </div>
                                <div
                                    className="w-full h-48 bg-gray-200 dark:bg-[#1A1A1A] border border-black dark:border-gray-700 mb-2 overflow-hidden cursor-zoom-in group"
                                    onClick={() => setSelectedImage({ url: "https://images8.alphacoders.com/679/679547.jpg", caption: "Paddy's Pub Crew" })}
                                >
                                    <img src="https://images8.alphacoders.com/679/679547.jpg" className="object-cover w-full h-full md:group-hover:scale-105 transition-transform duration-700 opacity-90 dark:opacity-75" alt="Sunny" />
                                </div>
                                <p className="text-sm font-sans italic dark:text-gray-400">"What's your favorite hobby? Magnets."</p>
                            </article>
                        </div>

                        {/* COMPACT AUDIO DISPATCH */}
                        <div className="pt-8 border-t border-black dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-4">
                                <Music size={12} className="dark:text-gray-400" />
                                <h3 className="text-xs font-black uppercase tracking-widest dark:text-gray-300">Cultural Dispatch // Audio Frequency</h3>
                            </div>
                            <div className="w-full border border-black dark:border-gray-700 p-1 bg-white dark:bg-[#1A1A1A]">
                                <iframe
                                    src={`https://open.spotify.com/embed/track/6nfLKum9Lr2AuLkeDMoJ8e?utm_source=generator&theme=0`}
                                    width="100%"
                                    height="152"
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    className="grayscale contrast-125 dark:invert dark:hue-rotate-180"
                                    style={{ borderRadius: '12px' }}
                                ></iframe>
                            </div>
                            <p className="mt-2 text-[9px] font-sans italic opacity-60 dark:text-gray-500">Source: Spotify Dispatch Frequency 6nfLKum9Lr2AuLkeDMoJ8e</p>
                        </div>
                    </section>

                    {/* RIGHT COLUMN - LIFESTYLE & PETS */}
                    <aside className="lg:col-span-1 border-l border-black dark:border-gray-800 pl-8 space-y-12 text-left">
                        {/* HIKING */}
                        <section>
                            <div className="flex items-center gap-2 mb-4">
                                <Map size={18} className="dark:text-gray-400" />
                                <h2 className="text-xl font-bold uppercase tracking-tighter border-b border-black dark:border-gray-700 flex-grow dark:text-gray-100">Field Reports</h2>
                            </div>
                            <div className="space-y-4">
                                {hikingPhotos.map((photo, i) => (
                                    <div
                                        key={i}
                                        className="border border-black dark:border-gray-700 p-1 cursor-zoom-in group overflow-hidden bg-white dark:bg-[#262626]"
                                        onClick={() => setSelectedImage(photo)}
                                    >
                                        <img src={photo.url} className="w-full h-auto md:group-hover:scale-110 transition-transform duration-700 opacity-90 dark:opacity-75" alt="Hiking" />
                                        <div className="mt-1 text-[8px] font-sans font-black uppercase opacity-60 dark:text-gray-400 flex justify-between">
                                            <span>MUSE {i + 1}</span>
                                            <span>LOC: ARIZONA</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </aside>

                </main>

                <footer className="mt-20 py-12 border-t-2 border-black dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-8 text-ink dark:text-gray-400 transition-colors duration-500">
                    <div className="text-[9px] font-sans font-black uppercase tracking-[0.5em]">
                        ARTS & LEISURE — VOL. CXIV — THE TANISH TIMES
                    </div>
                    <div className="flex gap-8 text-[9px] font-sans font-black uppercase tracking-widest opacity-40 dark:opacity-30">
                        <span>Section C</span>
                        <span>Culture Index</span>
                        <span>© 2026 Tanish Inamdar</span>
                    </div>
                </footer>
            </div>
        </div >
    );
};

export default Musings;
