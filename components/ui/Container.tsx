import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: "fluid" | "full";
}

export default function Container({
    children,
    className,
    size = "fluid",
}: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10",

                // Container sizes
                size === "fluid" && "max-w-[90rem]",
                size === "full" && "max-w-none",

                className
            )}
        >
            {children}
        </div>
    );
}