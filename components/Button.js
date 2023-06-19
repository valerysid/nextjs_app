import Link from "next/link";

export default function Button({
	href,
	className = null,
	children,
	color = null,
	size = null,
}) {
	return (
		<Link href={href}>
			<a className={`group relative inline-block cursor-pointer  ${className}`}>
				<div
					className={`rounded-full whitespace-nowrap group-hover:scale-90 font-medium transition-all 
            ${size === null && "px-4 py-2 lg:px-8 lg:py-4 text-sm lg:text-base"}
            ${size === "small" && "px-4 py-2 text-base"}
            ${size === "large" && "px-14 py-6 text-2xl"}
            ${color === "purple" && "bg-purple text-white"}
            ${color === "red" && "bg-red text-white"}
            ${color === "green" && "bg-green text-white"}
            ${color === "teal" && "bg-teal text-white"}
            ${color === "white" && "bg-white text-black"}
            ${color === "yellow" && "bg-yellow text-black"}
            ${
							color === "grey" &&
							"bg-none border-white border-opacity-30 border group-hover:border-white"
						}
            ${
							color === null &&
							"bg-none border-white border-opacity-30 border group-hover:border-white"
						}
            `}
				>
					<span className="block transition-all group-hover:scale-110">
						{children}
					</span>
				</div>
			</a>
		</Link>
	);
}
