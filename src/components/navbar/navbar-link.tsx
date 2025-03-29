// Dependencies
import Link from 'next/link'

// Typing
interface NavbarLinkComponentProps {
    href: string;
    mt: boolean;
    text: string;
}

export default function NavbarLinkComponent({ href, mt, text }: NavbarLinkComponentProps) {
    return (
        <li className={`${mt ? 'mt-4' : ''} list-disc`}>
            <Link className='font-light' href={href}>{text}</Link>
        </li>
    );
}
