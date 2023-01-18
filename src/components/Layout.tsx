import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Rasa-Us Art</title>
                <meta name="description" content="Rasa-Us Art" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
        </>
    )
}
