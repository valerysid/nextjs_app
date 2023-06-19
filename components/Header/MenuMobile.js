
import { motion, useCycle } from "framer-motion";
import NavItem from "./NavItem";
import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle } from "./MenuToggle";
import { useRef, useEffect } from "react";
import Star from "../Star";
import LanguageToggle from "../LanguageToggle";
import Link from "next/link";

export default function MenuMobile() {
	const menuItems = [
		{
			label: "Cases",
			url: "/post?filter=cases",
		},
		{
			label: "Blog",
			url: "/post?filter=blog",
		},
		{
			label: "Career",
			url: "/career",
		},
		{
			label: "Clients and partners",
			url: "/clients-and-partners",
		},
		{
			label: "Contact",
			url: "/contact",
		},
	];

	const variants = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	};

	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	useEffect(() => {
		if (typeof window !== undefined) {
			if (isOpen) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "unset";
			}
		}
	}, [isOpen]);

	function closeMenu() {
		toggleOpen();
	}

	const sidebar = {
		open: (height = 1000) => ({
			clipPath: `circle(${500 * 2 + 200}px at 94% 34px)`,
			display: "block",
			transition: {
				type: "spring",
				stiffness: 20,
				restDelta: 2,
			},
		}),
		closed: {
			clipPath: "circle(24px at 94% 34px)",
			display: "none",
			transition: {
				delay: 0,
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
	};

	return (
		<motion.div
			animate={isOpen ? "open" : "closed"}
			className="block md:hidden "
		>
			<div className="relative z-50 -translate-y-4">
				<MenuToggle toggle={() => toggleOpen()} />
			</div>

			<motion.nav
				className="z-40 fixed flex flex-col justify-between inset-0 w-full min-h-screen bg-black p-4"
				initial={false}
				custom={height}
				ref={containerRef}
				variants={sidebar}
			>
				<div className="w-1/3">
					<Link href={"/"}>
						<a onClick={() => closeMenu()}>
							<Star />
						</a>
					</Link>
				</div>
				<motion.ul variants={variants} className="text-center mt-32">
					{menuItems.map((item, index) => (
						<NavItem
							closeMenu={closeMenu}
							item={item}
							i={index}
							key={"menuItem" + index}
						/>
					))}
					<li>
						<div className="absolute left-4 top-[90vh] z-50 border bg-medium-grey rounded-full border-border-color-light p-2">
							<LanguageToggle />
						</div>
					</li>
				</motion.ul>
			</motion.nav>
		</motion.div>
	);
}
