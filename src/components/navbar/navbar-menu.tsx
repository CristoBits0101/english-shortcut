// Dependencies
import { ReactNode } from 'react';

export default function NavbarMenuComponent({ children }: { children: ReactNode }) {
    return (
        <nav className='w-full h-fit pl-14'>
            <ul className='w-full h-fit flex flex-col gap-2'>
                {children}
            </ul>
        </nav>
    )
}
