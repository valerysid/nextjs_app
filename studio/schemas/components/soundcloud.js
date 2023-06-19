import React from 'react'
import ReactPlayer from 'react-player/soundcloud'

const Preview = ({ value }) => {
    const { url } = value
    return (<ReactPlayer width={'100%'} height={140} url={url} />)
}

export default {
    name: 'soundcloud',
    type: 'object',
    title: 'Soundcloud Embed',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'soundcloud track URL'
        }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: Preview
    }
}