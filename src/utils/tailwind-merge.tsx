import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// This function merges class names and removes duplicates
// It uses tailwind-merge to handle Tailwind CSS classes and clsx for conditional class names
export function cn(...inputs: Parameters<typeof clsx>) {
    return twMerge(clsx(inputs));
}