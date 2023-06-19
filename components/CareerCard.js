import Button from "./Button"
import Link from "next/link"

export default function CareerCards({ career }) {
    return (
			<div className="rounded-xl border mb-4 border-border-color-dark bg-gradient-to-tl from-[#300238] to-[#5B3562] p-6 lg:p-8">
				<Link href={`/career/${career.slug.current}`}>
					<a>
						<h3 className="text-2xl lg:text-4xl font-medium">{career.title}</h3>
					</a>
				</Link>
				<p className="text-sm lg:text-lg mt-2 font-circular">
					{career.korte_samenvatting}
				</p>
				<div className="flex justify-between items-center mt-8">
					<div className="font-circular pr-2">
						<h3 className="text-xs lg:text-lg">{career.duration}</h3>
						<aside className="text-xs lg:text-lg text-grey ">
							{career.location}
						</aside>
					</div>
					<Button href={`/career/${career.slug.current}`} color={"teal"}>
						Read more
					</Button>
				</div>
			</div>
		);
}