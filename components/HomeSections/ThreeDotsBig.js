import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function ThreeDotsBig({ activeSection }) {
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
	const [active, setActive] = useState(isActive);

	return (
		<div
			// onMouseEnter={() => setActive(true)}
			// onMouseLeave={() => setActive(isActive)}
			className={`text-xs lg:text-sm transition-all mx-1 px-4 py-2 rounded-full ${className} ${
				!active ? "scale-100" : "scale-105"
			}`}
		>
			<div className={`transition-all ${active ? "scale-95" : "scale-100"}`}>
				{name}
			</div>
		</div>
	);
}