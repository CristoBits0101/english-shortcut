// Dependencies
import { ReactNode } from 'react';

// Typing
interface NavbarDetailsComponentProps {
    children: ReactNode;
    subtitle: string;
}

export default function NavbarDetailsComponent({ children, subtitle }: NavbarDetailsComponentProps) {
    return (
        <details className='w-full'>
            <summary className='w-full ml-4 font-light'>{subtitle}</summary>
            {children}
        </details>
    )
}
