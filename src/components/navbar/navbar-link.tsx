// Dependencies
import Link from 'next/link'
import React from 'react'

// Typing
interface NavbarLinkComponentProps {
    href: string;
    mt: boolean;
    text: string;
}

export default function NavbarLinkComponent({ href, mt, text }: NavbarLinkComponentProps) {
    return (
        <li className={`${mt ? 'mt-4' : ''} list-disc`}>
            <Link className='font-light text-amber-500' href={href}>{text}</Link>
        </li>
    );
}
