// Dependencies
import Link from 'next/link'
import React from 'react'

// Props interface
interface NavbarItemComponentProps {
    href: string;
    text: string;
}

export default function NavbarItemComponent({ text, href }: NavbarItemComponentProps) {
    return (
        <li>
            <Link href={href}>{text}</Link>
        </li>
    );
}
