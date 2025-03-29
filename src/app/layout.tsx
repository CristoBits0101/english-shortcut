// Components
import HeaderLayout from "@/layouts/header";
import MainLayout from "@/layouts/main";

// Fonts
import { figtree } from "@/lib/google-fonts";

// Styles
import "@/styles/globals.css";

// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Shortcut",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`${figtree.className} antialiased w-full h-full`}
      >
        <div className="w-3/4 h-full mx-auto p-4 grid grid-cols-[25%_75%]">
          <HeaderLayout />
          <MainLayout>
            {children}
          </MainLayout>
        </div>
      </body>
    </html>
  );
}