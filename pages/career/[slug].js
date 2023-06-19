import GridWrapper from '../../components/Layout/GridWrapper'
import Head from "next/head";
import { loadAllSanityContentByType, loadSingleSanityContentByType } from "../../utils/sanity-actions";
import Image from "next/image";
import Article from "../../components/Article";
import Button from '../../components/Button';
import SocialShare from '../../components/SocialShare';
import SEO from "../../components/SEO";

export default function Career({ page, siteSettings }) {
	return (
		<main className="relative pt-36">
			<SEO
				title={page?.title}
				description={page?.korte_samenvatting}
				image={null}
				slug={"career/" + page.slug.current}
				siteName={siteSettings.meta_title}
			/>

			<GridWrapper
				className={
					"pb-0 mb-0 md:pb-0 flex flex-wrap md:flex-nowrap items-center justify-center relative"
				}
			>
				<div className="w-full lg:w-5/12 xl:w-4/12">
					<aside className="bg-teal px-4 py-2 rounded-full inline-block">
						{page?.duration}
					</aside>
					<aside className="inline-block ml-4">{page.location}</aside>
					<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4">
						{page?.title}
					</h1>
				</div>
				<div className="hidden xl:block w-1/12"></div>
				<div className="w-full lg:w-6/12 xl:w-5/12 md:pl-8">
					<p className="text-xl md:text-3xl mt-4">{page?.korte_samenvatting}</p>
				</div>
			</GridWrapper>

			<GridWrapper
				className={
					"mt-0 pt-0 md:mt-0 md:pt-0 flex flex-wrap md:flex-nowrap items-center justify-center relative"
				}
			>
				<div className="w-full lg:w-5/12 xl:w-4/12">
					<div className="text-grey mt-8 flex items-center">
						<SocialShare title={page.title} />
						<span className="ml-2">Share this job application</span>
					</div>
				</div>
				<div className="hidden xl:block w-1/12"></div>
				<div className="w-full lg:w-6/12 xl:w-5/12 md:pl-8"></div>
			</GridWrapper>

			<Article
				siteSettings={siteSettings}
				showEducationPartner={true}
				content={page?.body}
			/>

			<GridWrapper className={"flex justify-center"}>
				<Button
					href={"mailto:join@function-data.com"}
					color={"green"}
					size={"large"}
				>
					Apply now
				</Button>
			</GridWrapper>
		</main>
	);
}

export const getStaticProps = async ({ params }) => {
	const slug = params.slug;
	const page = await loadSingleSanityContentByType("career", slug);
	const siteSettings = await loadSingleSanityContentByType(
		"siteSettings",
		null
	);

	if (!page) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			page,
			siteSettings,
		},
	};
};


export const getStaticPaths = async () => {
    const data = await loadAllSanityContentByType('career');

    return {
        paths: data.map((pageData) => ({ params: { slug: pageData.slug.current } })),
        fallback: "blocking",
    };
};