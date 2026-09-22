"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
    Play,
    Share2,
    X,
    ExternalLink,
    Sparkles,
    CheckCircle2,
    Flame,
} from "lucide-react";

import { Container, Heading, Text, Section } from "@/components/ui";
import {
    jabMoments,
    type JabMoment,
} from "@/data/jabMoments";

/* Inline SVG Instagram Icon matching Lucide style */
function InstagramIcon({ className = "size-5", ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
            {...props}
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

export default function JabMomentsSection() {
    const [activeMoment, setActiveMoment] = useState<JabMoment | null>(null);

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveMoment(null);
            }
        };
        if (activeMoment) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeMoment]);

    return (
        <Section className="relative overflow-hidden bg-gradient-to-b from-[#fff6c7] via-[#fffdf4] to-[#fff8e7] py-20 sm:py-24 lg:py-32">
            {/* Ambient Tropical Glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-20 -z-10 size-96 rounded-full bg-[#ffcf00]/25 blur-[120px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-1/3 -z-10 size-[32rem] rounded-full bg-[#c7a34f]/20 blur-[140px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-10 left-1/3 -z-10 size-80 rounded-full bg-[#064e36]/10 blur-[130px]"
            />

            <Container className="relative z-10">
                {/* =========================================================
                    SECTION HEADER
                ========================================================= */}
                <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16">
                    {/* Eyebrow Pill */}
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#064e36]/20 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md">
                        <span className="flex size-2 rounded-full bg-[#064e36] animate-pulse" />
                        <Text
                            size="sm"
                            className="font-bold uppercase tracking-[0.22em] text-[#064e36]"
                        >
                            The JAB Community Feed
                        </Text>
                    </div>

                    {/* Main Heading */}
                    <Heading
                        as="h2"
                        size="xl"
                        align="center"
                        className="text-[clamp(2.8rem,6.5vw,5.6rem)] uppercase leading-[0.9] tracking-[-0.04em] text-[#064e36]"
                    >
                        Good Vibes.
                        <span className="mt-2 block bg-gradient-to-r from-[#064e36] via-[#c7a34f] to-[#e6a800] bg-clip-text text-transparent">
                            Great Moments.
                        </span>
                    </Heading>

                    {/* Description */}
                    <Text
                        align="center"
                        className="mt-6 max-w-2xl text-base leading-relaxed text-[#183b2d]/85 sm:text-lg"
                    >
                        Real sips, sunny celebrations, and unfiltered tropical energy.
                        Tag <strong className="text-[#064e36]">#JABMoments</strong> or{" "}
                        <strong className="text-[#064e36]">@jabjuice1983</strong> to be featured
                        in our worldwide community reel.
                    </Text>

                    {/* Social Highlights Ticker */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2 rounded-full border border-[#064e36]/15 bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#064e36] shadow-sm backdrop-blur-sm sm:text-sm">
                            <Flame className="size-4 text-[#ffcf00] fill-[#ffcf00]" />
                            <span>121 Posts</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-[#064e36]/15 bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#064e36] shadow-sm backdrop-blur-sm sm:text-sm">
                            <Sparkles className="size-4 text-[#c7a34f]" />
                            <span>886 Followers</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-[#064e36]/15 bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#064e36] shadow-sm backdrop-blur-sm sm:text-sm">
                            <InstagramIcon className="size-4 text-[#064e36]" />
                            <span>@jabjuice1983</span>
                        </div>
                    </div>
                </div>

                {/* =========================================================
                    BENTO MOMENTS GRID
                ========================================================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-4 lg:gap-5 auto-rows-[260px]">
                    {jabMoments.map((moment) => (
                        <MomentCard
                            key={moment.id}
                            moment={moment}
                            onOpen={() => setActiveMoment(moment)}
                            className={moment.gridSpan || "col-span-1 row-span-1 min-h-[250px]"}
                            isHero={moment.id === 1}
                        />
                    ))}
                </div>

                {/* =========================================================
                    SIMPLE INSTAGRAM BAR
                ========================================================= */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#064e36]/15 bg-white/70 px-6 py-4 backdrop-blur-sm shadow-sm">
                    <div className="flex items-center gap-3.5 text-center sm:text-left">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#064e36] text-white">
                            <InstagramIcon className="size-5" />
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                                <span className="font-bold text-[#064e36]">@jabjuice1983</span>
                                <CheckCircle2 className="size-4 text-[#c7a34f] fill-[#c7a34f]" />
                                <span className="text-xs text-[#064e36]/75">✨ The Official Carnival Rum ✨</span>
                            </div>
                            <div className="mt-1 flex items-center justify-center sm:justify-start gap-3 text-xs text-[#183b2d]/70">
                                <span><strong>121</strong> posts</span>
                                <span>•</span>
                                <span><strong>886</strong> followers</span>
                                <span>•</span>
                                <span><strong>102</strong> following</span>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://www.instagram.com/jabjuice1983/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#064e36] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#043b29] hover:scale-105 active:scale-95 shadow"
                    >
                        <span>Follow on Instagram</span>
                        <ExternalLink className="size-3.5" />
                    </a>
                </div>
            </Container>

            {/* =========================================================
                CLEAN MEDIA-ONLY POPUP MODAL
            ========================================================= */}
            <AnimatePresence>
                {activeMoment && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveMoment(null)}
                            className="fixed inset-0 bg-[#021811]/85 backdrop-blur-md"
                        />

                        {/* Dialog Card - Media Only */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 15 }}
                            transition={{ type: "spring", stiffness: 360, damping: 28 }}
                            className="relative z-10 flex max-h-[92vh] max-w-[94vw] items-center justify-center overflow-hidden rounded-[2rem] bg-black shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={() => setActiveMoment(null)}
                                className="absolute right-3.5 top-3.5 z-30 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:bg-black hover:scale-110 active:scale-95 shadow-lg"
                                aria-label="Close modal"
                            >
                                <X className="size-5" />
                            </button>

                            {/* Media Viewport */}
                            {activeMoment.type === "video" ? (
                                <video
                                    src={activeMoment.src}
                                    poster={activeMoment.poster}
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    ref={(el) => {
                                        if (el) {
                                            el.muted = true;
                                            el.volume = 0;
                                        }
                                    }}
                                    onVolumeChange={(e) => {
                                        e.currentTarget.muted = true;
                                        e.currentTarget.volume = 0;
                                    }}
                                    className="max-h-[88vh] max-w-[92vw] w-auto h-auto rounded-[2rem] object-contain bg-black"
                                />
                            ) : (
                                <img
                                    src={activeMoment.src}
                                    alt={activeMoment.alt}
                                    className="max-h-[88vh] max-w-[92vw] w-auto h-auto rounded-[2rem] object-contain bg-black select-none"
                                />
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </Section>
    );
}

/* =========================================================
   REUSABLE MOMENT CARD COMPONENT
========================================================= */

interface MomentCardProps {
    moment: JabMoment;
    onOpen: () => void;
    className?: string;
    isHero?: boolean;
}

function MomentCard({
    moment,
    onOpen,
    className = "",
    isHero = false,
}: MomentCardProps) {
    return (
        <article
            onClick={onOpen}
            className={`group relative cursor-pointer overflow-hidden rounded-[2rem] bg-[#064e36] shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${className}`}
        >
            {/* Background Media */}
            {moment.type === "video" ? (
                <div className="relative size-full overflow-hidden">
                    <video
                        src={moment.src}
                        poster={moment.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        ref={(el) => {
                            if (el) {
                                el.muted = true;
                                el.volume = 0;
                            }
                        }}
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                        <Play className="size-3 fill-white" />
                        <span>Reel • {moment.duration || "0:15"}</span>
                    </div>
                </div>
            ) : (
                <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    sizes={
                        isHero
                            ? "(max-width: 768px) 100vw, 50vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
            )}

            {/* Subtle Hover Scrim - Pure transparent at rest, subtle on hover */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />

            {/* Corner Badge: Clean Icon Only (No Text) */}
            {moment.type === "video" ? (
                <div className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-0.5 size-4 fill-white text-white" />
                </div>
            ) : (
                <div className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                    <InstagramIcon className="size-4" />
                </div>
            )}

            {/* Center Play / View Button on Hover (No Text) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                <div className="flex size-14 sm:size-16 items-center justify-center rounded-full border border-white/40 bg-white/25 text-white backdrop-blur-md shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    {moment.type === "video" ? (
                        <Play className="ml-1 size-7 fill-white text-white" />
                    ) : (
                        <ExternalLink className="size-6 text-white" />
                    )}
                </div>
            </div>
        </article>
    );
}