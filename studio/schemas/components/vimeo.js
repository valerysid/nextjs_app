import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

const Preview = ({ value }) => {
    const { url } = value;
    const id = getVimeoIdFromUrl(url)
    return (
        <Vimeo responsive video={id} />
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


export default {
    name: 'vimeo',
    type: 'object',
    title: 'Vimeo Embed',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'Vimeo video URL'
        }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: Preview
    }
}
