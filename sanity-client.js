const sanityClient = require('@sanity/client')
import createImageUrlBuilder from '@sanity/image-url'

const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_ID,
	dataset: "production",
	apiVersion: "2021-10-21",
	useCdn: true,
};

export const SanityClient = sanityClient(config);

const configWithToken = {
	projectId: process.env.NEXT_PUBLIC_SANITY_ID,
	dataset: "production",
	apiVersion: "2021-10-21",
	token: process.env.SANITY_TOKEN,
	useCdn: false,
};

export const SanityClientWithToken = sanityClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
