// Dependencies
import React from 'react'
import { ReactNode } from 'react';

export default function NavbarComponent({ children }: { children: ReactNode }) {
    return (
        <nav className='w-full h-fit pl-12'>
            <ul className='w-full h-fit flex flex-col gap-2'>
                {children}
            </ul>
        </nav>
    )
}
