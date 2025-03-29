// Components
import Navbar from '@/components/navbar'

// Dependencies
import React from 'react'

export default function HeaderLayout() {
    return (
        <header className='h-full p-4 flex flex-col gap-4 bg-blue-500'>
            <h1 className='text-2xl font-medium'>English Shortcut</h1>
            <Navbar />
        </header>
    )
}
