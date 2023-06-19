
import TextSection from '../TextSection'
import Curve from '../Layout/Curve';
import GridWrapper from '../Layout/GridWrapper'
import NavContentFive from './NavContentFive';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Button';
import 'swiper/css'
import { urlFor } from "../../sanity-client";
import { useScroll, useAnimationControls, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function FifthSection({
	siteSettings,
	activeSection,
	blog,
	setActiveSection,
	goToBoxRef,
}) {
	const ref = useRef(null);
	const contentRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 0.2", "0.5 0.1"],
	});
	const controls = useAnimationControls();

	useEffect(() => {
		function hideSection() {
			controls.start({
				opacity: 0,
				y: 100,
			});
		}
		function showSection() {
			controls.start({
				opacity: 1,
				y: 0,
			});
		}

		return scrollYProgress.onChange((latest) => {
			if (latest < 0.2) {
				hideSection();
				setActiveSection(null);
			} else {
				showSection();
				setActiveSection(false);
			}
		});
	}, [goToBoxRef, controls, activeSection, scrollYProgress, setActiveSection]);

	return (
		<section
			ref={ref}
			className={`min-h-screen pb-36  z-10 relative w-full bg-black`}
		>
			<div className="opacity-30 absolute radialTricolor w-full left-0 right-0 top-[30%] bottom-0" />
			<div className="absolute inset-0 bg-gradient-to-b from-black" />
			<Curve />

			<TextSection
				color={"red"}
				title={siteSettings?.why_function_title}
				text={siteSettings?.why_function_text}
				highlightedWord={null}
				className={null}
			/>

			<GridWrapper className="relative overflow-hidden z-10 flex items-center justify-around flex-wrap lg:flex-nowrap">
				<motion.div
					initial={{ opacity: 0 }}
					animate={controls}
					ref={contentRef}
					className="lg:order-2 relative overflow-hidden rounded-[48px] backdrop-blur-md border border-[#b587be] border-opacity-30 z-5 w-full lg:w-5/12 xl:w-4/12"
				>
					<NavContentFive />
				</motion.div>

				<div className="relative z-5 w-full lg:w-5/12 xl:w-4/12 mt-8 lg:mt-0">
					<SwiperSlider blog={blog} />
				</div>
			</GridWrapper>
		</section>
	);
}

export function CheckBoxListItem({ text }) {
	return (
		<li className="flex my-4 items-center">
			<svg
				className="block"
				id="Group_3932"
				data-name="Group 3932"
				xmlns="http://www.w3.org/2000/svg"
				width="38"
				height="38"
				viewBox="0 0 38 38"
			>
				<circle
					id="Ellipse_63"
					data-name="Ellipse 63"
					cx="19"
					cy="19"
					r="19"
					fill="#16a968"
				/>
				<path
					id="Path_729"
					data-name="Path 729"
					d="M0,19.535H10.095V0"
					transform="translate(22.337 4.919) rotate(45)"
					fill="none"
					stroke="#fff"
					strokeWidth="2.5"
				/>
			</svg>
			<p className="ml-4 flex-1">{text}</p>
		</li>
	);
}

function SwiperSlider({ blog }) {
	return (
		<div id="swiperWrapper">
			<Swiper
				modules={[Navigation, A11y]}
				spaceBetween={20}
				slidesPerView={1}
				navigation={{
					nextEl: "#swiperWrapper .swiper-button-next",
					prevEl: "#swiperWrapper .swiper-button-prev",
				}}
			>
				{blog.map((item) => (
					<SwiperSlide key={item._id}>
						<div className="rounded-[36px] border border-border-color-dark bg-gradient-to-tl from-[#300238] to-[#5B3562] p-8">
							{item.logo && (
								<div className="relative w-1/2 mb-4 h-16">
									<Image
										objectFit={"contain"}
										src={urlFor(item.logo).url()}
										alt="logo for the company"
										layout={"fill"}
									/>
								</div>
							)}
							<p>{item.summary}</p>
							{item?.bullet_points?.length > 0 && (
								<ul>
									{item.bullet_points?.map((bullet) => (
										<CheckBoxListItem key={bullet} text={bullet} />
									))}
								</ul>
							)}
							<div className="flex justify-center mt-8">
								<Button color={"grey"} href={`/post/${item.slug.current}`}>
									Read more
								</Button>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="flex mt-4 justify-center items-center">
				<button className="group hover:scale-90 transition-all block cursor-pointer mr-2 swiper-button-prev">
					<svg
						className="border border-white transition-all border-opacity-30 rounded-full group-hover:border-opacity-100"
						id="Component_166_5"
						data-name="Component 166 – 5"
						xmlns="http://www.w3.org/2000/svg"
						width="48"
						height="48"
						viewBox="0 0 48 48"
					>
						<g
							id="Icon_feather-arrow-right"
							data-name="Icon feather-arrow-right"
							transform="translate(16 16)"
						>
							<path
								id="Path_687"
								data-name="Path 687"
								d="M24.221,18H7.5"
								transform="translate(-7.5 -9.64)"
								fill="none"
								stroke="#fff"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							/>
							<path
								id="Path_688"
								data-name="Path 688"
								d="M26.36,7.5,18,15.86l8.36,8.36"
								transform="translate(-18 -7.5)"
								fill="none"
								stroke="#fff"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							/>
						</g>
					</svg>
				</button>
				<button className="group hover:scale-90 transition-all cursor-pointer ml-2 swiper-button-next">
					<svg
						className="border border-white transition-all border-opacity-30 rounded-full group-hover:border-opacity-100"
						xmlns="http://www.w3.org/2000/svg"
						width="48"
						height="48"
						viewBox="0 0 48 48"
					>
						<g
							id="Component_166_4"
							data-name="Component 166 – 4"
							transform="translate(48 48) rotate(180)"
						>
							<g
								id="Icon_feather-arrow-right"
								data-name="Icon feather-arrow-right"
								transform="translate(16 16)"
							>
								<path
									id="Path_687"
									data-name="Path 687"
									d="M24.221,18H7.5"
									transform="translate(-7.5 -9.64)"
									fill="none"
									stroke="#fff"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								/>
								<path
									id="Path_688"
									data-name="Path 688"
									d="M26.36,7.5,18,15.86l8.36,8.36"
									transform="translate(-18 -7.5)"
									fill="none"
									stroke="#fff"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								/>
							</g>
						</g>
					</svg>
				</button>
			</div>
		</div>
	);
}