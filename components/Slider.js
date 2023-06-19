import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y, Navigation } from 'swiper';

export default function Slider({ children, id }) {

    return (
        <div id={id} className={`p-4 md:p-8 relative`}>
            <SlidePrevButton />
            <Swiper
                modules={[A11y, Navigation]}
                navigation={{
                    nextEl: `#${id} .carousel-slider-button-next`,
                    prevEl: `#${id} .carousel-slider-button-prev`,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        slidesPerGroup: 1
                    },
                    769: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        slidesPerGroup: 2
                    },
                    1080: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        slidesPerGroup: 2
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        slidesPerGroup: 3
                    },

                }}
            >

                {children?.map((child, index) => (
                    <SwiperSlide key={'child' + index}>
                        <div className="p-4">
                            {child}
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <SlideNextButton />
        </div >
    )
}

export function SlideNextButton() {
    return (
        <button className='bg-green flex  -translate-x-4 items-center justify-center p-4 rounded-full w-12 h-12 z-10 absolute right-0 top-1/2 carousel-slider-button-next' >
            <svg className="w-full h-auto " xmlns="http://www.w3.org/2000/svg" width="19.721" height="20.963" viewBox="0 0 19.721 20.963">
                <g transform="translate(-6 -5.379)">
                    <path id="Path_687" data-name="Path 687" d="M7.5,18H24.221" transform="translate(0 -2.14)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path id="Path_688" data-name="Path 688" d="M18,7.5l8.36,8.36L18,24.221" transform="translate(-2.14)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
            </svg>
        </button>
    );
}

export function SlidePrevButton() {
    return (
        <button className='bg-green translate-x-4 flex items-center justify-center p-4 rounded-full w-12 h-12 z-10 absolute left-0 top-1/2 carousel-slider-button-prev'>

            <svg className="w-full h-auto rotate-180" xmlns="http://www.w3.org/2000/svg" width="19.721" height="20.963" viewBox="0 0 19.721 20.963">
                <g transform="translate(-6 -5.379)">
                    <path id="Path_687" data-name="Path 687" d="M7.5,18H24.221" transform="translate(0 -2.14)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path id="Path_688" data-name="Path 688" d="M18,7.5l8.36,8.36L18,24.221" transform="translate(-2.14)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
            </svg>

        </button>
    );
}