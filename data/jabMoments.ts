export type MomentCategory = "all" | "carnival" | "beach" | "cocktails";

export interface JabMoment {
    id: number;
    type: "video" | "image";
    src: string;
    poster?: string;
    category: MomentCategory;
    tag: string;
    alt: string;
    caption: string;
    handle: string;
    likes: string;
    comments: string;
    duration?: string;
    location: string;
    date: string;
    instagramUrl: string;
    featured?: boolean;
    aspectRatio?: "portrait" | "landscape" | "square";
    gridSpan?: string;
}

export const momentCategories: { id: MomentCategory; label: string; icon: string }[] = [
    { id: "all", label: "All Moments", icon: "✨" },
    { id: "carnival", label: "Carnival & Energy", icon: "🎉" },
    { id: "beach", label: "Beach & Sunshine", icon: "🏖️" },
    { id: "cocktails", label: "Cocktails & Sips", icon: "🍹" },
];

export const jabMoments: JabMoment[] = [
    {
        id: 1,
        type: "video",
        src: "/videos/video-2.mp4",
        poster: "/gallery/gallery-1.jpg",
        category: "carnival",
        tag: "Carnival Rhythm",
        alt: "Vibrant Caribbean carnival dancer and energy with JAB",
        caption: "Unfiltered energy, pure rhythm, and ice-cold JAB Juice in hand! The carnival spirit lives here.",
        handle: "@jabjuice1983",
        likes: "248",
        comments: "18",
        duration: "0:09",
        location: "Port of Spain Carnival",
        date: "2h ago",
        instagramUrl: "https://www.instagram.com/jabjuice1983/",
        featured: true,
        aspectRatio: "portrait",
        gridSpan: "row-span-2 sm:row-span-2 lg:row-span-2 sm:col-span-1 lg:col-span-1 min-h-[440px] lg:min-h-[520px]",
    },
    {
        id: 2,
        type: "video",
        src: "/videos/video-1.mp4",
        poster: "/gallery/gallery-2.jpg",
        category: "beach",
        tag: "Island Sunset",
        alt: "Golden Caribbean horizon and beachside celebration",
        caption: "Soaking up the golden hour with friends and the boldest island refreshment. Pure paradise.",
        handle: "@island_tales",
        likes: "194",
        comments: "14",
        duration: "0:15",
        location: "Sunset Bay Beach",
        date: "5h ago",
        instagramUrl: "https://www.instagram.com/jabjuice1983/",
        aspectRatio: "landscape",
        gridSpan: "lg:col-span-2 lg:row-span-1 sm:col-span-2 min-h-[250px]",
    },
    {
        id: 3,
        type: "image",
        src: "/gallery/gallery-1.jpg",
        category: "beach",
        tag: "Golden Sips",
        alt: "Chilled tropical JAB juice bottle in the sunshine",
        caption: "Clinking chilled bottles at sunset with the best crew. Pure tropical bliss and warm golden glow.",
        handle: "@sipwithsun",
        likes: "135",
        comments: "9",
        location: "Coconut Palm Cove",
        date: "Yesterday",
        instagramUrl: "https://www.instagram.com/jabjuice1983/",
        aspectRatio: "square",
        gridSpan: "lg:col-span-1 lg:row-span-1 min-h-[250px]",
    },
    {
        id: 4,
        type: "image",
        src: "/gallery/gallery-2.jpg",
        category: "cocktails",
        tag: "Real Fruit Sips",
        alt: "Fresh tropical juice with real fruit blend and ice",
        caption: "Passion fruit + pineapple + Caribbean sunshine = the ultimate recipe for brighter days.",
        handle: "@jabjuice1983",
        likes: "162",
        comments: "12",
        location: "Tropical Harvest Kitchen",
        date: "Yesterday",
        instagramUrl: "https://www.instagram.com/jabjuice1983/",
        aspectRatio: "square",
        gridSpan: "lg:col-span-1 lg:row-span-1 min-h-[250px]",
    },
    {
        id: 5,
        type: "image",
        src: "/gallery/gallery-3.jpg",
        category: "carnival",
        tag: "Good Vibes Only",
        alt: "Celebration crowd enjoying the carnival energy",
        caption: "When the bass drops and the vibes are unmatched. Bring on the good energy! ☀️✨",
        handle: "@caribbeanvibes",
        likes: "215",
        comments: "23",
        location: "Summer Beats Festival",
        date: "2d ago",
        instagramUrl: "https://www.instagram.com/jabjuice1983/",
        aspectRatio: "square",
        gridSpan: "lg:col-span-1 lg:row-span-1 min-h-[250px]",
    },
    {
        id: 6,
        type: "video",
        src: "/videos/video-3.mp4",
        poster: "/gallery/gallery-4.jpg",
        category: "cocktails",
        tag: "Carnival Rum Mix",
        alt: "Craft tropical rum cocktail and mixology reel",
        caption: "Crafted with fresh mint, pineapple garnish, and our signature JAB Carnival Rum. The taste of the islands.",
        handle: "@jabjuice1983",
        likes: "188",
        comments: "16",
        duration: "0:14",
        location: "Cabana Lounge",
        date: "3d ago",
        instagramUrl: "https://www.instagram.com/jabjuice1983/",
        aspectRatio: "portrait",
        gridSpan: "row-span-2 sm:row-span-2 lg:row-span-2 sm:col-span-1 lg:col-span-1 min-h-[440px] lg:min-h-[520px]",
    },
    {
        id: 7,
        type: "image",
        src: "/gallery/gallery-4.jpg",
        category: "beach",
        tag: "Clear Waters",
        alt: "Cruising crystal turquoise ocean waters with cold drinks",
        caption: "Cruising the turquoise waters with an ice-cold cooler full of JAB bottles. Pure freedom.",
        handle: "@caribbeandream",
        likes: "146",
        comments: "11",
        location: "Crystal Reef",
        date: "4d ago",
        instagramUrl: "https://www.instagram.com/jabjuice1983/",
        aspectRatio: "square",
        gridSpan: "lg:col-span-1 lg:row-span-1 min-h-[250px]",
    },
    {
        id: 8,
        type: "image",
        src: "/gallery/gallery-5.jpg",
        category: "carnival",
        tag: "Island Crew",
        alt: "Friends celebrating and enjoying JAB juice",
        caption: "Sunshine, ocean breeze, and fresh cold bottles to pass around. This is island living at its best.",
        handle: "@tropical_nomad",
        likes: "172",
        comments: "15",
        location: "Maracas Bay",
        date: "5d ago",
        instagramUrl: "https://www.instagram.com/jabjuice1983/",
        aspectRatio: "landscape",
        gridSpan: "lg:col-span-2 lg:row-span-1 sm:col-span-2 min-h-[250px]",
    },
];