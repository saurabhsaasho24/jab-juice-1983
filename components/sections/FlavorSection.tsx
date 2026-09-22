"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { Section, Container, Heading, Text, Button } from "@/components/ui";

type Flavor = {
    name: string;
    image: string;
    background: string;
};

const flavors: Flavor[] = [
    {
        name: "Blue Pouch",
        image: "/products/jab-blue-pouch.png",
        background: "bg-[#dff6fa]",
    },
    {
        name: "Orange Pouch",
        image: "/products/jab-orange-pouch.png",
        background: "bg-[#fbe4d9]",
    },
    {
        name: "Red Bottle",
        image: "/products/jab-red-bottle.png",
        background: "bg-[#ffe3df]",
    },
    {
        name: "Gold Carnival Rum",
        image: "/products/jab-gold-rum.png",
        background: "bg-[#fff2bd]",
    },
    {
        name: "Blue Carnival Rum",
        image: "/products/jab-blue-rum.png",
        background: "bg-[#dceeff]",
    },
    {
        name: "White Carnival Rum",
        image: "/products/jab-white-rum.png",
        background: "bg-[#f1eee8]",
    },
    {
        name: "Dark Carnival Rum",
        image: "/products/jab-dark-rum.png",
        background: "bg-[#e8e3dc]",
    },
    {
        name: "Gold Carnival Rum",
        image: "/products/jab-gold-rum.png",
        background: "bg-[#fff2bd]",
    },
];

export default function FlavorSection() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <Section className="relative overflow-hidden bg-[#ffcf00] py-16 sm:py-20 lg:py-28">
            {/* Decorative background elements */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border-[35px] border-[#064e36]/[0.06] sm:size-96"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full border-[40px] border-[#064e36]/[0.06]"
            />

            <Container className="relative z-10">
                {/* Section heading */}
                <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#064e36]/20 bg-white/60 px-4 py-2">
                        <span className="size-2 rounded-full bg-[#064e36]" />

                        <Text
                            size="sm"
                            className="font-bold uppercase tracking-[0.2em] text-[#064e36]"
                        >
                            Find Your Flavor
                        </Text>
                    </span>

                    <Heading
                        as="h2"
                        size="xl"
                        align="center"
                        className="max-w-4xl text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.9] tracking-[-0.045em] text-[#064e36]"
                    >
                        A Taste of
                        <span className="mt-2 block text-white">The Tropics.</span>
                    </Heading>

                    <Text
                        align="center"
                        className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#183b2d] sm:text-lg"
                    >
                        Explore refreshing tropical flavors and find the one that brings
                        a little extra sunshine to your day.
                    </Text>
                </div>

                {/* Infinite autoplay slider */}
                {/* Full-width product slider */}
                <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
                    <Swiper
                        modules={[Autoplay, A11y]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop
                        centeredSlides
                        slidesPerView="auto"
                        spaceBetween={24}
                        speed={700}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        allowTouchMove
                        watchOverflow={false}
                        breakpoints={{
                            480: {
                                slidesPerView: 2.2,
                                spaceBetween: 18,
                            },
                            640: {
                                slidesPerView: 2.8,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3.5,
                                spaceBetween: 24,
                            },
                            1440: {
                                slidesPerView: 4.2,
                                spaceBetween: 24,
                            },
                        }}
                        className="product-swiper !overflow-visible"
                    >
                        {flavors.map((flavor, index) => (
                            <SwiperSlide key={`${flavor.name}-${index}`} className="h-auto pb-6">
                                <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl">
                                    {/* Product image */}
                                    <div
                                        className={`relative aspect-[4/3] overflow-hidden ${flavor.background}`}
                                    >
                                        <Image
                                            src={flavor.image}
                                            alt={`JAB Juice ${flavor.name}`}
                                            fill
                                            unoptimized
                                            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 28vw"
                                            className="object-contain p-6 transition-transform duration-700 group-hover:scale-105 sm:p-8"
                                        />
                                    </div>

                                    {/* Product details */}
                                    <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                                        <div>
                                            <Heading
                                                as="h3"
                                                size="md"
                                                className="mt-2 uppercase leading-tight text-[#064e36]"
                                            >
                                                {flavor.name}
                                            </Heading>
                                        </div>

                                        <Link
                                            href="/products"
                                            aria-label={`Explore ${flavor.name} JAB Juice`}
                                            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#ffcf00] text-2xl text-[#064e36] transition hover:bg-[#064e36] hover:text-white"
                                        >
                                            <span aria-hidden="true">↗</span>
                                        </Link>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 flex flex-col items-center text-center sm:mt-14">
                    <Text className="mb-5 font-medium text-[#183b2d]">
                        Your next refreshing moment starts here.
                    </Text>

                    <Button
                        href="/products"
                        variant="primary"
                        size="lg"
                        className="rounded-full bg-[#064e36] px-8 py-4 font-semibold text-white transition hover:bg-[#043b29]"
                    >
                        Explore All Products
                    </Button>
                </div>
            </Container>

            {/* Bottom wave divider */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 w-full leading-[0]"
            >
                <svg
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    className="block h-[45px] w-full sm:h-[65px] lg:h-[85px]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,55 C180,100 330,5 520,45 C730,90 850,100 1040,50 C1200,5 1320,25 1440,55 L1440,100 L0,100 Z"
                        fill="#fff6c7"
                    />
                </svg>
            </div>
        </Section>
    );
}