import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { sanityClient } from '../../sanity-client';
import { useNextSanityImage } from 'next-sanity-image';
import Img from 'next/image'


export default function GalleryBlock({ slides }) {
    return (
        <div className="py-8 md:py-16 w-full bg-dark-green relative my-8 md:my-16">
            <div className='w-full py-16 md:py-32'>
                <Swiper
                    spaceBetween={20}
                    modules={[Navigation, A11y]}
                    slidesPerView={3}
                    navigation
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1.2,
                            slidesOffsetAfter: 16,
                            slidesOffsetBefore: 16,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2.3,
                            slidesOffsetAfter: 20,
                            slidesOffsetBefore: 20,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3.4,
                            slidesOffsetAfter: 40,
                            slidesOffsetBefore: 40,
                            spaceBetween: 40
                        }
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={'slide' + index}>
                            <Slide slideData={slide} />
                        </SwiperSlide>
                    ))}
                </Swiper >
            </div>

        </div>
    )
}

const Slide = ({ slideData }) => {
    const imageProps = useNextSanityImage(
        sanityClient,
        slideData
    );
    return (
        <Img {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />
    )
}