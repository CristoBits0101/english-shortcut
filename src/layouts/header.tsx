// Components
import Navbar from '@/components/navbar/navbar-menu'

// Dependencies
import React from 'react'

// Fonts
import { dancingScript } from "@/lib/google-fonts";

export default function HeaderLayout() {
    return (
        <header className='h-full p-4 flex flex-col gap-8 bg-blue-500'>
            <h1 className={`${dancingScript.className} text-4xl font-medium`}>
                English Shortcut
            </h1>
            <div className='flex flex-col gap-4'>
                <h2 className='font-medium uppercase'>Fonética</h2>
                <Navbar>
                    <>
                    </>
                </Navbar>
                <h2 className='font-medium uppercase'>Vocabulario</h2>
                <Navbar>
                    <>
                    </>
                </Navbar>
                <h2 className='font-medium uppercase'>Tiempos Verbales</h2>
                <Navbar>
                    <>
                    </>
                </Navbar>
            </div>
        </header>
    )
}
