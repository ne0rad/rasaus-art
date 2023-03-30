export default function ParagraphText({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <p className="text-center">{children}</p>
        </>
    )
}
