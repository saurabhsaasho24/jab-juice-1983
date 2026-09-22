"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowRight, Sparkles, Phone, MapPin } from "lucide-react";

import { company } from "@/data/company";

/* Inline SVG Social Icons */
function InstagramIcon({ className = "size-5" }: { className?: string }) {
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
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function FacebookIcon({ className = "size-5" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5c0-.988.245-1.49 1.494-1.49h2.506V2.06c-.55-.074-1.764-.206-3.219-.206-3.376 0-5.781 2.06-5.781 5.946v1.71h-3v3.98h3v8.01z" />
        </svg>
    );
}

function YouTubeIcon({ className = "size-5" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
}

function TikTokIcon({ className = "size-5" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-6.62 6.32 6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.84-4.5V8.75a8.28 8.28 0 0 0 5.21 1.78V7.08a4.83 4.83 0 0 1-2-.39z" />
        </svg>
    );
}

const footerLinks = {
    explore: [
        { name: "Home", href: "#" },
        { name: "Flavors", href: "#" },
        { name: "Shop", href: "#" },
        { name: "Merch", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Store Locator", href: "#" },
    ],
};

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative overflow-hidden bg-[#042e20] text-white">
            {/* Top Wave Decorator Transition */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-1 left-0 w-full overflow-hidden leading-[0] z-20"
            >
                <svg
                    viewBox="0 0 1440 60"
                    preserveAspectRatio="none"
                    className="block h-8 w-full sm:h-12 lg:h-16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,0 C280,45 540,15 720,30 C900,45 1160,10 1440,25 L1440,0 L0,0 Z"
                        fill="#fffdf4"
                    />
                </svg>
            </div>

            {/* Ambient Tropical Glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-48 top-40 -z-0 size-[30rem] rounded-full bg-[#ffcf00]/10 blur-[140px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-48 bottom-20 -z-0 size-[32rem] rounded-full bg-[#c7a34f]/15 blur-[150px]"
            />

            {/* Giant Background Typography Watermark - positioned behind content */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 select-none text-center font-black uppercase tracking-widest text-white/[0.03] text-[clamp(4rem,15vw,13rem)] leading-none -z-0"
            >
                JAB JUICE
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 sm:pt-28 lg:px-8">
                {/* =========================================================
                    CTA BANNER INSIDE FOOTER
                ========================================================= */}
                <div className="relative mb-16 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#064e36] via-[#053d2b] to-[#022016] p-8 sm:p-12 lg:p-14 border border-white/15 shadow-2xl">
                    {/* Decorative glows */}
                    <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-[#ffcf00]/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-[#c7a34f]/20 blur-3xl" />

                    <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#ffcf00]/30 bg-[#ffcf00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ffcf00] backdrop-blur-md mb-4">
                                <Sparkles className="size-3.5" />
                                <span>Official Carnival Experience</span>
                            </div>
                            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl leading-[0.95]">
                                Ready to Bring On <br className="hidden sm:inline" />
                                <span className="text-[#ffcf00]">The Good Vibes?</span>
                            </h2>
                            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/80">
                                Whether you crave our iconic tropical fruit pouches or the smooth celebration of JAB Carnival Rum, the carnival starts whenever you crack open a JAB.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffcf00] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-[#064e36] transition-all hover:bg-[#ffe169] hover:scale-105 active:scale-95 shadow-xl text-center"
                            >
                                <span>Shop All Flavors</span>
                                <ArrowRight className="size-4" />
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40 active:scale-95 text-center"
                            >
                                <span>Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* =========================================================
                    MAIN FOOTER NAVIGATION COLUMNS + NEWSLETTER CTA
                ========================================================= */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 border-white/10">
                    {/* Brand Column (Spans 5 columns on desktop) */}
                    <div className="lg:col-span-5">
                        <Link
                            href="#"
                            aria-label="JAB Juice Home"
                            className="inline-block transition-opacity hover:opacity-90"
                        >
                            <Image
                                src={company.logo}
                                alt={`${company.name} logo`}
                                width={220}
                                height={80}
                                className="h-auto w-[160px] sm:w-[190px] object-contain"
                            />
                        </Link>

                        <p className="mt-5 max-w-sm text-sm sm:text-base leading-relaxed text-white/75">
                            Crafting sunshine in every bottle since 1983. Bringing authentic
                            tropical energy, exotic fruit juices, and official Caribbean carnival vibes
                            to celebrations worldwide.
                        </p>

                        {/* Heritage Pills */}
                        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-[#ffcf00]">
                            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-sm">
                                🌴 Est. 1983
                            </span>
                            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-sm">
                                ☀️ Real Tropical Fruits
                            </span>
                            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-sm">
                                🎉 Carnival Spirit
                            </span>
                        </div>

                        {/* Social Icons Row */}
                        <div className="mt-7 flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/jabjuice1983/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="JAB Juice Instagram"
                                className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:border-[#ffcf00] hover:bg-[#ffcf00] hover:text-[#064e36] hover:scale-110 active:scale-95 shadow-sm"
                            >
                                <InstagramIcon className="size-5" />
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="JAB Juice Facebook"
                                className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:border-[#ffcf00] hover:bg-[#ffcf00] hover:text-[#064e36] hover:scale-110 active:scale-95 shadow-sm"
                            >
                                <FacebookIcon className="size-5" />
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="JAB Juice YouTube"
                                className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:border-[#ffcf00] hover:bg-[#ffcf00] hover:text-[#064e36] hover:scale-110 active:scale-95 shadow-sm"
                            >
                                <YouTubeIcon className="size-5" />
                            </a>

                            {/* <a
                                href="https://www.tiktok.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="JAB Juice TikTok"
                                className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:border-[#ffcf00] hover:bg-[#ffcf00] hover:text-[#064e36] hover:scale-110 active:scale-95 shadow-sm"
                            >
                                <TikTokIcon className="size-5" />
                            </a> */}
                        </div>
                    </div>

                    {/* Explore Column (Spans 2 columns on desktop) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffcf00]">
                            Explore
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {footerLinks.explore.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="inline-block text-white/75 transition-colors hover:text-[#ffcf00] hover:translate-x-1"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column (Spans 2 columns on desktop) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffcf00]">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {footerLinks.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="inline-block text-white/75 transition-colors hover:text-[#ffcf00] hover:translate-x-1"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Column (Spans 3 columns on desktop) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffcf00]">
                            Get in Touch
                        </h3>
                        <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed">
                            Have questions, need wholesale inquiries, or want JAB Juice at your next carnival?
                        </p>

                        <div className="mt-5 space-y-3">
                            {/* Phone */}
                            <a
                                href={`tel:${company.phone || "+17182884547"}`}
                                className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-all hover:border-[#ffcf00]/50 hover:bg-white/10"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#ffcf00] text-[#064e36] shadow-sm transition-transform group-hover:scale-105">
                                    <Phone className="size-4" />
                                </div>
                                <div className="min-w-0">
                                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">
                                        Call or Text
                                    </span>
                                    <span className="text-sm font-bold text-white transition-colors group-hover:text-[#ffcf00]">
                                        {company.phoneDisplay || "(718) 288-4547"}
                                    </span>
                                </div>
                            </a>

                            {/* Address */}
                            <div className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-3.5">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#ffcf00]">
                                    <MapPin className="size-4" />
                                </div>
                                <div className="min-w-0">
                                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">
                                        Location
                                    </span>
                                    <span className="text-sm font-bold text-white">
                                        {company.addressDisplay || "Brooklyn, NY, USA"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========================================================
                    ONE-LINER FOOTER BOTTOM
                ========================================================= */}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col xl:flex-row items-center justify-between gap-4 text-xs text-white/60">
                    {/* Left: Copyright */}
                    <div className="flex items-center justify-center xl:justify-start text-center xl:text-left">
                        <p>© {new Date().getFullYear()} JAB Juice Ltd. All rights reserved.</p>
                    </div>

                    {/* Right: Agency Service Links & Powered by Wxperts badge */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
                        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs">
                            {[
                                {
                                    label: "Website Development",
                                    href: "https://www.wxperts.co/website-development.php",
                                },
                                {
                                    label: "Hosting",
                                    href: "https://www.wxperts.co/",
                                },
                                {
                                    label: "SEO",
                                    href: "https://www.wxperts.co/search-engine-optimization.php",
                                },
                                {
                                    label: "Digital Marketing",
                                    href: "https://www.wxperts.co/digital-marketing.php",
                                },
                            ].map(({ label, href }, index, arr) => (
                                <span key={label} className="flex items-center gap-2">
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/70 transition-colors duration-300 hover:text-[#ffcf00]"
                                    >
                                        {label}
                                    </a>
                                    {index < arr.length - 1 && (
                                        <span className="text-white/20">|</span>
                                    )}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 pl-1 sm:border-l sm:border-white/15">
                            <a
                                href="https://www.wxperts.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit WXperts.co"
                                className="inline-flex items-center rounded-sm bg-white/95 px-2 py-0.5 transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-sm"
                            >
                                <Image
                                    src="/wxperts.webp"
                                    alt="Powered by WXperts"
                                    width={80}
                                    height={22}
                                    className="h-4 sm:h-4.5 w-auto object-contain"
                                />
                            </a>
                        </div>

                        <button
                            type="button"
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white transition hover:border-[#ffcf00] hover:bg-[#ffcf00] hover:text-[#064e36]"
                        >
                            <span>Top</span>
                            <ArrowUp className="size-3" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

