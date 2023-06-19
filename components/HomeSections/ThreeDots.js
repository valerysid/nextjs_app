import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function ThreeDots({ activeSection }) {

    return (
			<div className="flex justify-center p-2 h-12 lg:h-16">
				<div className="flex items-center absolute">
					<NavButton
						slug={"#approach"}
						isActive={activeSection === "Approach"}
						name="Approach"
						className="bg-red"
					/>
					<NavButton
						slug={"#dataservice"}
						isActive={activeSection === "Data service"}
						name="Data services"
						className="bg-teal"
					/>
					<NavButton
						slug={"#people"}
						isActive={activeSection === "People"}
						name="People"
						className="bg-purple"
					/>
				</div>
			</div>
		);
}

function NavButton({ name, className, isActive, slug }) {

    const [active, setActive] = useState(isActive)

    return (
			<div
				className={`${
					active ? "px-4 py-2 opacity-100" : "p-2"
				}  mx-1  min-w-[20px] min-h-[20px] flex items-center justify-center rounded-full ${className}`}
			>
				{active && (
					<motion.span
						initial={{
							display: "none",
							opacity: 0,
						}}
						animate={{
							display: "block",
							opacity: 1,
						}}
						exit={{
							display: "none",
							opacity: 0,
						}}
						transition={{
							duration: 0.2,
						}}
						className="hidden transition-all group-hover:block"
					>
						{name}
					</motion.span>
				)}
			</div>
		);
}