// Dependencies
import Link from 'next/link'

// Typing
interface NavbarLinkComponentProps {
    href: string;
    mb?: boolean;
    mt?: boolean;
    text: string;
}

export default function NavbarLinkComponent({ href, mb, mt, text }: NavbarLinkComponentProps) {
    return (
        <li className={`${mb ? 'mb-4' : ''} ${mt ? 'mt-4' : ''} list-disc`}>
            <Link className='font-extralight' href={href}>{text}</Link>
        </li>
    );
}
