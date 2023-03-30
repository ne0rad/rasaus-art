type Props = {
    children: React.ReactNode
    id: string
}

export default function Slide({ children, id }: Props) {
    return (
        <div
            id={id}
            className="flex flex-col items-center justify-center h-full w-full snap-start pt-16 px-2"
        >
            {children}
        </div>
    )
}
