import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shirt } from "lucide-react";

import { Section, Container, Heading, Text, Button } from "@/components/ui";

export default function JabMerchSection() {
    return (
        <Section background="muted" spacing={false}>
            <Container>
                <div className="grid items-center gap-10 py-16 md:gap-14 md:py-24 lg:grid-cols-2">
                    {/* Merch Image */}
                    <div className="relative">
                        {/* Decorative background */}
                        <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-[#ffcf00] md:-inset-5" />

                        <div className="relative overflow-hidden rounded-[1.5rem] bg-white shadow-xl">
                            <Image
                                src="/assets/product-img.jpg"
                                alt="JAB Juice branded T-shirts in different colors"
                                width={1024}
                                height={1024}
                                className="h-auto w-full object-cover"
                                priority={false}
                            />

                            {/* Image label */}
                            <div className="absolute bottom-4 left-4 rounded-full bg-[#064e36] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg sm:bottom-6 sm:left-6 sm:text-sm">
                                Official JAB Juice Merch
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -right-3 -top-5 flex h-20 w-20 rotate-6 flex-col items-center justify-center rounded-full bg-[#ffcf00] text-center text-[#064e36] shadow-lg sm:-right-5 sm:-top-6 sm:h-24 sm:w-24">
                            <span className="text-xl font-black leading-none sm:text-2xl">
                                JAB
                            </span>
                            <span className="mt-1 text-[9px] font-extrabold uppercase tracking-wider sm:text-[10px]">
                                Juice
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#064e36]/15 bg-white px-4 py-2">
                            <Shirt className="h-4 w-4 text-[#064e36]" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#064e36]">
                                Wear the Energy
                            </span>
                        </div>

                        <Heading
                            as="h2"
                            size="xl"
                            className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#064e36] sm:text-5xl lg:text-6xl"
                        >
                            More Than
                            <br />
                            Just Juice.
                            <br />
                            <span className="text-[#c7a34f]">It’s JAB Style.</span>
                        </Heading>

                        <Text
                            size="lg"
                            className="mt-6 max-w-lg leading-8 text-[#526b5e]"
                        >
                            Take the JAB Juice vibe beyond the bottle. Check out the
                            branded T-shirts and show your JAB style wherever you go.
                        </Text>

                        {/* Highlights */}
                        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="rounded-2xl border border-[#064e36]/10 bg-white p-4 sm:p-5">
                                <span className="mb-3 block h-1.5 w-10 rounded-full bg-[#ffcf00]" />
                                <Heading size="md" className="font-bold text-[#064e36]">Bold Branding</Heading>
                                <p className="mt-1 text-sm leading-6 text-[#526b5e]">
                                    JAB Juice graphics that stand out.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#064e36]/10 bg-white p-4 sm:p-5">
                                <span className="mb-3 block h-1.5 w-10 rounded-full bg-[#ffcf00]" />
                                <Heading size="md" className="font-bold text-[#064e36]">Color Choices</Heading>
                                <p className="mt-1 text-sm leading-6 text-[#526b5e]">
                                    Explore the different T-shirt looks.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Button
                                href="/shop"
                                variant="primary"
                                size="lg"
                            >
                                Explore the Merch
                            </Button>

                            <Link
                                href="/contact"
                                className="text-center text-sm font-bold text-[#064e36] underline decoration-[#c7a34f] decoration-2 underline-offset-4 transition-colors hover:text-[#c7a34f] sm:text-left"
                            >
                                Ask us about our T-shirts
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}