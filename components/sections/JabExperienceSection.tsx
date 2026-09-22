import Image from "next/image";

import {
    Section,
    Container,
    Heading,
    Text,
    Button,
} from "@/components/ui";

/* ----------------------------------------
   Reusable Image Tile
---------------------------------------- */

interface ImageTileProps {
    src: string;
    alt: string;
    className?: string;
    imageClassName?: string;
    priority?: boolean;
}

function ImageTile({
    src,
    alt,
    className = "",
    imageClassName = "",
    priority = false,
}: ImageTileProps) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes="(max-width: 767px) 50vw, (max-width: 1200px) 40vw, 30vw"
                className={`object-cover transition-transform duration-700 hover:scale-105 ${imageClassName}`}
            />
        </div>
    );
}

/* ----------------------------------------
   JAB Experience Section
---------------------------------------- */

export default function JabExperienceSection() {
    return (
        <Section
            background="muted"
            spacing={false}
            className="relative isolate overflow-hidden bg-[#fffdf4] text-[#064e36]"
        >
            {/* =====================================
          Background Gradient
      ===================================== */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_8%_12%,rgba(255,207,0,0.24),transparent_38%),radial-gradient(ellipse_at_92%_35%,rgba(199,163,79,0.18),transparent_35%),linear-gradient(180deg,#fffdf4_0%,#fff8df_48%,#fff2bd_100%)]"
            />

            {/* Decorative Gradient Glows */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-[25%] -z-10 size-72 rounded-full bg-[#ffcf00]/20 blur-[100px] sm:size-96"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-[55%] -z-10 size-72 rounded-full bg-[#c7a34f]/20 blur-[100px] sm:size-96"
            />

            {/* =====================================
          Main Section Content
      ===================================== */}

            <Container className="relative py-16 sm:py-20 lg:py-28">


                {/* =====================================
            Desktop Editorial Collage
        ===================================== */}

                <div className="relative">

                    <div className="hidden min-h-[720px] grid-cols-12 grid-rows-[190px_240px_220px] gap-4 md:grid lg:min-h-[860px] lg:grid-rows-[240px_300px_260px] lg:gap-5">

                        {/* Large Yellow Feature Panel */}

                        <div className="relative col-span-5 col-start-1 row-span-2 row-start-1 grid min-h-[440px] grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-[2rem] bg-[#ffcf00] sm:min-h-[520px]">

                            {/* Decorative Circle */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -left-16 -top-16 z-0 size-64 rounded-full border-[35px] border-[#064e36]/10"
                            />

                            {/* LEFT: Text */}
                            <div className="relative z-10 flex flex-col items-start justify-center px-5 py-10 sm:px-8 md:px-8">

                                <Text
                                    size="sm"
                                    color="default"
                                    className="text-xs font-bold uppercase tracking-[0.18em] text-[#064e36] sm:text-sm"
                                >
                                    Made for the moment
                                </Text>

                                <Heading
                                    as="h3"
                                    size="lg"
                                    className="mt-5 whitespace-normal text-[clamp(1.8rem,4vw,3.25rem)] font-black uppercase leading-[0.95] tracking-tight text-[#064e36]"
                                >
                                    Good drinks.
                                    <span className="mt-2 block">Good times.</span>
                                </Heading>

                                <div className="mt-6 h-1.5 w-12 rounded-full bg-[#064e36]" />

                                <Text
                                    size="sm"
                                    color="default"
                                    className="mt-5 max-w-[220px] text-sm leading-6 text-[#064e36]/80"
                                >
                                    Bring the JAB Juice energy to every moment.
                                </Text>

                            </div>

                            {/* RIGHT: Product Image */}
                            <div className="relative z-10 flex items-center justify-center py-6 pr-4 sm:pr-7">

                                <ImageTile
                                    src="/assets/about-1.png"
                                    alt="JAB Juice bottle"
                                    priority
                                    className="relative h-[360px] w-[180px] overflow-visible sm:h-[440px]"
                                    imageClassName="object-contain object-center"
                                />

                            </div>

                        </div>

                        {/* Main Bottle Image + Heading */}
                        <div className="col-span-4 col-start-6 row-span-3 row-start-1 flex flex-col">
                            {/* Heading */}
                            <div className="relative z-10 mx-auto mb-8 w-full max-w-5xl text-center sm:mb-10">
                                {/* Eyebrow Label */}
                                <div className="mb-5 flex justify-center sm:mb-6">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                                        <span className="size-2 rounded-full bg-primary" />

                                        <Text
                                            size="sm"
                                            color="primary"
                                            className="font-bold uppercase tracking-[0.2em]"
                                        >
                                            The JAB Experience
                                        </Text>
                                    </span>
                                </div>

                                {/* Main Heading */}
                                <Heading
                                    as="h2"
                                    size="xl"
                                    align="center"
                                    className="mx-auto max-w-4xl text-[clamp(2.8rem,7vw,6.5rem)] uppercase leading-[0.88] tracking-[-0.045em]"
                                >
                                    Real Flavors.
                                    <span className="mt-2 block text-[#c7a34f]">
                                        Brighter Days.
                                    </span>
                                </Heading>

                                {/* Decorative Divider */}
                                <div
                                    aria-hidden="true"
                                    className="mx-auto mt-6 flex items-center justify-center gap-2 sm:mt-8"
                                >
                                    <span className="h-[3px] w-8 rounded-full bg-primary/30" />
                                    <span className="h-[5px] w-14 rounded-full bg-primary" />
                                    <span className="h-[3px] w-8 rounded-full bg-primary/30" />
                                </div>

                                {/* Description */}
                                <Text
                                    size="default"
                                    color="muted"
                                    align="center"
                                    className="mx-auto mt-5 max-w-2xl px-2 text-base leading-relaxed sm:mt-6 sm:text-lg"
                                >
                                    A splash of tropical flavor, a little sunshine, and a whole
                                    lot of good energy. Welcome to the world of JAB Juice.
                                </Text>
                            </div>

                            {/* Bottle Image */}
                            <div className="relative min-h-[350px] w-full flex-1 overflow-hidden rounded-[2rem] bg-[#f5edda] sm:min-h-[450px] lg:min-h-auto">
                                <Image
                                    src="/assets/about-main.jpg"
                                    alt="JAB Juice featured bottle"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Top Right Product Image */}

                        <ImageTile
                            src="/assets/about-2.jpg"
                            alt="JAB Juice passion fruit drink"
                            className="col-span-3 col-start-10 row-span-1 row-start-1 rounded-[2rem] bg-[#f8e4d7]"
                            imageClassName="object-cover"
                        />

                        {/* Dark Green Message Panel */}

                        <div className="relative col-span-3 col-start-10 row-span-1 row-start-2 flex items-center justify-center overflow-hidden rounded-[2rem] bg-[#064e36] p-6 text-center">

                            <div
                                aria-hidden="true"
                                className="absolute -bottom-14 -right-12 size-40 rounded-full border-[20px] border-white/10"
                            />

                            <div className="relative">
                                <Text
                                    size="sm"
                                    color="white"
                                    className="font-bold uppercase tracking-[0.2em]"
                                >
                                    The JAB feeling
                                </Text>

                                <Heading
                                    as="h3"
                                    size="base"
                                    color="white"
                                    className="mt-3 text-3xl text-white uppercase leading-tight lg:text-4xl"
                                >
                                    Sip into
                                    <span className="block text-[#ffcf00]">
                                        sunshine.
                                    </span>
                                </Heading>
                            </div>
                        </div>

                        {/* Bottom Left Image */}

                        <ImageTile
                            src="/assets/about-3.jpg"
                            alt="Tropical passion fruit detail"
                            className="col-span-3 col-start-1 row-span-1 row-start-3 rounded-[2rem] bg-[#f8e4d7]"
                            imageClassName="object-cover"
                        />

                        {/* Since 1983 Panel */}

                        <div className="col-span-2 col-start-4 row-span-1 row-start-3 flex flex-col justify-center rounded-[2rem] border border-primary/10 bg-white/90 p-5 backdrop-blur-sm lg:p-6">

                            <Text
                                size="sm"
                                color="primary"
                                className="font-bold uppercase tracking-[0.15em]"
                            >
                                Since 1983
                            </Text>

                            <Heading
                                as="h3"
                                size="base"
                                className="mt-2 text-3xl uppercase leading-none lg:text-4xl"
                            >
                                A legacy
                                <span className="block text-[#c7a34f]">
                                    of flavor.
                                </span>
                            </Heading>
                        </div>

                        {/* Bottom Right Product Image */}

                        <ImageTile
                            src="/assets/about-4.jpg"
                            alt="JAB Juice bottle detail"
                            className="col-span-3 col-start-10 row-span-1 row-start-3 rounded-[2rem] bg-[#ffcf00]/40"
                            imageClassName="object-cover"
                        />
                    </div>

                    {/* =====================================
              Mobile Collage
          ===================================== */}

                    <div className="grid grid-cols-2 gap-3 md:hidden">

                        {/* Yellow Intro Panel */}

                        <div className="relative col-span-2 min-h-[250px] overflow-hidden rounded-[1.75rem] bg-[#ffcf00] p-5 sm:min-h-[300px] sm:p-7">

                            <div
                                aria-hidden="true"
                                className="absolute -right-10 -top-12 size-48 rounded-full border-[28px] border-[#064e36]/10"
                            />

                            <div className="relative z-10 max-w-[65%]">
                                <Text
                                    size="sm"
                                    color="primary"
                                    className="font-bold uppercase tracking-[0.18em]"
                                >
                                    The JAB Experience
                                </Text>

                                <Heading
                                    as="h3"
                                    size="lg"
                                    className="mt-4 text-4xl uppercase leading-[0.92] sm:text-5xl"
                                >
                                    Real flavors.
                                    <span className="block text-white">
                                        Brighter days.
                                    </span>
                                </Heading>

                                <Text
                                    size="sm"
                                    color="default"
                                    className="mt-4 max-w-[230px]"
                                >
                                    Tropical flavor and good energy for every kind of moment.
                                </Text>
                            </div>

                            {/* Bottle Image */}

                            <Image
                                src="/assets/about-3.jpg"
                                alt="JAB Juice bottle"
                                width={240}
                                height={360}
                                className="absolute -bottom-4 -right-5 h-[75%] w-[43%] object-contain"
                            />
                        </div>

                        {/* Pineapple Product Image */}

                        <ImageTile
                            src="/assets/about-4.jpg"
                            alt="JAB Juice pineapple drink"
                            priority
                            className="aspect-[4/5] rounded-[1.5rem] bg-[#f5edda]"
                            imageClassName="object-contain p-2"
                        />

                        {/* Passion Fruit Product Image */}

                        <ImageTile
                            src="/images/jab-passion-fruit.webp"
                            alt="JAB Juice passion fruit drink"
                            className="aspect-[4/5] rounded-[1.5rem] bg-[#f8e4d7]"
                            imageClassName="object-contain p-2"
                        />

                        {/* Dark Green Message Panel */}

                        <div className="relative col-span-2 flex min-h-[170px] items-center justify-between gap-4 overflow-hidden rounded-[1.5rem] bg-[#064e36] p-5 text-white sm:p-7">

                            <div className="relative z-10 max-w-[75%]">
                                <Text
                                    size="sm"
                                    color="white"
                                    className="font-bold uppercase tracking-[0.2em]"
                                >
                                    Good drinks. Good times.
                                </Text>

                                <Heading
                                    as="h3"
                                    size="base"
                                    color="white"
                                    className="mt-3 text-3xl uppercase sm:text-4xl"
                                >
                                    Bring on the
                                    <span className="block text-[#ffcf00]">
                                        good vibes.
                                    </span>
                                </Heading>
                            </div>

                            <div
                                aria-hidden="true"
                                className="absolute -bottom-20 -right-10 size-48 rounded-full border-[30px] border-white/10"
                            />
                        </div>

                        {/* Repeated Bottle Image */}

                        <ImageTile
                            src="/images/jab-bottle.webp"
                            alt="JAB Juice bottle close-up"
                            className="aspect-square rounded-[1.5rem] bg-[#ffcf00]/40"
                            imageClassName="object-contain p-3"
                        />

                        {/* Since 1983 Panel */}

                        <div className="flex aspect-square flex-col justify-center rounded-[1.5rem] border border-primary/10 bg-white/90 p-4 backdrop-blur-sm">

                            <Text
                                size="sm"
                                color="primary"
                                className="font-bold uppercase tracking-[0.15em]"
                            >
                                Est.
                            </Text>

                            <Heading
                                as="h3"
                                size="lg"
                                className="mt-1 text-5xl text-[#c7a34f] sm:text-6xl"
                            >
                                1983
                            </Heading>

                            <Text
                                size="sm"
                                color="muted"
                                className="mt-2 uppercase tracking-wider"
                            >
                                The JAB spirit
                            </Text>
                        </div>
                    </div>
                </div>

                {/* =====================================
            Bottom CTA
        ===================================== */}

                <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-[#064e36]/15 pt-8 sm:mt-14 sm:flex-row sm:items-center">

                    <div className="max-w-xl">
                        <Heading
                            as="h3"
                            size="base"
                            className="uppercase"
                        >
                            Find your kind of good.
                        </Heading>

                        <Text
                            color="muted"
                            className="mt-2"
                        >
                            Explore the JAB Juice range and discover your next favorite.
                        </Text>
                    </div>

                    <Button
                        href="/shop"
                        variant="primary"
                        size="lg"
                        className="shrink-0"
                    >
                        Explore Our Flavors
                    </Button>
                </div>
            </Container>

            {/* =====================================
          Bottom Wave Divider
          Change fill colors to match the
          section that follows.
      ===================================== */}
            <div className="absolute bottom-0 z-10 w-full">
                <div
                    aria-hidden="true"
                    className="pointer-events-none relative h-16 w-full overflow-hidden sm:h-20 lg:h-28"
                >
                    <svg
                        viewBox="0 0 1440 120"
                        preserveAspectRatio="none"
                        className="absolute inset-0 h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 35C130 80 200 105 350 75C500 45 570 5 720 45C870 85 930 110 1080 65C1230 20 1330 5 1440 0V120H0V35Z"
                            fill="#fff6c7"
                        />

                        <path
                            d="M0 65C150 105 230 115 390 85C550 55 610 35 760 75C910 115 1000 115 1150 75C1300 35 1360 25 1440 30V120H0V65Z"
                            fill="#ffcf00"
                        />
                    </svg>
                </div>
            </div>
        </Section>
    );
}