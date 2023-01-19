import Link from 'next/link'

export default function NavLink({
    href,
    children,
}: {
    href: string
    children: string
}) {
    return (
        <Link href={href} className="mx-1 font-bold hover:underline">
            {children}
        </Link>
    )
}
