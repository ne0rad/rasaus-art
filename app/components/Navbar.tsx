import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between content-center min-w-full p-3 bg-blue-500 text-white shadow-lg mb-3">
            <Link href="/" className='font-bold text-lg'>RasaUs Meno Terapija</Link>
            <div>
                <Link href="/paslaugos" className='mx-1'>Paslaugos</Link>
                <Link href="/kotaktai" className='mx-1'>Kontaktai</Link>
            </div>
        </div>
    )
}
