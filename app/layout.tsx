import Navbar from '@/components/Navbar/Navbar'
import Box from '@/components/Box'

import '@/globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="h-screen dark:bg-gray-900 dark:text-white">
                <Navbar />
                <Box>{children}</Box>
            </body>
        </html>
    )
}
