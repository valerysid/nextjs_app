import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useViewportScroll } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";
import Image from "next/image";
import Row from "../row";
import TextAnimation from "../TextAnimation";
import { urlFor } from "../../sanityclient";

export default function HorizontalSlider({ slides }) {
    const windowSize = useWindowSize();
    const [scrollLength, setScrollLength] = useState(0);
    const scrollRef = useRef();
    const topRef = useRef();
    const [locationOfTopOfElement, setLocationOfTopOfElement] = useState(0)
    const slideWidth = 600;
    const padding = 64;
    const x = useMotionValue(0)
    const { scrollY } = useViewportScroll()

    useEffect(() => {
        if (!topRef.current) return;
        setLocationOfTopOfElement(elementOffsetFromTopOfPage(topRef.current))
        setScrollLength(slides.length * slideWidth - windowSize.width + slides.length * padding + slideWidth);
    }, [slides, windowSize, topRef])



    const elementOffsetFromTopOfPage = (el) => {
        const bodyRect = document.body.getBoundingClientRect();
        const elementRect = topRef.current.getBoundingClientRect();
        if (!bodyRect) return 0;
        if (!elementRect) return 0;
        return elementRect.top - bodyRect.top
    }

    function scrollListener() {
        if (topRef.current) {
            if (scrollY.get() - locationOfTopOfElement > 0) {
                const newX = -(scrollY.get() - locationOfTopOfElement);
                x.set(newX);
            }
        }
    }

    function startScrollListener() {
        window.addEventListener('scroll', scrollListener)
    }

    function removeScrollListener() {
        window.removeEventListener('scroll', scrollListener)
    }


    return (
        <motion.section
            ref={topRef}
            className="relative"
            onViewportLeave={() => removeScrollListener()}
            onViewportEnter={() => startScrollListener()}
            style={{ height: scrollLength + 'px' }}
        >
            <div className="sticky top-0 w-full overflow-hidden">
                <Row className="flex items-centers justify-between mb-4 md:mb-4 lg:mb-4">
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <h2 className="font-galano text-2xl">
                            <TextAnimation>
                                Recent websites
                            </TextAnimation>
                        </h2>
                        <p className="text-sm">
                            <TextAnimation>
                                Some websites i&apos;ve built etc
                            </TextAnimation>
                        </p>
                    </div>
                </Row>

                <motion.div
                    style={{ translateX: x }}
                    ref={scrollRef}
                    className="flex"
                >
                    {slides.map((slide, index) => {
                        return (
                            <Slide slide={slide.thumbnail} key={'slide' + index} />
                        )
                    })}
                </motion.div>
            </div>
        </motion.section>
    );
}

export function Slide({ slide }) {
    return (
        <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 relative w-[600px] h-[400px] flex-shrink-0">
            <Image objectFit='cover' src={urlFor(slide).url()} layout={'fill'} alt={'hi, im the image'} />
        </div>
    );
}