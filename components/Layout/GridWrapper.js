export default function GridWrapper({ className, children }) {
    return (
        <section className={`px-4 overflow-x-hidden relative py-8 md:py-8 xl:px-8 2xl:px-36  ${className}`}>
            {children}
        </section>
    )
}