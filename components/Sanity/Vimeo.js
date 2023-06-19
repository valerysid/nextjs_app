import Vimeo from '@u-wave/react-vimeo';

export default function VimeoBlock({ url }) {
    const id = getVimeoIdFromUrl(url)
    return (
        <div className="horizontal-spacing relative max-w-full w-full md:w-10/12 py-8 md:py-16">
            <Vimeo
                video={id}
                responsive
            />
        </div>
    )
}

const getVimeoIdFromUrl = (url) => {
    // Look for a string with 'vimeo', then whatever, then a
    // forward slash and a group of digits.
    const match = /vimeo.*\/(\d+)/i.exec(url);
    // If the match isn't null (i.e. it matched)
    if (match) {
        // The grouped/matched digits from the regex
        return match[1];
    }
};

