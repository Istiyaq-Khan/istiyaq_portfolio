import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export default function Card({
    className,
    children,
    hoverEffect = false,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                'rounded-xl border border-border bg-card-bg p-6 text-foreground shadow-sm transition-all duration-300',
                hoverEffect && 'hover:border-primary/50 hover:shadow-lg hover:-translate-y-1',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
