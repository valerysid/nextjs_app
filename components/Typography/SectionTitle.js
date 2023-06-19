export default function SectionTitle({ children, className }) {
    return (
        <h2 className={`text-2xl md:text-4xl font-semibold ${className}`}>
            {children}
        </h2>
    )
}