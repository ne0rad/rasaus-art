import Navbar from '@/components/Navbar/Navbar'

import '@/globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head />
            <body className="dark:bg-gray-900 dark:text-white">
                <Navbar />
                {children}
            </body>
        </html>
    )
}
