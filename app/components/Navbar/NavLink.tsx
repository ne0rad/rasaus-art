type NavLinkType = {
    href: string
    children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkType) {
    return (
        <a href={href} className="mx-1 font-bold hover:underline">
            {children}
        </a>
    )
}
