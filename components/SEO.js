import { NextSeo } from "next-seo";

export default function SEO({ title, description, image, slug, siteName }) {
	console.log(title);
	return (
		<NextSeo
			title={siteName + "–" + title}
			description={description}
			openGraph={{
				url: "https://function-data.com/" + slug,
				title: title,
				description: description,
				images: [
					{
						url: image
							? image
							: "https://cdn.sanity.io/images/1o84lkhu/production/6a57a40c40bbcb0ae0e64f16716f30ba57ab9b59-2000x2000.jpg",
					},
				],
				siteName: "SiteName",
			}}
		/>
	);
}
