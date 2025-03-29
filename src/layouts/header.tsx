// Components
import Navbar from '@/components/navbar'

// Dependencies
import React from 'react'

export default function HeaderLayout() {
    return (
        <header className='h-full bg-blue-500'>
            <h1>Header</h1>
            <Navbar></Navbar>
        </header>
    )
}
