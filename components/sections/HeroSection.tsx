import Image from "next/image";

import {
    Section,
    Container,
    Heading,
    Text,
    Button,
} from "@/components/ui";

export default function HeroSection() {
    return (
        <Section
            background="default"
            spacing={false}
            className="relative isolate min-h-screen min-h-[100dvh] overflow-hidden bg-[#ffcf00]"
        >
            {/* Background Images */}
            <div className="absolute inset-0 -z-10">
                {/* Desktop / Tablet Image */}
                <Image
                    src="/assets/hero-image-lg.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="hidden object-cover object-center md:block"
                />

                {/* Mobile Image */}
                <Image
                    src="/assets/hero-image-sm.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center md:hidden"
                />

                {/* Optional overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-black/50 sm:via-black/20 sm:to-transparent" />
            </div>

            {/* Hero Content */}
            <Container className="relative flex min-h-screen min-h-[100dvh] items-start justify-center lg:!px-0 pt-24 pb-12 sm:items-center sm:justify-start sm:pt-32 sm:pb-20 lg:pt-36">
                <div className="flex flex-col items-center text-center mx-auto max-w-xl space-y-4 text-white sm:items-start sm:text-left sm:mx-0 sm:space-y-8">
                    {/* Eyebrow */}
                    <Text
                        size="sm"
                        color="white"
                        className="text-center sm:text-left font-bold uppercase tracking-[0.25em]"
                    >
                        JAB Juice · Est. 1983
                    </Text>

                    {/* Main Heading */}
                    <Heading
                        as="h1"
                        size="xl"
                        color="white"
                        className="text-center sm:text-left max-w-[650px] text-4xl uppercase leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl"
                    >
                        Bring on the
                        <span className="mt-1 block text-[#ffcf00] sm:mt-2">
                            Good Vibes.
                        </span>
                    </Heading>

                    {/* Description */}
                    <Text
                        size="default"
                        color="white"
                        className="text-center sm:text-left max-w-md text-sm leading-relaxed text-white/95 sm:text-base md:text-lg"
                    >
                        Refresh your moments with vibrant tropical flavors and the
                        unmistakable spirit of JAB Juice. Every sip brings a little more
                        sunshine, celebration, and good energy.
                    </Text>

                    {/* CTA Buttons - hidden on mobile, visible on sm: and up */}
                    <div className="hidden sm:flex sm:flex-row sm:flex-wrap gap-3 pt-2">
                        <Button href="/shop" variant="primary" size="lg">
                            Shop Now
                        </Button>

                        <Button href="/about" variant="secondary" size="lg">
                            Discover JAB
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}