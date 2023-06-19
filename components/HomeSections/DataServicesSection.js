
import TextSection from '../TextSection'
import Curve from '../Layout/Curve';
import GridWrapper from '../Layout/GridWrapper'
import { useState, useEffect, useRef } from 'react';
import NavContentThree from './NavContentThree';
import { LogoGrid } from '../../pages/clients-and-partners'
import { useScroll } from 'framer-motion'
import { motion, AnimatePresence } from "framer-motion";

export default function DataServicesSection({
	siteSettings,
	activeSection,
	partners,
	setActiveSection,
	goToBoxRef,
	goToNavMode,
}) {
	const [sections, setSections] = useState();
	const [sections2, setSections2] = useState();

	useEffect(() => {
		setSections([
			{
				title: siteSettings.services_slide_1_title,
				content: siteSettings.services_slide_1_text,
			},
			{
				title: siteSettings.services_slide_2_title,
				content: siteSettings.services_slide_2_text,
			},
			{
				title: siteSettings.services_slide_3_title,
				content: siteSettings.services_slide_3_text,
			},
			{
				title: siteSettings.services_slide_4_title,
				content: siteSettings.services_slide_4_text,
			},
			{
				title: siteSettings.services_slide_5_title,
				content: siteSettings.services_slide_5_text,
			},
		]);
	}, [siteSettings]);

	useEffect(() => {
		setSections2([
			{
				title: siteSettings.services_accordion_1_title,
				content: siteSettings.services_accordion_1_text,
			},
			{
				title: siteSettings.services_accordion_2_title,
				content: siteSettings.services_accordion_2_text,
			},
			{
				title: siteSettings.services_accordion_3_title,
				content: siteSettings.services_accordion_3_text,
			},
			{
				title: siteSettings.services_accordion_4_title,
				content: siteSettings.services_accordion_4_text,
			},
			{
				title: siteSettings.services_accordion_5_title,
				content: siteSettings.services_accordion_5_text,
			},
		]);
	}, [siteSettings]);

	const [activeSection1, setActiveSection1] = useState(null);
	const [activeSection2, setActiveSection2] = useState(null);

	function handleClick(index) {
		if (activeSection1 === index) {
			setActiveSection1(null);
		} else {
			setActiveSection1(index);
		}
	}

	function handleClick2(index) {
		if (activeSection2 === index) {
			setActiveSection2(null);
		} else {
			setActiveSection2(index);
		}
	}

	const contentRef = useRef();
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 0.2", "end"],
	});

	useEffect(() => {
		return scrollYProgress.onChange((latest) => {
			if (latest > 0.92) {
				if (activeSection === "Data service") setActiveSection(null);
			} else if (latest > 0) {
				setActiveSection("Data service");
				goToBoxRef(contentRef);
			} else {
				if (activeSection === "Data service") setActiveSection(null);
			}
		});
	}, [
		goToBoxRef,
		activeSection,
		goToNavMode,
		scrollYProgress,
		setActiveSection,
	]);

	return (
		<>
			<section ref={ref} className={`z-10 pb-36 relative w-full bg-black`}>
				<div className="opacity-50 absolute radialGreen w-full left-0 right-0 bottom-0 top-[30%]" />
				<div className="opacity-100 absolute bg-gradient bg-gradient-to-b from-black w-full left-0 right-0 bottom-0 top-[30%]" />
				<Curve />

				<TextSection
					color={"teal"}
					title={siteSettings.services_title}
					text={siteSettings.services_text}
					highlightedWord={null}
					className={null}
				/>

				<GridWrapper className="relative z-10 flex items-center flex-wrap lg:flex-nowrap">
					<div className="relative z-5 w-full lg:w-8/12 xl:w-7/12">
						<div className="rounded-[24px] lg:rounded-[36px] border border-border-color-dark  bg-gradient-to-tl from-[#300238] to-[#5B3562] p-4">
							<h2 className="text-2xl text-center mb-4">We build</h2>
							<div className="flex flex-col lg:flex-row">
								{sections?.map((section, index) => (
									<BigButton
										key={section.title}
										title={section.title}
										sections={sections}
										activeSection={activeSection1}
										index={index}
										clickHandler={handleClick}
									/>
								))}
							</div>
							<AnimatePresence initial={false}>
								{activeSection1 !== null && (
									<SectionContent
										mobile={false}
										title={sections[activeSection1].title}
										text={sections[activeSection1].content}
									/>
								)}
							</AnimatePresence>
						</div>

						<div className="mt-3 lg:mt-8 rounded-[24px] lg:rounded-[36px] border border-border-color-dark bg-gradient-to-tl from-[#300238] to-[#5B3562] p-4">
							<h2 className="text-2xl text-center mb-4">We advise</h2>
							<div className="">
								{sections2?.map((section, index) => (
									<SmallButton
										activeSection={activeSection2}
										index={index}
										key={section.title + "index" + index}
										sections={sections2}
										title={section.title}
										clickHandler={handleClick2}
									/>
								))}
							</div>
						</div>
					</div>

					<div
						ref={contentRef}
						className="lg:opacity-0 relative z-5 w-full p-4 md:p-8 lg:w-4/12 xl:w-5/12"
					>
						<NavContentThree
							activeSection={"Data service"}
							siteSettings={siteSettings}
						/>
					</div>
				</GridWrapper>

				<div className={" hidden lg:block"}>
					<LogoGrid
						amount={9}
						gridItems={siteSettings.services_partners}
						title={siteSettings.services_technologies_title}
						className={"text-teal "}
					/>
				</div>
				<div className={"block lg:hidden"}>
					<LogoGrid
						amount={5}
						gridItems={siteSettings.services_partners}
						title={siteSettings.services_technologies_title}
						className={"text-teal"}
					/>
				</div>
			</section>
		</>
	);
}

