import Link from 'next/link'
import NavLink from './NavLink'

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between content-center min-w-full p-3 bg-gray-700 text-white shadow-lg mb-3 fixed">
            <Link href="/" className="font-bold text-lg">
                RasaUs/ArtTherapy
            </Link>
            <div>
                <NavLink href="/paslaugos">Paslaugos</NavLink>
                <NavLink href="/kontaktai">Kontaktai</NavLink>
            </div>
        </div>
    )
}
