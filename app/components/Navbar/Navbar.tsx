import Link from 'next/link'
import NavLink from '@/components/Navbar/NavLink'

export default function Navbar() {
    return (
        <>
            <div className="flex flex-row justify-between content-center min-w-full p-3 bg-gray-700 text-white shadow-lg fixed">
                <Link href="/" className="font-bold text-lg">
                    RasaUs/ArtTherapy
                </Link>
                <div>
                    <NavLink href="#about">Apie Mane</NavLink>
                    <NavLink href="#services">Paslaugos</NavLink>
                </div>
            </div>
        </>
    )
}
