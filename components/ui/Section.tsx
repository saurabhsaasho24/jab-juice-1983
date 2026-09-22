import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;

    background?: "default" | "muted" | "primary";

    spacing?: boolean;
}

export default function Section({
    children,
    className,
    id,
    background = "default",
    spacing = true,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                // Backgrounds
                background === "default" && "bg-background",
                background === "muted" && "bg-background-muted",
                background === "primary" && "bg-primary text-white",

                // Responsive spacing
                spacing
                    ? "py-12 sm:py-16 lg:py-20 xl:py-24"
                    : "py-0",

                // Base styles
                "relative overflow-hidden",

                className
            )}
        >
            {children}
        </section>
    );
}