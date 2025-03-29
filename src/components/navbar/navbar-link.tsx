// Dependencies
import Link from 'next/link'
import React from 'react'

// Typing
interface NavbarLinkComponentProps {
    href: string;
    text: string;
}

export default function NavbarLinkComponent({ text, href }: NavbarLinkComponentProps) {
    return (
        <li>
            <Link href={href}>{text}</Link>
        </li>
    );
}
