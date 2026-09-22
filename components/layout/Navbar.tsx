"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import {
    Button,
    Heading,
    Text,
} from "@/components/ui";

import { company } from "@/data/company";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Handle scroll to switch between floating and full-width header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll while the drawer is open.
    useEffect(() => {
        if (!isMenuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isMenuOpen]);

    const isActiveLink = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <>
            {/* Main Navbar */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ease-in-out ${
                    isScrolled ? "py-3 sm:py-3.5" : "py-4 sm:py-6"
                }`}
            >
                {/* Desktop Header */}
                <div className="hidden lg:flex w-full items-center justify-between px-6 xl:px-12 max-w-[1600px] mx-auto">
                    {/* Left: Logo in a matching sleek pill when scrolled, or clean on top */}
                    <div
                        className={`flex items-center transition-all duration-300 ${
                            isScrolled
                                ? "rounded-full bg-white/95 px-7 py-2.5 shadow-[-4px_6px_25px_rgba(0,0,0,0.08)] backdrop-blur-md border border-black/[0.06] hover:shadow-[-6px_8px_30px_rgba(0,0,0,0.12)]"
                                : "py-1"
                        }`}
                    >
                        <Link
                            href="/"
                            aria-label="JAB Juice home"
                            className="flex shrink-0 items-center transition-transform duration-200 hover:opacity-95"
                        >
                            <Image
                                src={company.logo}
                                alt={`${company.name} logo`}
                                width={280}
                                height={110}
                                priority
                                style={{
                                    height: isScrolled ? "70px" : "125px",
                                    width: "auto",
                                }}
                                className="object-contain transition-all duration-300"
                            />
                        </Link>
                    </div>

                    {/* Right: Navigation Pill Bar */}
                    <div className="flex items-center rounded-full bg-white/95 py-3.5 pl-8 pr-4 shadow-[-10px_10px_35px_rgba(0,0,0,0.08)] backdrop-blur-md border border-black/[0.06] transition-all duration-300 hover:shadow-[-12px_14px_40px_rgba(0,0,0,0.12)] gap-2 xl:gap-3">
                        <nav aria-label="Main navigation" className="flex items-center gap-1 xl:gap-2">
                            {company.navLinks.map((link) => {
                                const active = isActiveLink(link.href);

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        aria-current={active ? "page" : undefined}
                                        className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                                            active
                                                ? "text-primary font-bold bg-primary/10"
                                                : "text-[#183b2d]/80 hover:text-primary hover:bg-black/[0.03]"
                                        }`}
                                    >
                                        {link.name ?? link.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Embedded CTA Pill Button */}
                        <Link
                            href="/shop"
                            className="ml-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-primary-hover hover:shadow-md active:scale-95 whitespace-nowrap"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* Mobile / Tablet Header: Logo on left, Menu Pill Button on right */}
                <div className="flex w-full items-center justify-between px-4 sm:px-6 lg:hidden">
                    <Link
                        href="/"
                        aria-label="JAB Juice home"
                        className="flex shrink-0 items-center transition-transform duration-200 hover:opacity-95"
                    >
                        <Image
                            src={company.logo}
                            alt={`${company.name} logo`}
                            width={260}
                            height={80}
                            priority
                            style={{
                                height: isScrolled ? "48px" : "68px",
                                width: "auto",
                            }}
                            className="object-contain transition-all duration-300"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open navigation menu"
                        aria-expanded={isMenuOpen}
                        className="flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/95 px-4 py-2 text-primary shadow-md backdrop-blur-md transition-all duration-200 hover:bg-white active:scale-95"
                    >
                        <span className="text-xs font-bold uppercase tracking-wider text-heading">Menu</span>
                        <Menu className="size-5 text-primary" />
                    </button>
                </div>
            </header>

            {/* Mobile / Tablet Offcanvas */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.button
                            type="button"
                            aria-label="Close navigation menu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-[60] cursor-default bg-[#031f16]/60 backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.aside
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 320,
                                damping: 32,
                                mass: 0.8,
                            }}
                            className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-[min(88vw,420px)] flex-col overflow-y-auto border-l border-primary/10 bg-[#fffdf4] shadow-2xl"
                        >
                            {/* Drawer Header */}
                            <div className="flex min-h-[82px] items-center justify-between border-b border-primary/10 px-5 sm:px-7">
                                <Link
                                    href="/"
                                    aria-label="JAB Juice home"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        width={160}
                                        height={60}
                                        style={{ height: "38px", width: "auto" }}
                                        className="object-contain"
                                    />
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label="Close navigation menu"
                                    className="flex size-11 items-center justify-center rounded-xl border border-primary/20 text-primary transition-all duration-300 hover:rotate-90 hover:bg-primary hover:text-white"
                                >
                                    <X className="size-5" />
                                </button>
                            </div>

                            {/* Drawer Intro */}
                            <div className="px-5 pb-5 pt-7 sm:px-7">
                                <Text
                                    size="sm"
                                    color="primary"
                                    className="font-bold uppercase tracking-[0.2em]"
                                >
                                    Welcome to JAB Juice
                                </Text>

                                <Heading
                                    as="h2"
                                    size="lg"
                                    className="mt-3 uppercase leading-tight"
                                >
                                    Bring on the
                                    <span className="block text-accent">good vibes.</span>
                                </Heading>
                            </div>

                            {/* Tabular Mobile Links */}
                            <nav
                                aria-label="Mobile navigation links"
                                className="px-5 sm:px-7"
                            >
                                <div className="overflow-hidden rounded-2xl border border-primary/15 bg-white">
                                    {company.navLinks.map((link, index) => {
                                        const active = isActiveLink(link.href);

                                        return (
                                            <motion.div
                                                key={link.href}
                                                initial={{ opacity: 0, x: 24 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.06 + index * 0.06,
                                                }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    aria-current={active ? "page" : undefined}
                                                    className={`group flex min-h-[64px] items-center justify-between gap-4 border-b border-primary/10 px-4 transition-all duration-300 last:border-b-0 sm:min-h-[70px] sm:px-5 ${active
                                                            ? "bg-primary text-white"
                                                            : "bg-white text-heading hover:bg-background-light"
                                                        }`}
                                                >
                                                    <span className="flex min-w-0 items-center gap-4">
                                                        <span
                                                            className={`font-heading text-xs font-bold tracking-wider ${active ? "text-white/70" : "text-primary/70"
                                                                }`}
                                                        >
                                                            {String(index + 1).padStart(2, "0")}
                                                        </span>

                                                        <span className="font-heading text-lg font-bold uppercase tracking-wide sm:text-xl">
                                                            {link.name ?? link.label}
                                                        </span>
                                                    </span>

                                                    <ArrowUpRight
                                                        className={`size-5 shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${active
                                                                ? "text-white"
                                                                : "text-primary/50 group-hover:text-primary"
                                                            }`}
                                                    />
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </nav>

                            {/* Drawer Footer */}
                            <div className="mt-auto px-5 pb-7 pt-8 sm:px-7">
                                <Button
                                    href="/shop"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Shop Now
                                </Button>

                                <Text
                                    size="sm"
                                    color="muted"
                                    align="center"
                                    className="mt-5 font-heading font-semibold uppercase tracking-[0.2em]"
                                >
                                    Refreshing Drinks · Since 1983
                                </Text>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}