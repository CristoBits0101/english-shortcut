// Dependencies
import React from 'react'
import { ReactNode } from 'react';

export default function NavbarComponent({ children }: { children: ReactNode }) {
    return (
        <nav className='w-full h-fit'>
            <ul className='w-full h-fit'>
                {children}
            </ul>
        </nav>
    )
}
