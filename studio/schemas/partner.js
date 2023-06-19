export default {
    name: 'partner',
    title: 'partner',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ],

    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
}
