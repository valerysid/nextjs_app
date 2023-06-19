import Button from '../components/Button'
import GridWrapper from '../components/Layout/GridWrapper'
import Star from '../components/Star'
import Image from 'next/image'
import TextSection from '../components/TextSection'
import CareerCard from '../components/CareerCard'
import Slider from '../components/Slider'
import ScrollSlider from '../components/ScrollSlider'
import Head from 'next/head'
import { loadAllSanityContentByType, loadSingleSanityContentByType } from '../utils/sanity-actions'
import { urlFor } from '../sanity-client'
import { PortableImageWithoutStyles } from '../components/Sanity/BlockContent'

export default function Home({ careers, siteSettings }) {

    return (
        <main>

            <Head>
                <title>{siteSettings?.meta_title}</title>
                <meta name="description" content={siteSettings?.meta_description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="hidden md:block absolute top-0 right-0 w-md h-md z-10 overflow-hidden">
                <Star className={'translate-x-32 -translate-y-32'} />
            </div>

            <div className='pointer-events-none absolute w-full top-0 left-0 right-0 h-[80vh]'>
                <Image src={'/gradient.jpg'} alt="a colorful gradient" width={1417} height={852} layout={'fill'} />
            </div>

            <GridWrapper className={'flex'}>
                <div className='z-10 mt-32 md:mt-16 w-full md:w-5/12'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium'>
                        {siteSettings?.title}
                    </h1>
                    <p className='text-2xl mt-8 text-grey font-circular'>
                        {siteSettings?.description}
                    </p>
                    <Button href={'#mindset'} className={'mt-12'}>
                        {siteSettings?.approach_title}
                    </Button>
                </div>


            </GridWrapper>

            <TextSection
                color={'red'}
                title={siteSettings?.approach_title}
                text={siteSettings?.approach_text}
                highlightedWord={siteSettings?.approach_text_highlight}
            />

            <div id="approach" />

            <GridWrapper className={'relative flex-wrap md:flex-nowrap flex justify-between items-center'}>
                <div className='w-full md:w-4/12'>
                    <h2 className='text-2xl text-red font-circular'>
                        {siteSettings?.approach_sub_title}
                    </h2>
                    <h3 className='text-4xl text-white mt-4'>
                        {siteSettings?.approach_title_2}
                    </h3>
                    <p className='text-grey text-xl mt-4'>
                        {siteSettings?.approach_text_2}
                    </p>
                </div>

                <div className='relative w-full md:w-7/12'>

                    <svg className="w-full h-auto p-8 md:p-16" xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700">
                        <g fill="none" stroke="#5b3562" strokeWidth="17" strokeDasharray="1 11">
                            <circle cx="350" cy="350" r="350" stroke="none" />
                            <circle cx="350" cy="350" r="341.5" fill="none" />
                        </g>
                    </svg>

                    <div className='w-[300px] h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-center rounded-full bg-red'>
                        <h3 className='text-2xl font-medium'>
                            approach
                        </h3>
                    </div>

                </div>

            </GridWrapper>

            <div id="mindset" />

            <TextSection
                color={'purple'}
                title={siteSettings?.mindset_title}
                text={siteSettings?.mindset_text}
                highlightedWord={siteSettings?.mindset_text_highlight}
            />

            <ScrollSlider
                subtitle={siteSettings?.mindset_sub_title}
                slides={[
                    {
                        title: siteSettings?.mindset_slide_1_title,
                        text: siteSettings?.mindset_slide_1_text,
                    },
                    {
                        title: siteSettings?.mindset_slide_2_title,
                        text: siteSettings?.mindset_slide_2_text,
                    },
                    {
                        title: siteSettings?.mindset_slide_3_title,
                        text: siteSettings?.mindset_slide_3_text,
                    },
                ]}
            />

            <div id="how-we-work" />

            <TextSection
                color={'yellow'}
                title={siteSettings?.how_title}
                text={siteSettings?.how_text}
                highlightedWord={siteSettings?.how_text_highlight}
            />

            <GridWrapper className={'flex flex-wrap md:flex-nowrap justify-center'}>
                <h2 className='font-medium text-5xl w-full md:w-4/12 md:mr-[8.3%]'>
                    {siteSettings?.how_title_2}
                </h2>
                <p className='text-3xl text-grey font-circular w-full md:w-5/12'>
                    {siteSettings?.how_text_2}
                </p>
            </GridWrapper>

            <GridWrapper className={'flex justify-center flex-wrap my-16 relative'}>

                <div className={'flex flex-wrap w-full justify-center'}>
                    {siteSettings?.how_images?.map((image, index) => (
                        <div key={'image' + index} className='relative m-2 w-24 h-24'>
                            <Image
                                src={urlFor(image).width(200).height(200).url()}
                                width={200}
                                height={200}
                                alt="an icon"
                                layout="responsive"
                            />
                        </div>
                    ))}
                </div>
                <div className={'md:ml-24 flex flex-wrap w-full justify-center'}>
                    {siteSettings?.how_images?.map((image, index) => (
                        <div key={'image' + index + index} className='relative m-2 w-24 h-24'>
                            <Image
                                src={urlFor(image).width(200).height(200).url()}
                                width={200}
                                height={200}
                                alt="an icon"
                                layout="responsive"
                            />
                        </div>
                    ))}
                </div>

                <div className='absolute top-0 left-0 bottom-0 w-1/2 z-10 bg-gradient-to-r from-black' />
                <div className='absolute top-0 right-0 bottom-0 w-1/2 z-10 bg-gradient-to-l from-black' />

            </GridWrapper>


            <TextSection
                color={'yellow'}
                title={siteSettings?.partners_title}
                text={siteSettings?.partners_text}
                highlightedWord={'lasjkdfla'}
            />

            <GridWrapper className={'flex items-center flex-wrap justify-center'}>
                {siteSettings?.partners_images?.map((image, index) => (
                    <div className='w-1/2 md:w-4/12 lg:w-3/12 xl:w-2/12 mx-4 p-4 h-auto ' key={'partner' + index} >
                        <PortableImageWithoutStyles value={image} />
                    </div>
                ))}
            </GridWrapper>

            <GridWrapper className={'flex justify-center'}>
                <Button color={'yellow'} href={'#contact'} size={'large'}>
                    Contact us
                </Button>
            </GridWrapper>

            <TextSection
                color={'green'}
                title={siteSettings?.careers_title}
                text={siteSettings?.careers_text}
                highlightedWord={'nothing'}
            />

            <div id="careers" />
            <div>
                {careers?.length ? (
                    <Slider id={'careers'}>
                        {careers?.map(career => <CareerCard key={career.title} career={career} />)}
                    </Slider>
                ) : (
                    <h2>We&apos;re not hiring right now</h2>
                )}

            </div>


        </main>
    )
}



export const getStaticProps = async () => {
    // const page = await loadSingleSanityContentByType('career');
    const careers = await loadAllSanityContentByType('career');
    const siteSettings = await loadSingleSanityContentByType('siteSettings', null);

    if (!careers) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            careers,
            siteSettings
        },
    }
}
