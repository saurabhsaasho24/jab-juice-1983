import Link from "next/link";
import type {
    ButtonHTMLAttributes,
    ReactNode,
    AnchorHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;

    variant?: "primary" | "secondary";

    size?: "base" | "lg";

    href?: string;

    target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
}

export default function Button({
    children,
    className,
    variant = "primary",
    size = "base",
    href,
    target,
    disabled,
    ...props
}: ButtonProps) {
    const classes = cn(
        // Base styles
        "group relative isolate inline-flex items-center justify-center",
        "overflow-hidden rounded-full font-bold uppercase tracking-wide",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-4",
        "focus-visible:ring-primary/30",
        "active:scale-[0.97]",

        // Sizes
        size === "base" && "h-12 px-7 text-sm",
        size === "lg" && "h-14 px-9 text-base",

        // Primary variant
        variant === "primary" && [
            "border-2 border-primary",
            "bg-primary text-accent",
            "hover:border-accent hover:text-primary",
            "shadow-md shadow-primary/15",
        ],

        // Secondary variant
        variant === "secondary" && [
            "border-2 border-accent",
            "bg-accent text-primary",
            "hover:border-primary hover:text-accent",
            "shadow-md shadow-accent/20",
        ],

        // Disabled state
        disabled && "pointer-events-none cursor-not-allowed opacity-50",

        className
    );

    const content = (
        <>
            {/* Background hover animation */}
            <span
                className={cn(
                    "absolute inset-0 -z-10",
                    "origin-left scale-x-0",
                    "transition-transform duration-500 ease-out",
                    "group-hover:scale-x-100",

                    variant === "primary" && "bg-accent",

                    variant === "secondary" && "bg-primary"
                )}
            />

            {/* Shine animation */}
            <span
                className={cn(
                    "pointer-events-none absolute inset-y-0 -left-1/2 z-0",
                    "w-1/3 skew-x-[-25deg]",
                    "transition-all duration-700 ease-out",
                    "group-hover:left-[130%]",

                    variant === "primary" && "bg-white/20",

                    variant === "secondary" && "bg-white/30"
                )}
            />

            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-3">
                <span>{children}</span>

                {/* Arrow */}
                <svg
                    className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                </svg>
            </span>
        </>
    );

    // Link button
    if (href) {
        return (
            <Link
                href={href}
                target={target}
                className={classes}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : undefined}
            >
                {content}
            </Link>
        );
    }

    // Regular button
    return (
        <button
            className={classes}
            disabled={disabled}
            {...props}
        >
            {content}
        </button>
    );
}