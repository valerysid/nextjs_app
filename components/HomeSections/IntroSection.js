
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from 'react'
import GridWrapper from '../../components/Layout/GridWrapper'
import LogoHorizontal from '../../components/LogoHorizontal'
import Lottie from "lottie-react";
import headerAnimation from "../../public/animations/header3.json";

export default function IntroSection({ setActiveSection, siteSettings }) {

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        setActiveSection(false)
    }, [isInView, setActiveSection])

    const lottieRef = useRef(null)
    const [animationComplete, setAnimationComplete] = useState(false)

    return (
			<div
				ref={ref}
				className="w-full relative min-h-screen pt-32 overflow-hidden"
			>
				<div className="absolute rotate-90 origin-top-left scale-150 translate-x-[90vw] lg:translate-x-0 lg:scale-150 xl:scale-125 lg:rotate-0 2xl:scale-110 inset-0 h-auto z-0">
					<Lottie
						lottieRef={lottieRef}
						animationData={headerAnimation}
						speed={1}
						onComplete={() => setAnimationComplete(true)}
						loop={false}
						direction={1}
					/>
				</div>

				<div className="absolute inset-0 bg-gradient-to-t from-black" />

				<GridWrapper className={"relative "}>
					<div className="flex justify-center text-center">
						<div className="w-full lg:max-w-4xl">
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 1.4, duration: 0.4 }}
								>
									<div className="relative w-full max-w-[80%] sm:max-w-sm lg:max-w-xl mx-auto">
										<LogoHorizontal />
									</div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 2.2, duration: 0.4 }}
								>
									<p className="text-xl mb-36 mt-4">{siteSettings.title}</p>
								</motion.div>
								<motion.div
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 2.6, duration: 0.4 }}
								>
									<Toggler
										siteSettings={siteSettings}
										lottieRef={lottieRef}
										animationComplete={animationComplete}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</GridWrapper>
			</div>
		);
}


function Toggler({ siteSettings, lottieRef }) {
    const [step, setStep] = useState(1);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setStep(1)
    //     }, 2400)
    // }, [])

    function handleLeftClick() {
        setStep(0)
        lottieRef.current.setSpeed(-3)
        lottieRef.current.play();
    }
    function handleRightClick() {
        setStep(1)
        lottieRef.current.setSpeed(3)
        lottieRef.current.play();
    }

    return (
			<>
				<motion.div className="bg-medium-grey w-auto inline-block rounded-full mt-8">
					<motion.div
						initial={{ x: 0 }}
						animate={{ x: 0 }}
						exit={{ x: -200, opacity: 0 }}
						className="relative flex justify-between items-center"
					>
						<button
							onClick={() => handleLeftClick()}
							className="p-4 px-8 z-10 w-1/2 text-center whitespace-nowrap"
						>
							From
						</button>
						<button
							onClick={() => handleRightClick()}
							className="p-4 px-8 z-10 w-1/2 text-center whitespace-nowrap"
						>
							to
						</button>

						<motion.div
							animate={{ x: step < 1 ? "0%" : "100%" }}
							className="absolute h-full w-1/2 bg-purple rounded-full"
						/>
					</motion.div>
				</motion.div>
				<div className="flex">
					<motion.div
						animate={{ opacity: step === 1 ? 0.3 : 1 }}
						className={`w-1/2 text-right py-4 px-2 lg:px-4`}
					>
						{siteSettings?.list_left?.map((item) => (
							<p key={item}>{item}</p>
						))}
					</motion.div>
					<motion.div
						animate={{ opacity: step < 1 ? 0.3 : 1 }}
						className={`w-1/2 text-left py-4 px-2 lg:px-4`}
					>
						{siteSettings?.list_right?.map((item) => (
							<p key={item}>{item}</p>
						))}
					</motion.div>
				</div>
			</>
		);
}