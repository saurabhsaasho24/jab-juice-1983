"use client";

import {
    forwardRef,
    useId,
    type InputHTMLAttributes,
    type SelectHTMLAttributes,
    type TextareaHTMLAttributes,
    type ReactNode,
    type Ref,
} from "react";

import { cn } from "@/lib/utils";

// ========================================
// TYPES
// ========================================

type Option = {
    label: string;
    value: string;
};

type BaseProps = {
    label?: string;
    helperText?: string;
    error?: string;
    required?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    id?: string;
};

type InputProps = BaseProps &
    InputHTMLAttributes<HTMLInputElement> & {
        as?: "input";
    };

type TextareaProps = BaseProps &
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
        as: "textarea";
    };

type SelectProps = BaseProps &
    SelectHTMLAttributes<HTMLSelectElement> & {
        as: "select";
        options: Option[];
    };

export type FormFieldProps = InputProps | TextareaProps | SelectProps;

// ========================================
// BASE STYLES
// ========================================

const baseClasses = cn(
    "w-full rounded-xl border",
    "border-border bg-white",
    "px-4 py-3 text-sm sm:px-5 sm:text-base",
    "font-body text-text",
    "placeholder:text-text-muted/70",
    "outline-none transition-all duration-300",

    // Hover
    "hover:border-primary/50",

    // Focus
    "focus:border-primary",
    "focus:ring-4 focus:ring-primary/15",

    // Disabled
    "disabled:cursor-not-allowed",
    "disabled:bg-background-muted disabled:opacity-60"
);

// ========================================
// FORM FIELD
// ========================================

const FormField = forwardRef<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
    FormFieldProps
>((props, ref) => {
    const generatedId = useId();

    const {
        label,
        helperText,
        error,
        required,
        leftIcon,
        rightIcon,
        className,
        id = generatedId,
    } = props;

    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;

    const describedBy = error
        ? errorId
        : helperText
            ? helperId
            : undefined;

    const fieldClasses = cn(
        baseClasses,

        // Icon spacing
        leftIcon && "pl-11 sm:pl-12",
        rightIcon && "pr-11 sm:pr-12",

        // Textarea
        props.as === "textarea" &&
        "min-h-36 resize-y py-4 sm:min-h-44",

        // Select
        props.as === "select" && "appearance-none",

        // Error
        error &&
        "border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500/15",

        className
    );

    return (
        <div className="space-y-2">
            {/* Label */}
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-semibold text-heading"
                >
                    {label}

                    {required && (
                        <span
                            className="ml-1 text-primary"
                            aria-hidden="true"
                        >
                            *
                        </span>
                    )}
                </label>
            )}

            {/* Field wrapper */}
            <div className="relative">
                {/* Left icon */}
                {leftIcon && (
                    <span
                        className={cn(
                            "pointer-events-none absolute left-4 z-10",
                            "text-primary",

                            props.as === "textarea"
                                ? "top-4"
                                : "top-1/2 -translate-y-1/2"
                        )}
                        aria-hidden="true"
                    >
                        {leftIcon}
                    </span>
                )}

                {/* Textarea */}
                {props.as === "textarea" ? (
                    <textarea
                        {...props}
                        id={id}
                        ref={ref as Ref<HTMLTextAreaElement>}
                        required={required}
                        aria-invalid={!!error}
                        aria-describedby={describedBy}
                        className={fieldClasses}
                    />
                ) : props.as === "select" ? (
                    /* Select */
                    <>
                        <select
                            {...props}
                            id={id}
                            ref={ref as Ref<HTMLSelectElement>}
                            required={required}
                            aria-invalid={!!error}
                            aria-describedby={describedBy}
                            className={fieldClasses}
                        >
                            {props.options.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>

                        {/* Select arrow */}
                        <span
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary"
                            aria-hidden="true"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </span>
                    </>
                ) : (
                    /* Input */
                    <input
                        {...props}
                        id={id}
                        ref={ref as Ref<HTMLInputElement>}
                        required={required}
                        aria-invalid={!!error}
                        aria-describedby={describedBy}
                        className={fieldClasses}
                    />
                )}

                {/* Right icon */}
                {rightIcon && (
                    <span
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary"
                        aria-hidden="true"
                    >
                        {rightIcon}
                    </span>
                )}
            </div>

            {/* Helper text */}
            {helperText && !error && (
                <p
                    id={helperId}
                    className="text-sm leading-relaxed text-text-muted"
                >
                    {helperText}
                </p>
            )}

            {/* Error message */}
            {error && (
                <p
                    id={errorId}
                    role="alert"
                    className="text-sm font-medium text-red-600"
                >
                    {error}
                </p>
            )}
        </div>
    );
});

FormField.displayName = "FormField";

export default FormField;