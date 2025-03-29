// Dependencies
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className='h-full'>{children}</main>
  );
}
