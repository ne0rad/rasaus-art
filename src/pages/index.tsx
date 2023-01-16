import Head from 'next/head'

export default function Home() {
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
            <main>
                <h1 className="text-red-600">Hello world!!</h1>
            </main>
        </>
    )
}
