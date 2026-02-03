import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    // Base styles
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary:
                    "bg-stone text-cream-100 hover:bg-stone/90 focus-visible:ring-stone",
                secondary:
                    "border border-stone/20 bg-transparent text-stone hover:bg-stone/5 focus-visible:ring-stone/50",
                ghost:
                    "text-stone hover:bg-stone/5 focus-visible:ring-stone/50",
                link:
                    "text-stone underline-offset-4 hover:underline focus-visible:ring-stone/50",
                outline:
                    "border-2 border-stone text-stone hover:bg-stone hover:text-cream-100 focus-visible:ring-stone",
            },
            size: {
                sm: "h-9 px-4 text-sm rounded-sm",
                default: "h-11 px-6 text-sm rounded",
                lg: "h-12 px-8 text-base rounded",
                xl: "h-14 px-10 text-base rounded-md",
                icon: "h-10 w-10 rounded-full",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
