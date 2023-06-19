import { motion, } from "framer-motion"
import ThreeDots from "./ThreeDots"

export default function NavContentTwo({ siteSettings, sectionProgress, activeSection }) {
    return (
			<motion.div
				initial={{ scale: 0, opacity: 0, y: 100 }}
				animate={{ scale: 1, opacity: 1, y: 0 }}
				exit={{ scale: 0, opacity: 0 }}
				transition={{ delay: 0.2, duration: 0.4 }}
				className="mt-8 lg:mt-0 w-full p-0 lg:p-8 border lg:border-none border-border-color-light rounded-[24px] backdrop-blur-md"
			>
				<ThreeDots activeSection={activeSection} />

				{sectionProgress === 0 && (
					<Content>{siteSettings?.approach_navigation_1_title}</Content>
				)}
				{sectionProgress === 1 && (
					<Content>{siteSettings?.approach_navigation_2_title}</Content>
				)}
				{sectionProgress === 2 && (
					<Content subtitle={siteSettings?.approach_navigation_3_text}>
						{siteSettings?.approach_navigation_3_title}
					</Content>
				)}
			</motion.div>
		);
}

function Content({ children, subtitle }) {
    return (
			<div className="p-4 text-center">
				<motion.h2
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 100 }}
					className="text-xl lg:text-2xl font-medium"
				>
					{children}
				</motion.h2>
				{subtitle && (
					<motion.p
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 100 }}
						className="text-sm lg:text-lg  mt-4 text-grey"
					>
						{subtitle}
					</motion.p>
				)}
			</div>
		);
}