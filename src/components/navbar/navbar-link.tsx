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
        <li className={`list-disc ${mt ? 'mt-4' : ''}`}>
            <Link className='font-light' href={href}>{text}</Link>
        </li>
    );
}
