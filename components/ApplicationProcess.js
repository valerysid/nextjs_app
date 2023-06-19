export default function EducationProcess({ siteSettings }) {
	return (
		<>
			<h2 className="text-4xl mt-8 mb-4 text-center">Application process</h2>

			{siteSettings.steps.map((step, index) => (
				<Step
					key={step.title + index}
					showLine={siteSettings.steps.length - 1 !== index}
					step={index + 1}
					title={step.title}
					content={step.content}
				/>
			))}
		</>
	);
}

export function Step({ step, content, showLine, title }) {
	return (
		<div className="p-4 mb-4 border border-border-color-dark relative md:p-6 flex bg-gradient-to-tl from-[#300238] to-[#5B3562] rounded-2xl  ">
			<div className="relative z-20">
				<h3
					className={`my-8 text-2xl  font-trap md:my-0 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-center`}
				>
					<span className="translate-y-[2px]"> {step}</span>
				</h3>
			</div>
			<div className="pl-4 ">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-lg">{content}</p>
			</div>
			{showLine && (
				<svg
					className="absolute z-10 left-12 top-12 -translate-x-1/2"
					xmlns="http://www.w3.org/2000/svg"
					width="3"
					height="193"
					viewBox="0 0 3 193"
				>
					<line
						y2="190"
						transform="translate(1.5 1.5)"
						fill="none"
						stroke="#b587be"
						strokeLinecap="round"
						strokeWidth="3"
						strokeDasharray="2 5"
					/>
				</svg>
			)}
		</div>
	);
}
