// Components
import NavbarMenu from '@/components/navbar/navbar-menu'

// Dependencies
import { ReactNode } from 'react';

interface NavbarArticleComponentProps {
    children: ReactNode;
    title: string;
}

export default function NavbarArticleComponent({ children, title }: NavbarArticleComponentProps) {
    return (
        <article className='flex flex-col gap-4'>
            <h2 className='font-medium uppercase'>{title}</h2>
            <NavbarMenu>
                {children}
            </NavbarMenu>
        </article>
    )
}
