import { useEffect, useRef, useState } from "react";
import { useTransform, useSpring, motion, useScroll } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";

export default function HorizontalSlider({ children }) {

    const windowSize = useWindowSize();
    const [scrollLength, setScrollLength] = useState(0);
    const [locationOfTopOfElement, setLocationOfTopOfElement] = useState(0)
    const scrollRef = useRef();
    const topRef = useRef();

    const { scrollY } = useScroll()
    const springValues = { stiffness: 40, damping: 10, mass: 0.1, clamp: true }
    const xTransform = useTransform(scrollY, [locationOfTopOfElement, locationOfTopOfElement + scrollLength], [0, -scrollLength])
    const x = useSpring(xTransform, springValues)

    useEffect(() => {
        setLocationOfTopOfElement(elementOffsetFromTopOfPage())

        let totalWidth = 0;
        scrollRef.current?.childNodes.forEach((node) =>
            totalWidth += node?.getBoundingClientRect().width
        );
        setScrollLength(totalWidth - windowSize.width);

    }, [windowSize, children])

    const elementOffsetFromTopOfPage = () => {
        const bodyRect = document.body.getBoundingClientRect();
        const elementRect = topRef.current.getBoundingClientRect();
        if (!bodyRect) return 0;
        if (!elementRect) return 0;
        return elementRect.top - bodyRect.top
    }

    return (
        <motion.section
            ref={topRef}
            className="relative"
            style={{ height: scrollLength + windowSize.width + 'px' }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <motion.div
                    style={{ x }}
                    ref={scrollRef}
                    className="flex"
                >
                    {children}
                </motion.div>
            </div>
        </motion.section>
    )
}
