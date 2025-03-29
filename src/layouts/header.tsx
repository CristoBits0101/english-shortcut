// Components
import NavbarLink from '@/components/navbar/navbar-link'
import NavbarMenu from '@/components/navbar/navbar-menu'

// Dependencies
import React from 'react'

// Fonts
import { dancingScript } from "@/lib/google-fonts";

export default function HeaderLayout() {
    return (
        <header className='h-full p-4 flex flex-col gap-8 bg-blue-500'>
            {/* Title */}
            <h1 className={`${dancingScript.className} text-4xl font-medium`}>
                English Shortcut
            </h1>
            {/* Navigation */}
            <div className='flex flex-col gap-4'>
                <h2 className='font-medium uppercase'>Fonética</h2>
                <NavbarMenu>
                    <>
                        <NavbarLink href='' mt={false} text='Alfabeto fonético' />
                    </>
                </NavbarMenu>
                <h2 className='font-medium uppercase'>Vocabulario</h2>
                <NavbarMenu>
                    <>
                        <NavbarLink href='' mt={false} text='Alfabeto fonético' />
                    </>
                </NavbarMenu>
                <h2 className='font-medium uppercase'>Tiempos Verbales</h2>
                <details className='pl-4'>
                    <summary>Presente</summary>
                    <NavbarMenu>
                        <>
                            <NavbarLink href='' mt text='Afirmativo' />
                            <NavbarLink href='' mt={false} text='Negativo' />
                            <NavbarLink href='' mt={false} text='Interrogativo' />
                        </>
                    </NavbarMenu>
                </details>
                <details className='pl-4'>
                    <summary>Pasado</summary>
                    <NavbarMenu>
                        <>
                            <NavbarLink href='' mt text='Afirmativo' />
                            <NavbarLink href='' mt={false} text='Negativo' />
                            <NavbarLink href='' mt={false} text='Interrogativo' />
                        </>
                    </NavbarMenu>
                </details>
                <details className='pl-4'>
                    <summary>Futuro</summary>
                    <NavbarMenu>
                        <>
                            <NavbarLink href='' mt text='Afirmativo' />
                            <NavbarLink href='' mt={false} text='Negativo' />
                            <NavbarLink href='' mt={false} text='Interrogativo' />
                        </>
                    </NavbarMenu>
                </details>
            </div>
        </header>
    )
}
