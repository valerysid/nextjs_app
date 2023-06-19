import { PortableText } from '@portabletext/react'
import Img from 'next/image'
import { useNextSanityImage } from 'next-sanity-image';
import SanityClient from '@sanity/client';

const configuredSanityClient = SanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
});

const TextWrapper = ({ children }) => {
    return (
        <div className="w-full horizontal-spacing ">
            {children}
        </div>
    )
}

export const PortableImageWithoutStyles = ({ value }) => {
    const imageProps = useNextSanityImage(
        configuredSanityClient,
        value
    );
    return (
        <div className='relative'>
            <Img {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />
        </div>
    )
}

const PortableImage = ({ value }) => {
    const imageProps = useNextSanityImage(
        configuredSanityClient,
        value
    );
    return (
        <div className="py-8 md:py-16 w-full md:w-10/12 horizontal-spacing ">
            <Img {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />
        </div>
    )
}

const components = {
    types: {
        image: PortableImage,
    },
    block: {
        normal: ({ children }) => (
            <TextWrapper>
                <p className='mb-4 md:mb-8 md:text-lg mx-auto w-full'>
                    {children}
                </p>
            </TextWrapper>
        ),
        h2: ({ children }) => (
            <TextWrapper>
                <h2 className='font-static mb-2 text-2xl md:text-4xl mx-auto w-full'>
                    {children}
                </h2>
            </TextWrapper>
        ),
        h3: ({ children }) => (
            <TextWrapper>
                <h3 className='font-static mb-1 text-xl md:text-2xl mx-auto w-full'>
                    {children}
                </h3>
            </TextWrapper>
        ),
        h4: ({ children }) => (
            <TextWrapper>
                <h4 className='font-static mb-1 text-lg md:text-xl mx-auto w-full'>
                    {children}
                </h4>
            </TextWrapper>
        ),
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <a className='underline font-bold hover:text-blue' href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
                    {children}
                </a>
            )
        },
    },
    list: {
        bullet: ({ children }) => (
            <TextWrapper>
                <ul className="mx-auto w-full mb-8 pl-4 list-outside md:text-lg list-disc">
                    {children}
                </ul>
            </TextWrapper>
        ),
        number: ({ children }) => (
            <TextWrapper>
                <ol className="mx-auto w-full mb-8 pl-4 list-outside md:text-lg list-decimal">
                    {children}
                </ol>
            </TextWrapper>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li>{children}</li>,
    },

}


export default function BlockContent({ content }) {

    return (
        <PortableText
            value={content}
            components={components}
        />
    )
}
