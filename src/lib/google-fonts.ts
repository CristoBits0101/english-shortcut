// Fonts
import { Dancing_Script } from 'next/font/google'
import { Figtree } from 'next/font/google'
import { Delius } from 'next/font/google'

// Settings
export const dancingScript = Dancing_Script({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const figtree = Figtree({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const delius = Delius({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400']
})
