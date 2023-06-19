import { motion } from "framer-motion";
import Link from "next/link";

export default function NavItem({ i, item, closeMenu }) {

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    return (
        <motion.li
            variants={variants}
            className="mt-8"
        >
            <Link href={item.url}>
                <a onClick={() => closeMenu()} className="text-4xl font-medium">
                    {item.label}
                </a>
            </Link>
        </motion.li>
    )
}