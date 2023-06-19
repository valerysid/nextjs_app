export default {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "blog_or_case",
			title: "Is case page",
			type: "boolean",
			initialValue: false,
		},
		{
			name: "bullet_points",
			title: "Bullet points",
			type: "array",
			of: [{ type: "string" }],
			hidden: ({ document }) => !document?.blog_or_case,
		},
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "client_name",
			title: "Client name",
			type: "string",
			hidden: ({ document }) => !document?.blog_or_case,
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "mainImage",
			title: "Afbeelding bovenaan",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "logo",
			title: "Logo klant",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "summary",
			title: "Summary",
			type: "text",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],

	preview: {
		select: {
			title: "title",
			media: "mainImage",
		},
	},
};
