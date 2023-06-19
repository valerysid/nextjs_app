import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

export default function YoutubeBlock({ url }) {
    const id = getYouTubeId(url)

    const opts = {
        fullscreen: 1,
        pictureInPicture: 1,
        title: 0,
        frameborder: 0,
        playerVars: {
            color: '#ffff00',
            controls: 1,
            loop: 0,
            modestbranding: 1,
            title: 0,
            byline: 0,
            playsinline: 1,
            autoplay: 0,
        },
    };



    return (
        <div className='horizontal-spacing relative max-w-full w-full py-8 md:py-16'>
            <div className="aspect-w-16 aspect-h-9">
                <YouTube iframeClassName={'w-full h-full'} opts={opts} videoId={id} />
                {/* <iframe  allowfullscreen></iframe> */}
            </div>
        </div>
    )
}
