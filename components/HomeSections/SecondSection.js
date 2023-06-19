import GridWrapper from '../Layout/GridWrapper'
import { urlFor } from '../../sanity-client'
import Image from 'next/image'
import NavContentOne from './NavContentOne';
import { useRef, useEffect } from 'react';
import { useScroll, useAnimationControls, motion } from 'framer-motion';
import { LogoGrid } from "../../pages/clients-and-partners";

export default function SecondSection({
	siteSettings,
	activeSection,
	setActiveSection,
	goToBoxRef,
}) {
	const ref = useRef();
	const contentRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 0.1", "0.5 0"],
	});

	const controls = useAnimationControls();

	useEffect(() => {
		function hideSection() {
			controls.start({
				opacity: 0,
				y: -100,
			});
		}
		function showSection() {
			controls.start({
				opacity: 1,
				y: 0,
			});
		}

		return scrollYProgress.onChange((latest) => {
			if (latest > 0.8) {
				hideSection();
				setActiveSection(null);
			} else {
				showSection();
				setActiveSection(false);
			}
		});
	}, [goToBoxRef, controls, scrollYProgress, activeSection, setActiveSection]);

	return (
		<div ref={ref}>
			<GridWrapper
				className={`z-10 lg:pt-16 2xl:pb-16 2xl:pt-32 overflow-x-hidden relative flex flex-wrap  items-center`}
			>
				<div className="opacity-30 absolute radialGreen w-[200%] -left-[50%] -right-[50%] top-0 bottom-0" />
				<div className="absolute inset-0 bg-gradient-to-b from-black" />

				<div
					className={`lg:pb-36  relative z-5 w-full md:w-7/12 lg:p-8 text-center`}
				>
					<h2 className={`text-4xl lg:text-6xl font-circular  `}>
						{siteSettings?.titel_tweede_blok} <br />
						<span
							className={`mt-2 inline-block rounded-full whitespace-nowrap pt-3 pb-4 px-6 bg-green`}
						>
							{siteSettings?.titel_tweede_blok_blob}
						</span>
					</h2>
					<p className="text-base lg:text-xl mt-8 whitespace-pre-line">
						<span
							className={`inline-block rounded-full whitespace-nowrap pt-1 pb-0 px-2 mr-2 bg-green`}
						>
							{siteSettings?.beschrijving_tweede_blok_blob}
						</span>
						{siteSettings?.beschrijving_tweede_blok}
					</p>
					<motion.div
						animate={controls}
						ref={contentRef}
						className="mt-16 mb-16 relative w-full lg:w-10/12 mx-auto"
					>
						<NavContentOne siteSettings={siteSettings} />
					</motion.div>
				</div>

				<div className="hidden lg:block w-full md:w-5/12 relative z-5 pb-16 lg:pb-0">
					<LogoGridSmall
						gridItems={siteSettings?.clients_tweede_blok}
						title={siteSettings?.partner_titel_tweede_blok}
						className={"text-green"}
					/>
				</div>

				<div className="block lg:hidden relative z-5 pb-16 lg:pb-0">
					<LogoGrid
						amount={5}
						gridItems={siteSettings?.clients_tweede_blok}
						title={siteSettings?.partner_titel_tweede_blok}
						className={"text-green"}
					/>
				</div>
			</GridWrapper>
		</div>
	);
}

export function LogoGridSmall({ gridItems, title, className }) {
	return (
		<div className="p-4 lg:p-8">
			<div className={`text-center ${className}`}>
				<h2 className="text-2xl block">{title}</h2>
			</div>

			<div className="mt-8 pb-8 grid grid-cols-2 lg:grid-cols-3">
				{gridItems?.slice(0, 9).map((partner) => {
					return (
						<div
							key={partner._id}
							className="bg-white relative rounded-full m-2 px-6 py-4"
						>
							<Image
								alt={partner.title}
								width={280}
								height={72}
								src={urlFor(partner.mainImage).width(280).height(72).url()}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}