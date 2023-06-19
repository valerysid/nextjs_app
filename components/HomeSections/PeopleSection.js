
import TextSection from '../TextSection'
import Curve from '../Layout/Curve';
import GridWrapper from '../Layout/GridWrapper'
import { useRef, useEffect } from 'react';
import CareerCard from '../CareerCard'
import { urlFor } from '../../sanity-client';
import Image from 'next/image';
import { useScroll } from 'framer-motion';
import Button from '../Button';
import NavContentFour from './NavContentFour';

export default function PeopleSection({
	siteSettings,
	activeSection,
	team,
	careers,
	setActiveSection,
	goToBoxRef,
}) {
	const ref = useRef();
	const contentRef = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 0.2", "0.3 0"],
	});

	useEffect(() => {
		return scrollYProgress.onChange((latest) => {
			if (latest > 0.98) {
				if (activeSection === "People") setActiveSection(null);
			} else if (latest > 0) {
				setActiveSection("People");
				goToBoxRef(contentRef);
			} else {
				if (activeSection === "People") setActiveSection(null);
			}
		});
	}, [goToBoxRef, activeSection, scrollYProgress, setActiveSection]);

	return (
		<section
			ref={ref}
			className={`z-10 min-h-screen pb-36 relative w-full bg-black`}
		>
			<div className="opacity-40 absolute radialBlue w-full left-0 right-0 bottom-0 top-[40%]" />
			<div className="opacity-100 absolute bg-gradient bg-gradient-to-b from-black w-full left-0 right-0 bottom-0 top-[40%]" />
			<Curve />

			<TextSection
				color={"purple"}
				title={siteSettings.team_title}
				text={siteSettings.team_text}
				highlightedWord={null}
				className={null}
			/>

			<GridWrapper className="relative z-10 flex items-center flex-wrap lg:flex-nowrap">
				<div className="relative z-5 w-full lg:w-8/12 xl:w-7/12">
					{team?.map((member, index) => (
						<Teamlid content={member} key={member.title} />
					))}
					{careers?.map((career, index) => (
						<CareerCard key={career.title} career={career} />
					))}
				</div>

				<div
					ref={contentRef}
					className="lg:opacity-0 relative z-5 w-full p-4 md:p-8 lg:w-4/12 xl:w-5/12"
				>
					<NavContentFour
						activeSection={"People"}
						siteSettings={siteSettings}
					/>
				</div>
			</GridWrapper>
		</section>
	);
}

function Teamlid({ content }) {
    return (
			<div className="rounded-xl mb-4 border border-border-color-dark bg-gradient-to-tl from-[#300238] to-[#5B3562] p-0 pt-4 lg:p-8">
				<div className="flex  flex-wrap md:flex-nowrap">
					<div className="w-full">
						<div className="relative p-4 lg:p-0">
							<Image
								layout={"responsive"}
								alt={`a portrait of ${content.title}`}
								src={urlFor(content.mainImage).width(500).height(500).url()}
								width={500}
								height={500}
							/>
						</div>
						<div className="w-full flex">
							<Button
								color={"grey"}
								className="mx-auto mt-4"
								size="small"
								href="mailto:thijs@function-data.com"
							>
								Contact me!
							</Button>
						</div>
					</div>
					<div className="p-6 lg:pl-8 mt-4 md:mt-0">
						<h3 className="text-2xl lg:text-3xl">{content.title}</h3>
						<h4 className="text-sm text-grey">{content.subtitle}</h4>
						<p className="text-sm lg:text-lg mt-2 ">{content.bio}</p>
					</div>
				</div>
			</div>
		);
}