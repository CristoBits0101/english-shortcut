// Components
import NavbarArticle from '@/components/navbar/navbar-article'
import NavbarLink from '@/components/navbar/navbar-link'

// Dependencies
import React from 'react'

// Fonts
import { dancingScript } from "@/lib/google-fonts";

export default function HeaderLayout() {
    return (
        <header className='h-full p-4 flex flex-col gap-8'>
            {/* Title */}
            <h1 className={`${dancingScript.className} text-4xl font-medium`}>
                English Shortcut
            </h1>
            {/* Navigation */}
            <section className='flex flex-col gap-4'>
                <NavbarArticle title='Fonética'>
                    <NavbarLink href='' mt={false} text='Alfabeto' />
                </NavbarArticle>
                <NavbarArticle title='Vocabulario'>
                    <NavbarLink href='' mt={false} text='Adjetivos' />
                    <NavbarLink href='' mt={false} text='Adverbios' />
                    <NavbarLink href='' mt={false} text='Determinantes' />
                    <NavbarLink href='' mt={false} text='Preposiciones' />
                    <NavbarLink href='' mt={false} text='Sustantivos' />
                    <NavbarLink href='' mt={false} text='Verbos' />
                </NavbarArticle>
                <NavbarArticle title='Tiempos verbales'>
                    <NavbarLink href='' mt={false} text='Presente' />
                    <NavbarLink href='' mt={false} text='Pasado' />
                    <NavbarLink href='' mt={false} text='Futuro' />
                </NavbarArticle>
            </section>
        </header>
    )
}
