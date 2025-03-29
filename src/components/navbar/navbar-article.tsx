// Dependencies
import { ReactNode } from 'react';

// Fonts
import { delius } from "@/lib/google-fonts";

// Typing
interface NavbarArticleComponentProps {
    children: ReactNode;
    title: string;
}

export default function NavbarArticleComponent({ children, title }: NavbarArticleComponentProps) {
    return (
        <article className='flex flex-col gap-8'>
            <h2 className={`font-medium uppercase ${delius.className}`}>{title}</h2>
            {children}
        </article >
    )
}
