import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TextProps {
    children: ReactNode;
    className?: string;

    as?: "p" | "span" | "strong";

    size?: "lg" | "default" | "sm";

    color?: "default" | "muted" | "heading" | "white" | "primary" | "accent";

    align?: "left" | "center" | "right";
}

export default function Text({
    children,
    className,
    as: Component = "p",
    size = "default",
    color = "default",
    align = "left",
}: TextProps) {
    return (
        <Component
            className={cn(
                // Base styles
                "font-body leading-relaxed",

                // Text sizes
                size === "lg" && "text-lg md:text-xl",

                size === "default" && "text-sm md:text-base",

                size === "sm" && "text-xs md:text-sm",

                // Text colors
                color === "default" && "text-text",

                color === "muted" && "text-text-muted",

                color === "heading" && "text-heading",

                color === "white" && "text-white",

                color === "primary" && "text-primary",

                color === "accent" && "text-accent",

                // Text alignment
                align === "left" && "text-left",

                align === "center" && "text-center",

                align === "right" && "text-right",

                // Custom styles
                className
            )}
        >
            {children}
        </Component>
    );
}