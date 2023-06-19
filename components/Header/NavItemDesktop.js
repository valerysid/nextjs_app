import Link from "next/link";

export default function NavItemDesktop({ item }) {
    return (
        <li className="ml-8">
            <Link href={item.url}>
                <a className="font-medium relative group text-lg font-trap">
                    {item.label}
                    <div className="absolute transition-all scale-x-0 origin-bottom-left group-hover:scale-x-100 h-[1px] bg-white bottom-0 left-0 right-0" />
                </a>
            </Link>
        </li>
    )
}