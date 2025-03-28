import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className='w-full h-full bg-red-500'>{children}</main>
  );
}
