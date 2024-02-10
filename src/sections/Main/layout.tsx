export default function Main({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
return (
    <>
        <main>
            {children}
        </main>
    </> 
)
}