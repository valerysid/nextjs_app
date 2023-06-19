export default {
    name: 'team',
    title: 'team',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Naam',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Functie',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
        },
        {
            name: 'mainImage',
            title: 'Portret',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
    ],

    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
}
