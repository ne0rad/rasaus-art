export default function TitleText({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1 className="text-center font-bold text-4xl my-3">{children}</h1>
        </>
    )
}
