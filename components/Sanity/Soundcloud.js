import ReactPlayer from 'react-player/soundcloud'

export default function SoundCloudBlock({ url }) {
    return (
        <div className='horizontal-spacing relative max-w-full w-full md:w-6/12 py-8 md:py-16'>
            <ReactPlayer width={'100%'} height={140} url={url} />
        </div>
    )
}
