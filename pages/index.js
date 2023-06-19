import Head from 'next/head'
import { loadAllCases, loadAllSanityContentByType, loadSingleSanityContentByType } from '../utils/sanity-actions'
import { motion, useAnimationControls } from 'framer-motion'
import { useRef, useEffect, useState } from "react";
import ApproachSection from "../components/HomeSections/ApproachSection";
import NavContentTwo from "../components/HomeSections/NavContentTwo";
import IntroSection from "../components/HomeSections/IntroSection";
import SecondSection from "../components/HomeSections/SecondSection";
import DataServicesSection from "../components/HomeSections/DataServicesSection";
import PeopleSection from "../components/HomeSections/PeopleSection";
import FifthSection from "../components/HomeSections/FifthSection";
import SixthSection from "../components/HomeSections/SixthSection";
import NavContentThree from "../components/HomeSections/NavContentThree";
import ThreeDotsBig from "../components/HomeSections/ThreeDotsBig";
import NavContentFour from "../components/HomeSections/NavContentFour";
import LanguageToggle from "../components/LanguageToggle";
import { useRouter } from "next/router";
import SEO from "../components/SEO";

export default function Home({
	careers,
	siteSettings,
	clients,
	partners,
	team,
	blog,
}) {
	const controls = useAnimationControls();
	const [activeSection, setActiveSection] = useState(false);
	const [sectionProgress, setSectionProgress] = useState(0);
	const BOXWIDTH = 344;
	const approachRef = useRef();
	const dataserviceRef = useRef();
	const peopleRef = useRef();

	function goToBoxRef(ref) {
		const box = ref.current.getBoundingClientRect();
		controls.start({
			x: box.x + 16,
			y: window.innerHeight / 2 - box.height / 2,
			width: box.width,
			height: box.height,
			scale: 1,
			opacity: 1,
			transition: { ease: "easeOut", duration: 0.25 },
		});
	}

	useEffect(() => {
		function hideNav() {
			controls.set({
				x: window.innerWidth / 2 - BOXWIDTH / 2 + "px",
				y: window.innerHeight + 80 + "px",
				width: 320 + "px",
				height: 58 + "px",
				opacity: 0,
				scale: 0,
				top: "50%",
				left: "50%",
			});
		}
		function goToNavMode() {
			controls.start({
				x: window.innerWidth / 2 - BOXWIDTH / 2 + "px",
				y: window.innerHeight - 80 + "px",
				width: BOXWIDTH + "px",
				height: 57.5 + "px",
				opacity: 1,
				scale: 1,
				top: 0,
				left: 0,
				transition: { ease: "easeOut", duration: 0.2 },
			});
		}
		if (activeSection === null) {
			goToNavMode();
		}
		if (activeSection === false) {
			hideNav();
		}
	}, [activeSection, controls]);

	const router = useRouter();
	useEffect(() => {
		if (router.asPath.includes("approach")) {
			approachRef.current.scrollIntoView();
		}
		if (router.asPath.includes("dataservice")) {
			dataserviceRef.current.scrollIntoView();
		}
		if (router.asPath.includes("people")) {
			peopleRef.current.scrollIntoView();
		}
	}, [router]);

	return (
		<main className="relative">
			<SEO
				title={""}
				description={siteSettings.meta_description}
				image={null}
				slug={""}
				siteName={siteSettings.meta_title}
			/>

			<div className="hidden lg:block absolute left-4 top-[94vh] z-50 border bg-medium-grey rounded-full border-border-color-light p-2">
				<LanguageToggle />
			</div>

			<div className="hidden lg:block absolute right-4 top-[93vh] z-50 p-2">
				<div className="mouse-icon">
					<div className="wheel"></div>
				</div>
			</div>

			<IntroSection
				setActiveSection={setActiveSection}
				siteSettings={siteSettings}
			/>

			<SecondSection
				siteSettings={siteSettings}
				setActiveSection={setActiveSection}
				goToBoxRef={goToBoxRef}
				activeSection={activeSection}
			/>

			<div className="" ref={approachRef} />

			<ApproachSection
				siteSettings={siteSettings}
				setActiveSection={setActiveSection}
				goToBoxRef={goToBoxRef}
				sectionProgress={sectionProgress}
				setSectionProgress={setSectionProgress}
				activeSection={activeSection}
			/>

			<div className="" ref={dataserviceRef} />

			<DataServicesSection
				siteSettings={siteSettings}
				setActiveSection={setActiveSection}
				partners={partners}
				goToBoxRef={goToBoxRef}
				activeSection={activeSection}
			/>

			<div className="" ref={peopleRef} />

			<PeopleSection
				team={team}
				careers={careers}
				setActiveSection={setActiveSection}
				goToBoxRef={goToBoxRef}
				siteSettings={siteSettings}
				activeSection={activeSection}
			/>

			<FifthSection
				siteSettings={siteSettings}
				blog={blog}
				setActiveSection={setActiveSection}
				goToBoxRef={goToBoxRef}
				activeSection={activeSection}
			/>

			<SixthSection
				siteSettings={siteSettings}
				clients={clients}
				setActiveSection={setActiveSection}
			/>

			{activeSection !== false && (
				<div className="hidden lg:block">
					<motion.div
						animate={controls}
						className="fixed top-1/2 left-1/2 hidden lg:block z-50 border-[#b587be] border-opacity-30 border rounded-[48px] backdrop-blur-md"
					>
						{activeSection === "Approach" && (
							<NavContentTwo
								siteSettings={siteSettings}
								sectionProgress={sectionProgress}
								activeSection={activeSection}
							/>
						)}
						{activeSection === "Data service" && (
							<NavContentThree
								siteSettings={siteSettings}
								activeSection={activeSection}
							/>
						)}
						{activeSection === "People" && (
							<NavContentFour
								siteSettings={siteSettings}
								activeSection={activeSection}
							/>
						)}
						{activeSection === null && <ThreeDotsBig activeSection={null} />}
					</motion.div>
				</div>
			)}
		</main>
	);
}



export const getStaticProps = async () => {
  // const page = await loadSingleSanityContentByType('career');
  const careers = await loadAllSanityContentByType('career', null);
  const clients = await loadAllSanityContentByType('client', null);
  const blog = await loadAllCases();
  const partners = await loadAllSanityContentByType('partner', null);
  const team = await loadAllSanityContentByType('team', null);
  const siteSettings = await loadSingleSanityContentByType('siteSettings', null);

  if (!careers) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      careers,
      blog,
      siteSettings,
      clients,
      partners,
      team,
    },
  }
}
