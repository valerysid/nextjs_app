
import { motion, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import GridWrapper from '../Layout/GridWrapper'
import TextSection from '../TextSection'
import NavContentTwo from './NavContentTwo'
import Lottie from "lottie-react";
import headerAnimation from "../../public/animations/drieluik.json";
import Curve from '../Layout/Curve';

export default function ApproachSection({
	siteSettings,
	activeSection,
	setActiveSection,
	setSectionProgress,
	sectionProgress,
	goToBoxRef,
}) {
	const scrollRef = useRef(null);
	const contentRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ["0 0.4", "1 0.5"],
	});
	const lottieRef = useRef(null);

	useEffect(() => {
		return scrollYProgress.onChange((latest) => {
			lottieRef.current.goToAndStop(latest * 380, true);
			if (latest > 0.91) {
				if (activeSection === "Approach") setActiveSection(null);
			} else if (latest > 0.66) {
				setSectionProgress(2);
				setActiveSection("Approach");
				goToBoxRef(contentRef);
			} else if (latest > 0.3) {
				setSectionProgress(1);
				setActiveSection("Approach");
				goToBoxRef(contentRef);
			} else if (latest > 0) {
				setSectionProgress(0);
				setActiveSection("Approach");
				goToBoxRef(contentRef);
			} else {
				if (activeSection === "Approach") setActiveSection(null);
			}
		});
	}, [
		goToBoxRef,
		activeSection,
		lottieRef,
		scrollYProgress,
		setActiveSection,
		setSectionProgress,
	]);

	return (
		<section className={`z-10 relative w-full bg-black pb-16 lg:pb-0`}>
			<Curve />

			{/* <motion.div className="sticky top-0 left-0 right-0 h-1 bg-white origin-left z-10" style={{ scaleX: scrollYProgress }} /> */}
			<TextSection
				color={"red"}
				title={siteSettings.approach_title}
				text={siteSettings.approach_text}
				highlightedWord={null}
				className={null}
			/>

			<div ref={scrollRef} className="h-[500vh] relative">
				<div className="opacity-30 absolute radialRed w-full left-0 right-0 bottom-0 top-[30%]" />
				<div className="opacity-100 absolute bg-gradient bg-gradient-to-b from-black w-full left-0 right-0 bottom-0 top-[30%]" />

				<div className="sticky top-0 w-full">
					<GridWrapper className="flex-col lg:flex-row flex items-center justify-center">
						<div className="w-10/12 lg:w-5/12 flex-1">
							<div className="w-full h-[40vh] lg:h-screen flex items-center rounded-xl">
								<Lottie
									lottieRef={lottieRef}
									animationData={headerAnimation}
									speed={1}
									autoplay={false}
									loop={false}
									direction={1}
								/>
							</div>
						</div>

						<div
							ref={contentRef}
							className="block lg:opacity-0 relative w-full lg:m-16 lg:w-5/12 "
						>
							<NavContentTwo
								activeSection={"Approach"}
								siteSettings={siteSettings}
								sectionProgress={sectionProgress}
							/>
						</div>
					</GridWrapper>
				</div>
			</div>
		</section>
	);
}