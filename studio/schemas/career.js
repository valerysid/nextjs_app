export default {
    name: 'career',
    title: 'Career',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'korte_samenvatting',
            title: 'Korte samenvatting voor in de overzichten',
            type: 'text',
            validation: Rule => Rule.required().min(10).max(120)
        },
        {
            name: 'duration',
            title: 'Duration',
            description: 'For example: part-time or full-time',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            description: 'For example: Amsterdam',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
}