function SectionContent({ title, text, mobile }) {
	return (
		<motion.div
			key={title}
			initial="collapsed"
			animate="open"
			exit="collapsed"
			variants={{
				open: { opacity: 1, height: "auto" },
				collapsed: { opacity: 0, height: 0 },
			}}
			transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
		>
			<div
				className={`${mobile ? "block lg:hidden p-4" : "hidden lg:block p-8 "}`}
			>
				<h3 className="text-2xl font-trap">{title}</h3>
				<p className="text-grey whitespace-pre-line">{text}</p>
			</div>
		</motion.div>
	);
}

function SmallButton({ title, sections, clickHandler, index, activeSection }) {
	if (!title) return null;
	return (
		<div>
			<button
				onClick={() => clickHandler(index)}
				className="shadow-inner my-2 border-border-color-light border xl:mx-2 w-full rounded-[12px] lg:rounded-[25px] bg-medium-grey hover:bg-hover-color p-2 lg:p-4 flex-wrap flex justify-center text-white"
			>
				<h3 className="text-sm lg:text-xl font-trap font-medium  text-center">
					{title}
				</h3>
			</button>
			<AnimatePresence initial={false}>
				{activeSection === index && (
					<SectionContent
						mobile={true}
						title={sections[activeSection].title}
						text={sections[activeSection].content}
					/>
				)}
				{activeSection === index && (
					<SectionContent
						mobile={false}
						title={sections[activeSection].title}
						text={sections[activeSection].content}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}

function BigButton({
	title,
	clickHandler,
	index,
	activeSection,
	content,
	sections,
}) {
	return (
		<>
			<button
				onClick={() => clickHandler(index)}
				className="my-1 lg:my-0 border-border-color-light border shadow-inner w-full lg:w-[20%] xl:mx-2  rounded-[12px] lg:rounded-[25px] bg-medium-grey hover:bg-hover-color p-2 px-3 lg:p-4 flex lg:flex-col items-center lg:items-start justify-start text-white"
			>
				<div className="w-6 h-auto lg:mx-auto lg:h-12 lg:w-auto flex items-center">
					{index === 0 && (
						<svg
							className=""
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="32"
							viewBox="0 0 48 32"
						>
							<path
								id="data_collection"
								d="M54,41a2,2,0,0,1,0,4H51.328a4.993,4.993,0,0,1-9.156,0H36.578a4.993,4.993,0,0,1-9.156,0H21.578a4.993,4.993,0,0,1-9.156,0H10a2,2,0,0,1,0-4h2.422a4.993,4.993,0,0,1,9.156,0h5.844a4.993,4.993,0,0,1,9.156,0h5.594a4.993,4.993,0,0,1,9.156,0Zm0-22a2,2,0,0,1,0,4H51.328a4.993,4.993,0,0,1-9.156,0H36.578a4.993,4.993,0,0,1-9.156,0H21.578a4.993,4.993,0,0,1-9.156,0H10a2,2,0,0,1,0-4h2.422a4.993,4.993,0,0,1,9.156,0h5.844a4.993,4.993,0,0,1,9.156,0h5.594a4.993,4.993,0,0,1,9.156,0Z"
								transform="translate(-8 -16)"
								fill="#fff"
							/>
						</svg>
					)}
					{index === 1 && (
						<svg
							className="v"
							xmlns="http://www.w3.org/2000/svg"
							width="54"
							height="32"
							viewBox="0 0 54 32"
						>
							<path
								id="analytics_development"
								d="M15,16a5.006,5.006,0,0,0-5,5V44H7a2,2,0,0,0,0,4H57a2,2,0,0,0,0-4H54V21a5.006,5.006,0,0,0-5-5Zm0,4H49a1,1,0,0,1,1,1V44H14V21A1,1,0,0,1,15,20Zm19.453,4a1.5,1.5,0,0,0-1.354.963l-5,13a1.5,1.5,0,0,0,.863,1.938,1.47,1.47,0,0,0,.537.1,1.5,1.5,0,0,0,1.4-.963l5-13a1.5,1.5,0,0,0-.863-1.937A1.48,1.48,0,0,0,34.453,24Zm5.135,2A1.5,1.5,0,0,0,38.379,28.5L41.492,32l-3.113,3.5A1.5,1.5,0,1,0,40.621,37.5l4-4.5a1.5,1.5,0,0,0,0-1.992l-4-4.5A1.5,1.5,0,0,0,39.588,26ZM24.412,26a1.494,1.494,0,0,0-1.033.5l-4,4.5a1.5,1.5,0,0,0,0,1.992l4,4.5A1.5,1.5,0,1,0,25.621,35.5L22.508,32l3.113-3.5A1.5,1.5,0,0,0,24.412,26Z"
								transform="translate(-5 -16)"
								fill="#fff"
							/>
						</svg>
					)}
					{index === 2 && (
						<svg
							className=""
							xmlns="http://www.w3.org/2000/svg"
							width="54"
							height="38.003"
							viewBox="0 0 54 38.003"
						>
							<path
								id="modern_data_platforms"
								d="M37.5,11.008a15.389,15.389,0,0,0-13.066,7.184,10.32,10.32,0,0,0-1.934-.184,10.559,10.559,0,0,0-10.365,8.869A11.519,11.519,0,0,0,5,37.508,11.4,11.4,0,0,0,15.961,48.98c2.02.041,31.08.041,33.078,0A10.49,10.49,0,0,0,52.8,28.934a15.25,15.25,0,0,0,.2-2.426A15.517,15.517,0,0,0,37.5,11.008Zm0,4A11.477,11.477,0,0,1,48.543,29.691,2,2,0,0,0,50,32.191a6.47,6.47,0,0,1,5,6.316,6.363,6.363,0,0,1-6.041,6.475c-1.835.038-31.062.038-32.92,0A7.377,7.377,0,0,1,9,37.508a7.509,7.509,0,0,1,5.531-7.23,2,2,0,0,0,1.477-1.893,6.474,6.474,0,0,1,8.715-5.977,2,2,0,0,0,2.479-.99A11.434,11.434,0,0,1,37.5,15.008ZM42.076,27.9a2,2,0,0,0-1.418.582l-4.629,4.6,1.4,1.4a3.956,3.956,0,0,1,1.025,1.82l5.02-4.984a2,2,0,0,0-1.4-3.42ZM27.6,28.309a2,2,0,0,0-1.414,3.414l7,7a2.027,2.027,0,0,0,2.828,0,2,2,0,0,0,0-2.828l-7-7A1.994,1.994,0,0,0,27.6,28.309Zm-3.826,3.066-5,5.1a2,2,0,0,0,2.855,2.8l4.594-4.682-1.441-1.441A3.941,3.941,0,0,1,23.775,31.375Z"
								transform="translate(-5 -11.008)"
								fill="#fff"
							/>
						</svg>
					)}
					{index === 3 && (
						<svg
							className="v"
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 40 40"
						>
							<path
								id="technical_marketing"
								d="M23.773,12C12.855,12,12,12.854,12,23.773V40.227C12,51.145,12.855,52,23.773,52H40.227C51.145,52,52,51.146,52,40.227V23.773C52,12.854,51.146,12,40.227,12Zm-2.605,4h9l-3.465,3.465a5.508,5.508,0,1,0,2.828,2.828L35.828,16h7C47.625,16,48,16.375,48,21.168V42.832c0,.92-.026,1.635-.082,2.258l-3.383-3.383a5.508,5.508,0,1,0-2.828,2.828l3.383,3.383c-.623.056-1.338.082-2.258.082H21.168C16.375,48,16,47.624,16,42.832V21.168C16,16.375,16.375,16,21.168,16ZM39.5,19a5.5,5.5,0,0,0-5.035,7.707l-7.758,7.758a5.508,5.508,0,1,0,2.828,2.828l7.758-7.758A5.5,5.5,0,1,0,39.5,19Zm-15,4A1.5,1.5,0,1,1,23,24.5,1.5,1.5,0,0,1,24.5,23Zm15,0A1.5,1.5,0,1,1,38,24.5,1.5,1.5,0,0,1,39.5,23Zm-15,15A1.5,1.5,0,1,1,23,39.5,1.5,1.5,0,0,1,24.5,38Zm15,0A1.5,1.5,0,1,1,38,39.5,1.5,1.5,0,0,1,39.5,38Z"
								transform="translate(-12 -12)"
								fill="#fff"
							/>
						</svg>
					)}
					{index === 4 && (
						<svg
							className="v"
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 40 40"
						>
							<path
								id="analytics_data_science"
								d="M15,13a2,2,0,0,0-2,2V51a2,2,0,0,0,2,2H51a2,2,0,0,0,0-4H17V15A2,2,0,0,0,15,13Zm7,1a2,2,0,1,0,2,2A2,2,0,0,0,22,14Zm7,0a2,2,0,1,0,2,2A2,2,0,0,0,29,14Zm7,0a2,2,0,1,0,2,2A2,2,0,0,0,36,14Zm7,0a2,2,0,1,0,2,2A2,2,0,0,0,43,14Zm6.83,2.008a1.994,1.994,0,0,0-1.359.705L35.293,32.359l-6.2-4.035a2,2,0,0,0-2.609.375l-6,7a2,2,0,0,0,3.039,2.6l4.859-5.668,6.215,4.043a2,2,0,0,0,2.621-.389l14.314-17a2,2,0,0,0-1.7-3.279ZM22,21a2,2,0,1,0,2,2A2,2,0,0,0,22,21Zm7,0a2,2,0,1,0,2,2A2,2,0,0,0,29,21Zm7,0a2,2,0,1,0,2,2A2,2,0,0,0,36,21Zm14,7a2,2,0,1,0,2,2A2,2,0,0,0,50,28Zm-7,7a2,2,0,1,0,2,2A2,2,0,0,0,43,35Zm7,0a2,2,0,1,0,2,2A2,2,0,0,0,50,35ZM22,42a2,2,0,1,0,2,2A2,2,0,0,0,22,42Zm7,0a2,2,0,1,0,2,2A2,2,0,0,0,29,42Zm7,0a2,2,0,1,0,2,2A2,2,0,0,0,36,42Zm7,0a2,2,0,1,0,2,2A2,2,0,0,0,43,42Zm7,0a2,2,0,1,0,2,2A2,2,0,0,0,50,42Z"
								transform="translate(-13 -13)"
								fill="#fff"
							/>
						</svg>
					)}
				</div>

				<h3 className="flex-0 text-left text-sm lg:text-xs xl:text-sm lg:mt-4 lg:text-center ml-3 lg:ml-0">
					{title}
				</h3>
			</button>
			{activeSection === index && (
				<SectionContent
					mobile={true}
					title={sections[activeSection].title}
					text={sections[activeSection].content}
				/>
			)}
		</>
	);
}

