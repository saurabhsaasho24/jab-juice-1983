import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface HeadingProps {
    children: ReactNode;
    className?: string;

    as?: ElementType;

    size?: "xl" | "lg" | "base" | "md" | "sm";

    align?: "left" | "center" | "right";

    color?: "default" | "white" | "primary" | "accent";
}

export default function Heading({
    children,
    className,
    as: Component = "h2",
    size = "lg",
    align = "left",
    color = "default",
}: HeadingProps) {
    return (
        <Component
            className={cn(
                // Base styles
                "font-heading font-extrabold tracking-tight",
                "leading-[1.05]",

                // Heading sizes
                size === "xl" &&
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",

                size === "lg" &&
                "text-3xl sm:text-4xl md:text-5xl",

                size === "base" &&
                "text-2xl sm:text-3xl md:text-4xl",

                size === "md" &&
                "text-xl sm:text-2xl md:text-3xl",

                size === "sm" &&
                "text-lg sm:text-xl md:text-2xl",

                // Text alignment
                align === "left" && "text-left",
                align === "center" && "text-center",
                align === "right" && "text-right",

                // Brand colors
                color === "default" && "text-heading",
                color === "white" && "text-white",
                color === "primary" && "text-primary",
                color === "accent" && "text-accent",

                // Custom styles
                className
            )}
        >
            {children}
        </Component>
    );
}