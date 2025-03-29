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
            <summary>{subtitle}</summary>
            {children}
        </details>
    )
}
